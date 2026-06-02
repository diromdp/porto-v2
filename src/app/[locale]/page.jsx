"use client";

import Link from "next/link";
import { useIntlayer } from "next-intlayer";
import { useLocalizedHref } from "@/app/hooks/useLocalizedHref";

export default function HomePage() {
    const content = useIntlayer("home-content");
    const getHref = useLocalizedHref();

    return (
        <section className="home">
            <div className="home__hero">
                <h1>{content.title.value}</h1>
                <p className="body-18-regular mt-4 max-w-2xl mx-auto opacity-80">
                    {content.description.value}
                </p>
            </div>
            <div className="home__links">
                <Link href={getHref("/map")} className="btn btn-primary">
                    {content.mapLink.label.value}
                </Link>
            </div>
        </section>
    );
}
