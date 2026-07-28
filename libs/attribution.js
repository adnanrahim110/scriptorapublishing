const STORAGE_KEY = "scriptora_lead_attribution";
const LEGACY_STORAGE_KEY = "bpf_lead_attribution";
const ATTRIBUTION_TTL_DAYS = 90;

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "fbclid",
  "ttclid",
  "li_fat_id",
];

const PAID_MEDIUMS = [
  "cpc",
  "ppc",
  "paid",
  "paidsearch",
  "paid-search",
  "paid_search",
  "paid social",
  "paidsocial",
  "paid-social",
  "paid_social",
  "display",
  "programmatic",
  "remarketing",
  "retargeting",
];

const SEARCH_ENGINES = [
  { host: "google.", source: "google" },
  { host: "bing.com", source: "bing" },
  { host: "yahoo.", source: "yahoo" },
  { host: "duckduckgo.com", source: "duckduckgo" },
  { host: "ecosia.org", source: "ecosia" },
  { host: "yandex.", source: "yandex" },
  { host: "baidu.", source: "baidu" },
];

const SOCIAL_SOURCES = [
  { host: "facebook.com", source: "facebook" },
  { host: "instagram.com", source: "instagram" },
  { host: "linkedin.com", source: "linkedin" },
  { host: "t.co", source: "twitter" },
  { host: "twitter.com", source: "twitter" },
  { host: "x.com", source: "x" },
  { host: "tiktok.com", source: "tiktok" },
  { host: "youtube.com", source: "youtube" },
];

const isBrowser = () => typeof window !== "undefined";

const isFirstCaptureForDocument = () => {
  if (!isBrowser()) return false;

  if (window.__scriptoraAttributionDocumentCaptured) {
    return false;
  }

  window.__scriptoraAttributionDocumentCaptured = true;
  return true;
};

const normalize = (value) =>
  typeof value === "string" ? value.trim().toLowerCase() : "";

const normalizeMedium = (value) => normalize(value).replace(/[_-]+/g, " ");

const hasValue = (value) =>
  typeof value === "string" ? value.trim().length > 0 : Boolean(value);

const addDays = (date, days) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const parseJson = (value) => {
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

const getHostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
};

const findKnownSource = (hostname, sources) =>
  sources.find(({ host }) => hostname.includes(host))?.source || "";

const getExternalReferrer = () => {
  if (!isBrowser() || !document.referrer) return "";

  try {
    const referrerUrl = new URL(document.referrer);
    if (referrerUrl.hostname === window.location.hostname) {
      return "";
    }
  } catch {
    return "";
  }

  return document.referrer;
};

const getTrackedParams = (searchParams) => {
  const params = {};

  TRACKED_PARAMS.forEach((key) => {
    const value = searchParams.get(key);
    if (hasValue(value)) {
      params[key] = value.trim();
    }
  });

  return params;
};

const hasCampaignSignal = (params) =>
  TRACKED_PARAMS.some((key) => hasValue(params[key]));

const isPaidMedium = (medium) => PAID_MEDIUMS.includes(normalizeMedium(medium));

const classifyTouch = ({ params, referrer }) => {
  const utmSource = normalize(params.utm_source);
  const utmMedium = normalizeMedium(params.utm_medium);
  const referrerHost = getHostname(referrer);
  const searchSource = findKnownSource(referrerHost, SEARCH_ENGINES);
  const socialSource = findKnownSource(referrerHost, SOCIAL_SOURCES);

  if (params.gclid || params.gbraid || params.wbraid) {
    return {
      channel: "ppc",
      source: params.utm_source || "google",
      medium: params.utm_medium || "cpc",
    };
  }

  if (params.msclkid) {
    return {
      channel: "ppc",
      source: params.utm_source || "microsoft",
      medium: params.utm_medium || "cpc",
    };
  }

  if (params.fbclid) {
    return {
      channel: "paid_social",
      source: params.utm_source || "facebook",
      medium: params.utm_medium || "paid_social",
    };
  }

  if (params.ttclid) {
    return {
      channel: "paid_social",
      source: params.utm_source || "tiktok",
      medium: params.utm_medium || "paid_social",
    };
  }

  if (params.li_fat_id) {
    return {
      channel: "paid_social",
      source: params.utm_source || "linkedin",
      medium: params.utm_medium || "paid_social",
    };
  }

  if (isPaidMedium(params.utm_medium)) {
    return {
      channel: "ppc",
      source: params.utm_source || "unknown",
      medium: params.utm_medium,
    };
  }

  if (utmMedium.includes("organic")) {
    return {
      channel: "seo",
      source: params.utm_source || searchSource || "organic",
      medium: params.utm_medium || "organic",
    };
  }

  if (utmMedium.includes("email")) {
    return {
      channel: "email",
      source: params.utm_source || "email",
      medium: params.utm_medium,
    };
  }

  if (utmMedium.includes("social")) {
    return {
      channel: "social",
      source: params.utm_source || socialSource || "social",
      medium: params.utm_medium,
    };
  }

  if (utmSource || params.utm_campaign) {
    return {
      channel: "campaign",
      source: params.utm_source || "unknown",
      medium: params.utm_medium || "unknown",
    };
  }

  if (searchSource) {
    return {
      channel: "seo",
      source: searchSource,
      medium: "organic",
    };
  }

  if (socialSource) {
    return {
      channel: "social",
      source: socialSource,
      medium: "referral",
    };
  }

  if (referrerHost) {
    return {
      channel: "referral",
      source: referrerHost,
      medium: "referral",
    };
  }

  return {
    channel: "direct",
    source: "direct",
    medium: "none",
  };
};

const createTouch = () => {
  if (!isBrowser()) return null;

  const url = new URL(window.location.href);
  const params = getTrackedParams(url.searchParams);
  const referrer = getExternalReferrer();
  const traffic = classifyTouch({ params, referrer });
  const capturedAt = new Date().toISOString();

  return {
    ...traffic,
    campaign: params.utm_campaign || "",
    term: params.utm_term || "",
    content: params.utm_content || "",
    landingPage: url.href,
    pagePath: `${url.pathname}${url.search}`,
    referrer,
    capturedAt,
    params,
    hasCampaignSignal: hasCampaignSignal(params),
  };
};

const stripRuntimeFields = (touch) => {
  if (!touch) return null;

  const storedTouch = { ...touch };
  delete storedTouch.hasCampaignSignal;
  return storedTouch;
};

const isExpired = (attribution) => {
  if (!attribution?.expiresAt) return false;
  return new Date(attribution.expiresAt).getTime() < Date.now();
};

export const getStoredAttribution = () => {
  if (!isBrowser()) return null;

  let attribution = null;

  try {
    attribution =
      parseJson(window.localStorage.getItem(STORAGE_KEY)) ||
      parseJson(window.localStorage.getItem(LEGACY_STORAGE_KEY));

    if (
      attribution &&
      !window.localStorage.getItem(STORAGE_KEY) &&
      window.localStorage.getItem(LEGACY_STORAGE_KEY)
    ) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    }
  } catch {
    return null;
  }

  if (!attribution || isExpired(attribution)) {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // Storage may be unavailable in hardened browser privacy modes.
    }
    return null;
  }

  return attribution;
};

const storeAttribution = (attribution) => {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution should enrich leads, not prevent form submissions.
  }
};

export const captureAttributionFromCurrentUrl = () => {
  const touch = createTouch();
  if (!touch) return null;

  const isDocumentEntry = isFirstCaptureForDocument();
  const existing = getStoredAttribution();
  const now = new Date();
  const shouldUpdateLastTouch =
    !existing?.lastTouch ||
    touch.hasCampaignSignal ||
    (isDocumentEntry && touch.channel !== "direct" && hasValue(touch.referrer));

  const nextAttribution = {
    firstTouch: existing?.firstTouch || stripRuntimeFields(touch),
    lastTouch: shouldUpdateLastTouch
      ? stripRuntimeFields(touch)
      : existing.lastTouch,
    lastSeenPage: touch.landingPage,
    updatedAt: now.toISOString(),
    expiresAt: addDays(now, ATTRIBUTION_TTL_DAYS).toISOString(),
  };

  storeAttribution(nextAttribution);
  return nextAttribution;
};

const valueFromTouches = (key, lastTouch, firstTouch) =>
  lastTouch?.[key] || firstTouch?.[key] || "";

const paramFromTouches = (key, lastTouch, firstTouch) =>
  lastTouch?.params?.[key] || firstTouch?.params?.[key] || "";

export const getAttributionFormFields = () => {
  if (!isBrowser()) return {};

  const attribution = captureAttributionFromCurrentUrl() || getStoredAttribution();
  const firstTouch = attribution?.firstTouch;
  const lastTouch = attribution?.lastTouch || firstTouch;

  if (!firstTouch && !lastTouch) return {};

  return {
    attribution_model: "first_touch_and_last_touch",
    lead_channel: valueFromTouches("channel", lastTouch, firstTouch),
    lead_source: valueFromTouches("source", lastTouch, firstTouch),
    lead_medium: valueFromTouches("medium", lastTouch, firstTouch),
    lead_campaign: valueFromTouches("campaign", lastTouch, firstTouch),
    utm_source: paramFromTouches("utm_source", lastTouch, firstTouch),
    utm_medium: paramFromTouches("utm_medium", lastTouch, firstTouch),
    utm_campaign: paramFromTouches("utm_campaign", lastTouch, firstTouch),
    utm_term: paramFromTouches("utm_term", lastTouch, firstTouch),
    utm_content: paramFromTouches("utm_content", lastTouch, firstTouch),
    utm_id: paramFromTouches("utm_id", lastTouch, firstTouch),
    gclid: paramFromTouches("gclid", lastTouch, firstTouch),
    gbraid: paramFromTouches("gbraid", lastTouch, firstTouch),
    wbraid: paramFromTouches("wbraid", lastTouch, firstTouch),
    msclkid: paramFromTouches("msclkid", lastTouch, firstTouch),
    fbclid: paramFromTouches("fbclid", lastTouch, firstTouch),
    ttclid: paramFromTouches("ttclid", lastTouch, firstTouch),
    li_fat_id: paramFromTouches("li_fat_id", lastTouch, firstTouch),
    first_lead_channel: firstTouch?.channel || "",
    first_lead_source: firstTouch?.source || "",
    first_lead_medium: firstTouch?.medium || "",
    first_landing_page: firstTouch?.landingPage || "",
    first_referrer: firstTouch?.referrer || "",
    first_touch_at: firstTouch?.capturedAt || "",
    last_landing_page: lastTouch?.landingPage || "",
    last_referrer: lastTouch?.referrer || "",
    last_touch_at: lastTouch?.capturedAt || "",
    conversion_page: window.location.href,
  };
};

export const pushLeadConversionEvent = ({ formName, attribution } = {}) => {
  if (!isBrowser()) return;

  const fields = attribution || getAttributionFormFields();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_submit",
    form_name: formName || "",
    lead_channel: fields.lead_channel || "",
    lead_source: fields.lead_source || "",
    lead_medium: fields.lead_medium || "",
    lead_campaign: fields.lead_campaign || "",
    conversion_page: fields.conversion_page || window.location.href,
  });
};

export const pushPhoneClickEvent = ({ phoneNumber } = {}) => {
  if (!isBrowser()) return;

  const fields = getAttributionFormFields();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "phone_click",
    phone_number: phoneNumber || "",
    lead_channel: fields.lead_channel || "",
    lead_source: fields.lead_source || "",
    lead_medium: fields.lead_medium || "",
    lead_campaign: fields.lead_campaign || "",
    conversion_page: fields.conversion_page || window.location.href,
  });
};

export const getLiveChatAttributionVariables = () => {
  const fields = getAttributionFormFields();
  const variables = {
    "Lead Channel": fields.lead_channel,
    "Lead Source": fields.lead_source,
    "Lead Medium": fields.lead_medium,
    "Lead Campaign": fields.lead_campaign,
    "UTM Source": fields.utm_source,
    "UTM Medium": fields.utm_medium,
    "UTM Campaign": fields.utm_campaign,
    "UTM Term": fields.utm_term,
    GCLID: fields.gclid,
    GBRAID: fields.gbraid,
    WBRAID: fields.wbraid,
    MSCLKID: fields.msclkid,
    "First Landing Page": fields.first_landing_page,
    "Last Landing Page": fields.last_landing_page,
    "Conversion Page": fields.conversion_page,
  };

  return Object.fromEntries(
    Object.entries(variables).filter(([, value]) => hasValue(value)),
  );
};

export const applyLiveChatAttribution = () => {
  if (!isBrowser() || !window.LiveChatWidget?.call) return;

  const variables = getLiveChatAttributionVariables();
  if (Object.keys(variables).length === 0) return;

  window.LiveChatWidget.call("update_session_variables", variables);
};

export const pushLiveChatFormSubmitEvent = ({ type } = {}) => {
  if (!isBrowser()) return;

  const fields = getAttributionFormFields();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "livechat_form_submit",
    form_type: type || "",
    lead_channel: fields.lead_channel || "",
    lead_source: fields.lead_source || "",
    lead_medium: fields.lead_medium || "",
    lead_campaign: fields.lead_campaign || "",
    conversion_page: fields.conversion_page || window.location.href,
  });
};
