"use client";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center bg-gray-100"
      style={{ height: "400px", borderRadius: "4px" }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "3px solid transparent",
          borderTopColor: "#E00201",
          borderRightColor: "#E00201",
          animation: "preloader-spin 1.2s linear infinite",
        }}
      />
    </div>
  ),
});

export default function MapWrapper() {
  return <MapView />;
}
