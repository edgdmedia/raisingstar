import React from "react";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  tone?: "teal" | "green" | "gold" | "brown";
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  tone = "teal",
  icon,
  className = "",
  style,
  ...props
}) => {
  const tones = {
    teal: "var(--rsa-teal)",
    green: "var(--rsa-green)",
    gold: "var(--rsa-gold-600)",
    brown: "var(--rsa-brown-700)",
  };
  const c = tones[tone] || tones.teal;

  return (
    <div
      className={`flex flex-col gap-2 items-start p-[var(--space-5)] bg-[color:var(--surface-card)] border border-[color:var(--border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] ${className}`}
      style={style}
      {...props}
    >
      {icon && (
        <span className="mb-1 inline-flex" style={{ color: c }}>
          {icon}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-extrabold)",
          fontSize: "clamp(34px, 4vw, 46px)",
          lineHeight: 1,
          color: c,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: "var(--fw-medium)",
          fontSize: "var(--fs-sm)",
          color: "var(--text-body)",
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </span>
    </div>
  );
};
