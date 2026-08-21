import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import "../../../public/styles/globals.scss";
import GlobalUtilsProvider from "@/app/providers/GlobalUtilsProvider";
import "@/app/utils/globals";
import { IntlayerProvider } from "@/app/providers/IntlayerProvider";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getHTMLTextDir } from "intlayer";

export { generateStaticParams } from "next-intlayer";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    weight: ["500", "600"],
});

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const isDefault = locale === "en";
    const canonicalPath = isDefault ? "/" : `/${locale}`;

    return {
        title: "Dirom Purbowiseno, Fullstack Developer",
        description:
            "I'm Dirom Purbowiseno, a fullstack developer. For the past eight years I've been building products end to end — backend, frontend, and mobile — with Node.js, Nest.js, React, Next.js, and React Native.",
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
                    ${manrope.variable}
                    ${inter.variable}
                    ${jetbrainsMono.variable}
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
