import React from "react";

type Variant = "primary" | "outline" | "dark" | "red";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-[#54595F] text-white hover:bg-black border border-[#54595F] hover:border-black",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  dark:
    "bg-[#2d2d2d] text-white hover:bg-black border border-[#2d2d2d] hover:border-black",
  red:
    "bg-[#8B0001] text-white hover:bg-[#E00201] border border-[#8B0001] hover:border-[#E00201]",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 text-[16px] font-[600] tracking-[0.2px] transition-all duration-300 cursor-pointer";
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
