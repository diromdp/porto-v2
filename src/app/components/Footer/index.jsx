"use client";

import { useIntlayer } from "next-intlayer";

export default function Footer() {
    const content = useIntlayer("footer-content");

    return (
        <footer className="footer">
            <div className="footer__inner">
                {content.copyright.value}
            </div>
        </footer>
    );
}
