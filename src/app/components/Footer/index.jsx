"use client";

import { useIntlayer } from "next-intlayer";
import { PROFILE } from "@/data/portfolio";

export default function Footer() {
    const content = useIntlayer("footer-content");

    return (
        <footer className="footer">
            <div className="footer__inner">
                <span>{content.copyright.value}</span>
                <span>{PROFILE.location}</span>
            </div>
        </footer>
    );
}
