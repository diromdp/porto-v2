"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntlayer, useLocale } from "next-intlayer";
import { Download, Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/Sheet";

const CV_HREF = "/assets/cv/Dirom%20Purbowiseno%20-%20Fullstack%20Developer%20-%20CV.pdf";
const CV_FILENAME = "Dirom Purbowiseno - Fullstack Developer - CV.pdf";

export default function Header() {
    const content = useIntlayer("header-content");
    const { locale } = useLocale();
    const homeHref = locale === "en" ? "/" : `/${locale}`;
    const [menuOpen, setMenuOpen] = useState(false);

    // Shared by the desktop bar and the mobile drawer so the two never drift.
    const navLinks = [
        { href: "#projects", label: content.work.value },
        { href: "#contact", label: content.contact.value },
    ];

    return (
        <header className="header">
            <div className="header__inner">
                <Link href={homeHref} className="header__logo" aria-label={content.brand.value}>
                    <span className="header__logo-dot" aria-hidden />
                    {content.brand.value}
                </Link>

                <nav className="header__nav">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="header__link">
                            {link.label}
                        </a>
                    ))}
                    <a href={CV_HREF} download={CV_FILENAME} className="header__cv">
                        <Download size={16} aria-hidden />
                        {content.cv.value}
                    </a>
                </nav>

                <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                    <SheetTrigger className="header__burger" aria-label={content.openMenu.value}>
                        <Menu size={22} aria-hidden />
                    </SheetTrigger>
                    <SheetContent closeLabel={content.closeMenu.value}>
                        <SheetTitle className="header__drawer-title">
                            <span className="header__logo-dot" aria-hidden />
                            {content.brand.value}
                        </SheetTitle>
                        <nav className="header__drawer-nav">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.href}>
                                    <a href={link.href} className="header__drawer-link">
                                        {link.label}
                                    </a>
                                </SheetClose>
                            ))}
                        </nav>
                        <SheetClose asChild>
                            <a href={CV_HREF} download={CV_FILENAME} className="header__cv header__drawer-cv">
                                <Download size={16} aria-hidden />
                                {content.cv.value}
                            </a>
                        </SheetClose>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
