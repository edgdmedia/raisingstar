"use client";

import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  hint,
  error,
  id,
  type = "text",
  icon,
  style,
  className = "",
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--fs-sm)",
            color: "var(--text-strong)",
          }}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3.5 inline-flex text-[color:var(--text-muted)]">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-body)",
            color: "var(--text-strong)",
            padding: icon ? "13px 16px 13px 42px" : "13px 16px",
            background: "var(--surface-card)",
            border: `1.5px solid ${
              error
                ? "var(--rsa-error)"
                : focused
                ? "var(--color-primary)"
                : "var(--border-default)"
            }`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            boxShadow: focused && !error ? "0 0 0 4px var(--focus-ring)" : "none",
            transition:
              "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
            ...style,
          }}
          {...props}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            fontSize: "var(--fs-xs)",
            color: error ? "var(--rsa-error)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
};
