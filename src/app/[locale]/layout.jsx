import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed } from "next/font/google";
import "@/app/globals.css";
import "../../../public/styles/globals.scss";
import GlobalUtilsProvider from "@/app/providers/GlobalUtilsProvider";
import "@/app/utils/globals";
import { IntlayerProvider } from "@/app/providers/IntlayerProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getHTMLTextDir } from "intlayer";

export { generateStaticParams } from "next-intlayer";

const barlow = Barlow({
    subsets: ["latin"],
    variable: "--font-barlow",
    weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    variable: "--font-barlow-condensed",
    weight: ["400", "500", "600", "700"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
    subsets: ["latin"],
    variable: "--font-barlow-semi-condensed",
    weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const isDefault = locale === "en";
    const canonicalPath = isDefault ? "/" : `/${locale}`;

    return {
        title: "Dirom Purbowiseno, Front-End Developer",
        description:
            "I'm Dirom Purbowiseno, a front-end developer. For the past six years I've been building fast, interactive web apps with React, Next.js, and TypeScript.",
        alternates: {
            canonical: `${$utils.getSiteUrl()}${canonicalPath}`,
            languages: {
                "x-default": `${$utils.getSiteUrl()}/`,
                en: `${$utils.getSiteUrl()}/`,
                id: `${$utils.getSiteUrl()}/id`,
            },
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    return (
        <html lang={locale} dir={getHTMLTextDir(locale)}>
            <body
                className={`
                    ${barlow.variable}
                    ${barlowCondensed.variable}
                    ${barlowSemiCondensed.variable}
                    antialiased
                `}
            >
                <IntlayerProvider locale={locale}>
                    <GlobalUtilsProvider>
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </GlobalUtilsProvider>
                </IntlayerProvider>
            </body>
        </html>
    );
}
