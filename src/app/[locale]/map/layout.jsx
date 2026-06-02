"use client";

import { useRef } from "react";
import MapProvider from "@/lib/mapbox/provider";
import MapControls from "@/app/components/maps/Controls";

export default function MapLayout({ children }) {
    const mapContainerRef = useRef(null);

    const initialViewState = {
        longitude: 114.0,
        latitude: 1.5,
        zoom: 6,
        minZoom: 4,
        maxZoom: 18,
        maxBounds: [
            [106.5, -6.0],
            [121.5, 9.0],
        ],
    };

    return (
        <div className="mrv">
            <div ref={mapContainerRef} className="mapbox-container" />
            <MapProvider mapContainerRef={mapContainerRef} initialViewState={initialViewState}>
                <MapControls />
                {children}
            </MapProvider>
        </div>
    );
}
