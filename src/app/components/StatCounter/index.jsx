"use client";

import { useEffect, useRef, useState } from "react";

// Animates a numeric stat from 0 to its target the first time it scrolls into view.
// Keeps any non-numeric prefix/suffix (e.g. "6+", "30%", "87").
export default function StatCounter({ value, duration = 1600, className }) {
    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
    const prefix = match ? match[1] : "";
    const numberText = match ? match[2] : "";
    const suffix = match ? match[3] : "";
    const target = match ? parseFloat(numberText) : 0;
    const decimals = numberText.includes(".") ? numberText.split(".")[1].length : 0;

    const ref = useRef(null);
    const [display, setDisplay] = useState(0);

    // Primitive deps only — using the parsed array as a dep would re-run this on
    // every animation frame (new array each render) and restart the count.
    useEffect(() => {
        if (!match) return;

        const node = ref.current;
        if (!node) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setDisplay(target);
            return;
        }

        let frameId;
        let startTime;

        const tick = (now) => {
            if (startTime === undefined) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplay(target * eased);
            if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                    frameId = requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
            if (frameId) cancelAnimationFrame(frameId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, decimals, duration]);

    if (!match) {
        return <span className={className}>{value}</span>;
    }

    return (
        <span ref={ref} className={className}>
            {prefix}
            {display.toFixed(decimals)}
            {suffix}
        </span>
    );
}
