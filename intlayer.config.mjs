import { Locales } from "intlayer";

/** @type {import('intlayer').IntlayerConfig} */
const config = {
    internationalization: {
        locales: [
            Locales.INDONESIAN,
            Locales.ENGLISH,
        ],
        defaultLocale: Locales.ENGLISH,
        localeDetection: false,
        strictMode: "strict",
    },
    editor: {
        liveSync: true,
    },
    build: {
        optimize: true,
        importMode: "live",
    },
};

export default config;
