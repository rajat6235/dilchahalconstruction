"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

interface AnimateInProps {
  variant: string;
  delay?: number;
  amount?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function AnimateIn({
  variant,
  delay = 0,
  amount = 0.15,
  children,
  className,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      if (delay) {
        setTimeout(() => { el.dataset.visible = "true"; }, delay * 1000);
      } else {
        el.dataset.visible = "true";
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: amount }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, amount]);

  return (
    <div ref={ref} data-animate={variant} className={className} style={style}>
      {children}
    </div>
  );
}
