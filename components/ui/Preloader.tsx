"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Phase = "visible" | "fading" | "hidden";

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const startFade = () => {
      setTimeout(() => {
        setPhase("fading");
        setTimeout(() => setPhase("hidden"), 600);
      }, 250);
    };

    if (document.readyState === "complete") {
      startFade();
    } else {
      window.addEventListener("load", startFade, { once: true });
    }
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 99998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s ease-in-out",
        opacity: phase === "fading" ? 0 : 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "88px",
          height: "88px",
          borderRadius: "50%",
          border: "3px solid transparent",
          borderTopColor: "#E00201",
          borderRightColor: "#E00201",
          animation: "preloader-spin 1.2s linear infinite",
        }}
      />
      <Image
        src="/images/logo.png"
        alt="Dil Chahal Construction"
        width={56}
        height={56}
        style={{ width: "56px", height: "56px", objectFit: "contain" }}
      />
    </div>
  );
}
