import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  img: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  intro,
  img,
}) => {
  return (
    <section
      className="relative py-[82px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(23,120,133,0.93)] to-[rgba(23,120,133,0.6)]" />
      <div className="relative max-w-[var(--container-max)] mx-auto px-6 flex flex-col gap-3.5 max-w-[720px] text-left">
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: ".18em",
            color: "var(--rsa-gold)",
          }}
          className="uppercase"
        >
          {eyebrow}
        </span>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(34px,4.5vw,52px)",
            color: "#fff",
            lineHeight: 1.08,
          }}
        >
          {title}
        </h1>
        {intro && (
          <p className="margin-0 text-[19px] leading-relaxed text-white/90 max-w-[620px]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
};
