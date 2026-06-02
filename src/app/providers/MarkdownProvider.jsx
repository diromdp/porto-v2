"use client";

import Markdown from "markdown-to-jsx";
import { MarkdownProvider } from "next-intlayer";

export const IntlayerMarkdownProvider = ({ children }) => {
    return (
        <MarkdownProvider renderMarkdown={(markdown) => <Markdown>{markdown}</Markdown>}>
            {children}
        </MarkdownProvider>
    );
};
