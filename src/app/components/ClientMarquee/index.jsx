"use client";

import { useIntlayer } from "next-intlayer";
import { CLIENTS } from "@/data/portfolio";

// Auto-scrolling client logo strip. The track holds two identical halves and
// the CSS animation translates by -50%, so the reset lands on a perfect seam.
// For that to look continuous each half must be wider than the viewport —
// otherwise blank space appears on the right before the loop resets. With only
// a handful of logos one copy isn't wide enough, so we repeat the list twice
// per half (4 copies total). Copies past the first are aria-hidden so screen
// readers announce each client only once.
const HALF_REPEATS = 2;

export default function ClientMarquee() {
    const content = useIntlayer("home-content");
    const half = Array.from({ length: HALF_REPEATS }, () => CLIENTS).flat();
    const loop = [...half, ...half];

    return (
        <section className="client-marquee" aria-label={content.clients.caption.value}>
            <h3 className="client-marquee__caption">{content.clients.caption.value}</h3>
            <div className="client-marquee__viewport">
                <ul className="client-marquee__track">
                    {loop.map((client, i) => (
                        <li
                            key={`${client.name}-${i}`}
                            className="client-marquee__item"
                            aria-hidden={i >= CLIENTS.length}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={client.logo}
                                alt={client.name}
                                width={client.width}
                                height={40}
                                loading="lazy"
                                className="client-marquee__logo"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
