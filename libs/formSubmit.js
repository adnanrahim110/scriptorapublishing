"use client";

import {
  getAttributionFormFields,
  pushLeadConversionEvent,
} from "@/libs/attribution";

const defaultEndpoint =
  process.env.NEXT_PUBLIC_ENDPOINT_URL || "/api/sendEmail.php";

/**
 * @typedef {Object} SubmitFormOptions
 * @property {string=} endpoint
 * @property {HTMLFormElement | FormData | Record<string, unknown>=} formData
 * @property {string[]=} requiredFields
 * @property {Record<string, unknown>=} extraFields
 */

const isFormElement = (value) =>
  typeof window !== "undefined" &&
  value instanceof window.HTMLFormElement;

const isFormData = (value) =>
  typeof FormData !== "undefined" && value instanceof FormData;

const humanize = (key) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (char) => char.toUpperCase());

const normalizeToFormData = (input) => {
  if (!input) {
    return new FormData();
  }

  if (isFormData(input)) {
    const clone = new FormData();
    input.forEach((value, key) => {
      clone.append(key, value);
    });
    return clone;
  }

  if (isFormElement(input)) {
    return new FormData(input);
  }

  const payload = new FormData();

  if (typeof input === "object") {
    Object.entries(input).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          payload.append(key, item ?? "");
        });
      } else if (value instanceof File) {
        payload.append(key, value);
      } else if (value !== undefined && value !== null) {
        payload.append(key, String(value));
      }
    });
  }

  return payload;
};

const hasValue = (value) => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

/**
 * @param {SubmitFormOptions} [options]
 */
export const submitForm = async (options = {}) => {
  const {
    endpoint = defaultEndpoint,
    formData,
    requiredFields = [],
    extraFields = {},
  } = options;

  if (!endpoint) {
    return {
      success: false,
      error: "Form endpoint is not configured. Please try again later.",
    };
  }

  const payload = normalizeToFormData(formData);

  if (extraFields && typeof extraFields === "object") {
    Object.entries(extraFields).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      payload.set(key, value instanceof File ? value : String(value));
    });
  }

  const attributionFields = getAttributionFormFields();
  Object.entries(attributionFields).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    payload.set(key, String(value));
  });

  const validationErrors = {};
  requiredFields.forEach((field) => {
    const value = payload.get(field);
    if (!hasValue(value)) {
      validationErrors[field] = `${humanize(field)} is required.`;
    }
  });

  if (Object.keys(validationErrors).length > 0) {
    return { success: false, validationErrors };
  }

  const body = new URLSearchParams();
  for (const [key, value] of payload.entries()) {
    if (value instanceof File) continue;
    body.append(key, value ?? "");
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const responseText = await response.text();
    let json;
    try {
      json = responseText ? JSON.parse(responseText) : null;
    } catch {
      json = null;
    }

    const status = json?.status;
    const message =
      json?.message ||
      (response.ok
        ? "Unexpected response received from the server."
        : "Unable to submit the form at the moment. Please try again.");

    if (!response.ok || status !== "success") {
      return {
        success: false,
        error: message,
        validationErrors: json?.validationErrors,
        statusCode: response.status || 500,
        data: json,
      };
    }

    pushLeadConversionEvent({
      formName: payload.get("formName") || payload.get("form_name") || "",
      attribution: attributionFields,
    });

    return { success: true, data: json };
  } catch (error) {
    return {
      success: false,
      error:
        error?.message ||
        "We could not reach the server. Please check your connection and try again.",
    };
  }
};
