"use client";
import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoPlayer({ src, className, style }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.muted = true;
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      playsInline
      controls
      className={className}
      style={style}
    />
  );
}
