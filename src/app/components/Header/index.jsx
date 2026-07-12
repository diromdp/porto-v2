"use client";

import Link from "next/link";
import { useIntlayer, useLocale } from "next-intlayer";

export default function Header() {
    const content = useIntlayer("header-content");
    const { locale } = useLocale();
    const homeHref = locale === "en" ? "/" : `/${locale}`;

    return (
        <header className="header">
            <div className="header__inner">
                <Link href={homeHref} className="header__logo" aria-label={content.brand.value}>
                    DP
                </Link>
                <nav className="header__nav">
                    <a href="#projects" className="header__link">
                        {content.work.value}
                    </a>
                    <a href="#contact" className="header__link">
                        {content.contact.value}
                    </a>
                </nav>
            </div>
        </header>
    );
}
