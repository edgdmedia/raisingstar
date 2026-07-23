"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "donate" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  asChild?: boolean; // simple rendering fallback if they need anchor tags
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
  style,
  href,
  ...props
}) => {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: "var(--fs-sm)",
    },
    md: {
      padding: "13px 24px",
      fontSize: "var(--fs-body)",
    },
    lg: {
      padding: "17px 34px",
      fontSize: "var(--fs-lead)",
    },
  };

  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--text-on-primary)",
      border: "2px solid transparent",
      shadow: "var(--shadow-teal)",
      hoverBackground: "var(--rsa-teal-600)",
    },
    secondary: {
      background: "var(--color-secondary)",
      color: "#fff",
      border: "2px solid transparent",
      shadow: "none",
      hoverBackground: "var(--rsa-green-600)",
    },
    donate: {
      background: "var(--color-accent)",
      color: "var(--text-on-accent)",
      border: "2px solid transparent",
      shadow: "0 10px 22px color-mix(in srgb, var(--rsa-gold) 40%, transparent)",
      hoverBackground: "var(--rsa-gold-600)",
    },
    outline: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)",
      shadow: "none",
      hoverBackground: "var(--rsa-teal-050)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid transparent",
      shadow: "none",
      hoverBackground: "var(--rsa-surface)",
    },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const styleObj: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-heading)",
    fontWeight: "var(--fw-bold)",
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "0.01em",
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    background: isHovered ? v.hoverBackground : v.background,
    color: v.color,
    border: v.border,
    borderRadius: "var(--radius-pill)",
    boxShadow: disabled ? "none" : v.shadow,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transform: isPressed && !disabled ? "scale(0.97)" : "scale(1)",
    transition:
      "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...style,
  };

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };

  if (href) {
    return (
      <a
        href={href}
        style={styleObj}
        className={className}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {iconLeft && <span className="flex items-center">{iconLeft}</span>}
        {children}
        {iconRight && <span className="flex items-center">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      style={styleObj}
      className={className}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(props as any)}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {children}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
};
