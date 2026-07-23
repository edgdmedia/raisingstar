import React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  invert?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  intro,
  align = "center",
  invert = false,
  className = "",
  style,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center mx-auto max-w-[640px]" : "items-start text-left"} ${className}`}
      style={style}
      {...props}
    >
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 uppercase tracking-[0.16em] font-bold text-xs"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          <span className="w-[22px] h-[2px] bg-[color:var(--color-accent)] inline-block" />
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-h1)",
          lineHeight: "var(--lh-tight)",
          letterSpacing: "var(--ls-heading)",
          color: invert ? "#fff" : "var(--text-strong)",
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            margin: 0,
            fontSize: "var(--fs-lead)",
            lineHeight: "var(--lh-body)",
            color: invert ? "rgba(255,255,255,.86)" : "var(--text-body)",
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
};
