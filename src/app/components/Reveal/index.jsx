"use client";

import { motion } from "motion/react";

// Lightweight scroll-reveal: fades + lifts content into view once.
const VARIANTS = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function Reveal({ children, as = "div", delay = 0, className, ...rest }) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={VARIANTS}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}
