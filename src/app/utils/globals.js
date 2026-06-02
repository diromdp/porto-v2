import {
    getLocalizedHref,
    getLocalized,
    getLocalizedComponents,
    getAssetPath,
    getSiteUrl,
    translate,
} from "@/app/utils/helpers";

if (typeof window !== "undefined") {
    if (!window.$utils) {
        window.$utils = {
            getLocalizedHref,
            getLocalized,
            getLocalizedComponents,
            getAssetPath,
            getSiteUrl,
            translate,
        };
    }
} else if (typeof globalThis !== "undefined") {
    if (!globalThis.$utils) {
        globalThis.$utils = {
            getLocalizedHref,
            getLocalized,
            getLocalizedComponents,
            getAssetPath,
            getSiteUrl,
            translate,
        };
    }
}
