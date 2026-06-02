"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import stylesData from "@/data/styles.json";
import { MapContext } from "@/context/map-context";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapProvider({ mapContainerRef, initialViewState, children }) {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [activeStyle, setActiveStyle] = useState(stylesData.data[0]);

    const styles = stylesData.data;

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: styles[0].style,
            center: [initialViewState.longitude, initialViewState.latitude],
            zoom: initialViewState.zoom,
            maxZoom: initialViewState.maxZoom,
            minZoom: initialViewState.minZoom,
            attributionControl: false,
            logoPosition: "bottom-right",
            preserveDrawingBuffer: true,
        });

        if (initialViewState.maxBounds) {
            mapRef.current.setMaxBounds(initialViewState.maxBounds);
        }

        setMap(mapRef.current);

        mapRef.current.on("load", () => {
            setLoaded(true);
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                setMap(null);
            }
        };
    }, [initialViewState, mapContainerRef, styles]);

    const changeStyle = (style) => {
        if (!map) return;

        const center = map.getCenter();
        const zoom = map.getZoom();
        const bearing = map.getBearing();
        const pitch = map.getPitch();

        map.once("style.load", () => {
            map.jumpTo({ center, zoom, bearing, pitch });

            if (initialViewState.maxBounds) {
                map.setMaxBounds(initialViewState.maxBounds);
            }
        });

        map.setStyle(style.style);
        setActiveStyle(style);
    };

    return (
        <>
            <MapContext.Provider
                value={{
                    map,
                    styles,
                    activeStyle,
                    changeStyle,
                    initialViewState,
                }}
            >
                {children}
            </MapContext.Provider>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
                    <div className="w-10 h-10 border-4 border-khg-benthic-blue border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </>
    );
}
