import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { IntlayerMarkdownProvider } from "./MarkdownProvider";

export const IntlayerProvider = ({ children, locale }) => {
    return (
        <IntlayerMarkdownProvider>
            <IntlayerServerProvider locale={locale}>
                <IntlayerClientProvider locale={locale}>
                    {children}
                </IntlayerClientProvider>
            </IntlayerServerProvider>
        </IntlayerMarkdownProvider>
    );
};
