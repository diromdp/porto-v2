"use client";

import Link from "next/link";
import { useIntlayer } from "next-intlayer";
import { useLocalizedHref } from "@/app/hooks/useLocalizedHref";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";

export default function Header() {
    const content = useIntlayer("header-content");
    const getHref = useLocalizedHref();

    return (
        <header className="header">
            <div className="header__inner">
                <Link href={getHref("/")} className="font-semibold text-lg">
                    {content.brand.value}
                </Link>
                <nav className="header__nav">
                    <Link href={getHref("/")} className="header__link">
                        {content.home.value}
                    </Link>
                    <Link href={getHref("/map")} className="header__link">
                        {content.map.value}
                    </Link>
                    <LocaleSwitcher />
                </nav>
            </div>
        </header>
    );
}
