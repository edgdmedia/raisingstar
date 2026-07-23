"use client";

import React from "react";
import { Badge } from "./Badge";

export interface ProgramCardProps extends React.HTMLAttributes<HTMLElement> {
  image?: string;
  imageAlt?: string;
  badge?: string;
  badgeTone?: "teal" | "green" | "gold" | "neutral";
  title: string;
  description?: string;
  linkLabel?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  imageAlt = "",
  badge,
  badgeTone = "teal",
  title,
  description,
  linkLabel = "Read more",
  href = "#",
  onClick,
  className = "",
  style,
  ...props
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col overflow-hidden ${className}`}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-4px)" : "none",
        transition:
          "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...(props as any)}
    >
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{
              transform: hover ? "scale(1.05)" : "scale(1)",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
          {badge && (
            <span className="absolute top-3.5 left-3.5">
              <Badge tone={badgeTone} variant="solid">
                {badge}
              </Badge>
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-[var(--space-3)] p-[var(--space-5)] flex-1">
        {!image && badge && (
          <div className="self-start">
            <Badge tone={badgeTone}>{badge}</Badge>
          </div>
        )}
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--fs-h4)",
            lineHeight: 1.28,
            color: "var(--text-strong)",
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="flex-1"
            style={{
              margin: 0,
              fontSize: "var(--fs-sm)",
              lineHeight: "var(--lh-body)",
              color: "var(--text-body)",
            }}
          >
            {description}
          </p>
        )}
        <a
          href={href}
          onClick={onClick}
          className="mt-auto inline-flex items-center gap-[7px] font-bold text-xs hover:underline"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
            letterSpacing: "0.02em",
          }}
        >
          {linkLabel}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: hover ? "translateX(3px)" : "none",
              transition: "transform var(--dur-fast) var(--ease-out)",
            }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  );
};
