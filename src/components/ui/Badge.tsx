import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "teal" | "green" | "gold" | "neutral";
  variant?: "solid" | "soft";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = "teal",
  variant = "soft",
  className = "",
  style,
  ...props
}) => {
  const tones = {
    teal: {
      solidBg: "var(--rsa-teal)",
      softBg: "var(--rsa-teal-100)",
      fg: "var(--rsa-teal-700)",
    },
    green: {
      solidBg: "var(--rsa-green)",
      softBg: "var(--rsa-green-100)",
      fg: "var(--rsa-green-600)",
    },
    gold: {
      solidBg: "var(--rsa-gold)",
      softBg: "var(--rsa-gold-100)",
      fg: "var(--rsa-gold-600)",
    },
    neutral: {
      solidBg: "var(--rsa-slate)",
      softBg: "var(--surface-subtle-2)",
      fg: "var(--text-body)",
    },
  };

  const t = tones[tone] || tones.teal;
  const solid = variant === "solid";

  return (
    <span
      className={`inline-flex items-center gap-1.5 uppercase tracking-[0.06em] px-3 py-1 text-xs font-semibold rounded-full ${className}`}
      style={{
        fontFamily: "var(--font-heading)",
        background: solid ? t.solidBg : t.softBg,
        color: solid ? "#fff" : t.fg,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};
