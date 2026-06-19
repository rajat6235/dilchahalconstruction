"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setFading(true);
    const t = setTimeout(() => {
      setFading(false);
      setVisible(false);
    }, 400);
    return () => clearTimeout(t);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href === "#") return;
      if (anchor.target === "_blank") return;
      const targetPath = href.split("?")[0].split("#")[0];
      if (!targetPath || targetPath === window.location.pathname) return;
      setFading(false);
      setVisible(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 99998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.4s ease-in-out",
        opacity: fading ? 0 : 1,
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
        alt="Loading"
        width={56}
        height={56}
        style={{ width: "56px", height: "56px", objectFit: "contain" }}
      />
    </div>
  );
}
