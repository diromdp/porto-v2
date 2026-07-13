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
        liveSync: false,
    },
    build: {
        optimize: true,
        importMode: "static",
    },
};

export default config;
