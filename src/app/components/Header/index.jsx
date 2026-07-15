"use client";

import Link from "next/link";
import { useIntlayer, useLocale } from "next-intlayer";
import { Download } from "lucide-react";

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
                    <a
                        href="/assets/cv/Dirom%20Purbowiseno%20-%20Front-End%20Developer%20-%20CV.pdf"
                        download="Dirom Purbowiseno - Front-End Developer - CV.pdf"
                        className="header__cv"
                    >
                        <Download size={16} aria-hidden />
                        {content.cv.value}
                    </a>
                </nav>
            </div>
        </header>
    );
}
