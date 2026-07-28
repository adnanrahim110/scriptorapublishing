const DEFAULT_SITE_URL = "https://scriptorapublishing.com";

export const getSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_ENDPOINT_URL?.replace(/\/api\/sendEmail\.php$/, "") ||
    DEFAULT_SITE_URL;

  return configuredUrl.replace(/\/$/, "");
};

