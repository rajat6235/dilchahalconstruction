"use client";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

// Elementor "normal" duration ≈ 1s; we use 0.7s for a snappier feel
const DUR = 0.7;
const EASE = [0.25, 0.1, 0.25, 1] as const;

type TransitionConfig =
  | { duration: number; ease: readonly number[]; delay?: number }
  | { type: "spring"; stiffness: number; damping: number; delay?: number };

interface VariantDef {
  hidden: Record<string, unknown>;
  visible: { transition: TransitionConfig } & Record<string, unknown>;
}

export const VARIANTS: Record<string, VariantDef> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DUR, ease: EASE } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR, ease: EASE } },
  },
  slideInDown: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1, transition: { duration: DUR, ease: EASE } },
  },
  zoomInDown: {
    hidden: { opacity: 0, scale: 0.82, y: -40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: DUR, ease: EASE } },
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 18 },
    },
  },
};

interface AnimateInProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> {
  variant: keyof typeof VARIANTS;
  delay?: number;
  amount?: number;
}

export default function AnimateIn({
  variant,
  delay = 0,
  amount = 0.15,
  children,
  ...rest
}: AnimateInProps) {
  const def = VARIANTS[variant];
  const visible = delay
    ? { ...def.visible, transition: { ...def.visible.transition, delay } }
    : def.visible;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: def.hidden as Variants["hidden"], visible: visible as Variants["visible"] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
