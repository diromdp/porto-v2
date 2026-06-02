"use client";

import { Plus, Minus, Layers } from "lucide-react";
import { useState } from "react";
import { useMap } from "@/context/map-context";
import { useIntlayer } from "next-intlayer";

export default function MapControls() {
    return (
        <div className="mrv-controls">
            <BasemapControl />
            <ZoomControl />
        </div>
    );
}

function ZoomControl() {
    const { map } = useMap();

    return (
        <div className="mrv-controls-zoom">
            <div onClick={() => map?.zoomIn()} aria-label="Zoom in" role="button" tabIndex={0}>
                <Plus size={18} />
            </div>
            <div onClick={() => map?.zoomOut()} aria-label="Zoom out" role="button" tabIndex={0}>
                <Minus size={18} />
            </div>
        </div>
    );
}

function BasemapControl() {
    const content = useIntlayer("control-content");
    const { styles, activeStyle, changeStyle } = useMap();
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                className="mrv-controls-basemap"
                aria-label={content.basemap.value}
                onClick={() => setOpen((prev) => !prev)}
            >
                <Layers size={18} />
            </button>
            {open && (
                <div className="mrv-controls-basemap-panel">
                    {styles.map((style) => (
                        <button
                            key={style.name}
                            type="button"
                            className={activeStyle.name === style.name ? "active" : ""}
                            onClick={() => {
                                changeStyle(style);
                                setOpen(false);
                            }}
                        >
                            {style.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
