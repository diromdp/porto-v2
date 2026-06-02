import { t } from "intlayer";

export const getLocalizedHref = (path, targetLocale, defaultLocale = "id") => {
    if (!path) return "/";

    const lowerPath = path.toLowerCase();
    const isExternal = lowerPath.startsWith("http://") || lowerPath.startsWith("https://") || lowerPath.startsWith("//");
    const isUriScheme = lowerPath.startsWith("mailto:") || lowerPath.startsWith("tel:");

    if (isExternal || isUriScheme) {
        return path;
    }

    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return targetLocale === defaultLocale ? cleanPath : `/${targetLocale}${cleanPath}`;
};

export function getLocalized(page, field, locale) {
    const localizedKey = locale === "en" ? field : `${field}_${locale}`;

    return page?.[localizedKey] || null;
}

export function getLocalizedComponents(page, locale) {
    const localizedKey = locale === "en" ? "components" : `components_${locale}`;

    return page?.[localizedKey] || page?.components || null;
}

export function getAssetPath(url) {
    if (!url) return null;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    return `${baseUrl}/${url.replace(/^\/+/, "")}`;
}

export function getSiteUrl() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    return siteUrl.replace(/\/+$/, "");
}

export const translate = (textObj) => t(textObj);
