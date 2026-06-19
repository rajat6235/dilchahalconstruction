"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const POSITION: [number, number] = [52.1501, -106.6616];
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=Unit+107,+1222+Alberta+Ave,+Saskatoon,+SK+S7K+1R4";

/* Custom red SVG marker — no external image requests */
const markerIcon = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <path fill="#E00201" stroke="#8B0001" stroke-width="0.5"
      d="M12 0C5.373 0 0 5.373 0 12c0 8 12 24 12 24S24 20 24 12C24 5.373 18.627 0 12 0z"/>
    <circle cx="12" cy="12" r="4.5" fill="#fff"/>
  </svg>`,
  className: "",
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -42],
});

function MapClickHandler() {
  const map = useMap();
  useEffect(() => {
    const handler = () =>
      window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
    map.on("click", handler);
    return () => { map.off("click", handler); };
  }, [map]);
  return null;
}

export default function MapView() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "400px", borderRadius: "4px", cursor: "pointer" }}
    >
      <MapContainer
        center={POSITION}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        zoomControl
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker position={POSITION} icon={markerIcon} />
        <MapClickHandler />
      </MapContainer>

      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-[1000] flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded hover:opacity-90 transition-opacity"
        style={{ background: "#E00201" }}
        onClick={(e) => e.stopPropagation()}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        View on Google Maps
      </a>
    </div>
  );
}
