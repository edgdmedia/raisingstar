"use client";

import React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  className = "",
  ...props
}) => {
  const cbId =
    id ||
    (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={cbId}
      className={`inline-flex items-center gap-3 cursor-pointer ${
        disabled ? "not-allowed opacity-55" : "cursor-pointer"
      } ${className}`}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body)",
        color: "var(--text-body)",
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: "var(--radius-sm)",
          border: `2px solid ${on ? "var(--color-primary)" : "var(--border-strong)"}`,
          background: on ? "var(--color-primary)" : "var(--surface-card)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all var(--dur-fast) var(--ease-out)",
        }}
      >
        {on && (
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <input
        id={cbId}
        type="checkbox"
        checked={on}
        onChange={toggle}
        disabled={disabled}
        className="absolute opacity-0 w-0 h-0"
        {...props}
      />
      {label}
    </label>
  );
};
