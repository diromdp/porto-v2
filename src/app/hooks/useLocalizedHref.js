"use client";

import { useLocale } from "next-intlayer";

export function useLocalizedHref() {
    const locale = useLocale().locale;

    return function getHref(path, targetLocale, defaultLocale) {
        const localeToUse = targetLocale || locale;

        return $utils.getLocalizedHref(path, localeToUse, defaultLocale);
    };
}
