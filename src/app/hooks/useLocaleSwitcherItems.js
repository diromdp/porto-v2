"use client";

import { getLocaleName } from "intlayer";
import { useLocale, useLocaleStorage } from "next-intlayer";
import { useRouter, usePathname } from "next/navigation";

export default function useLocaleSwitcherItems() {
    const { locale, availableLocales } = useLocale();
    const { setLocale } = useLocaleStorage();
    const router = useRouter();
    const pathname = usePathname();

    const getRelativeLocalizedUrl = (targetLocale) => {
        if (!pathname) return `/${targetLocale}/`;

        const pathParts = pathname.split("/").filter(Boolean);

        if (pathParts.length && availableLocales.includes(pathParts[0])) {
            pathParts.shift();
        }

        const newPath = pathParts.length ? `/${pathParts.join("/")}` : "";

        return targetLocale === "en" ? newPath || "/" : `/${targetLocale}${newPath}`;
    };

    const items = availableLocales.map((locItem) => {
        const href = getRelativeLocalizedUrl(locItem);

        return {
            label: getLocaleName(locItem),
            code: locItem,
            href,
            onClick: () => {
                setTimeout(() => setLocale(locItem), 0);
                router.push(href);
            },
            active: locItem === locale,
        };
    });

    return {
        label: locale.toUpperCase(),
        items,
    };
}
