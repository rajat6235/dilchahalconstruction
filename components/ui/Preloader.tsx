"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Match WP behaviour: delay 250ms then fadeOut "slow" (600ms)
    const hide = () => {
      setTimeout(() => setVisible(false), 250);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
          }}
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
            style={{
              position: "absolute",
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              border: "3px solid transparent",
              borderTopColor: "#E00201",
              borderRightColor: "#E00201",
            }}
          />
          <Image
            src="/images/logo.png"
            alt="Dil Chahal Constructions"
            width={56}
            height={56}
            priority
            style={{ width: "56px", height: "56px", objectFit: "contain" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
