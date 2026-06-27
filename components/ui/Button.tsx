import React from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "dark" | "red" | "ghost";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: [
    "bg-[#E00201] text-white border border-[#E00201]",
    "hover:bg-[#c50000] hover:border-[#c50000]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E00201] focus-visible:outline-offset-2",
  ].join(" "),
  outline: [
    "bg-transparent text-white border border-white/40",
    "hover:border-white/80 hover:bg-white/[0.08]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
  ].join(" "),
  dark: [
    "bg-[#0a0a0a] text-white border border-[#0a0a0a]",
    "hover:bg-[#1f1f1f] hover:border-[#1f1f1f]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
  ].join(" "),
  red: [
    "bg-[#8B0001] text-white border border-[#8B0001]",
    "hover:bg-[#E00201] hover:border-[#E00201]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E00201] focus-visible:outline-offset-2",
  ].join(" "),
  ghost: [
    "bg-transparent text-[#E00201] border border-[#E00201]",
    "hover:bg-[#E00201] hover:text-white",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E00201] focus-visible:outline-offset-2",
  ].join(" "),
};

const base = [
  "inline-flex items-center justify-center gap-2",
  "px-6 py-3",
  "text-[13px] font-[700] tracking-[0.5px] leading-none",
  "rounded-[2px]",
  "transition-all duration-300",
  "hover:scale-[1.02] active:scale-[0.97]",
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  "cursor-pointer select-none",
].join(" ");

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variantStyles[variant]} ${className}`;
  const style = { fontFamily: "var(--font-subheading)" };

  if (href) {
    return (
      <Link href={href} className={cls} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
