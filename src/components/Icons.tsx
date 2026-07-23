import React from "react";

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'stroke'> {
  size?: number;
  stroke?: number | string;
}

const S: React.FC<IconProps> = ({ children, size = 22, stroke = 2, ...p }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    {children}
  </svg>
);

export const Menu: React.FC<IconProps> = (p) => (
  <S {...p}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </S>
);

export const Close: React.FC<IconProps> = (p) => (
  <S {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </S>
);

export const ChevronDown: React.FC<IconProps> = (p) => (
  <S {...p}>
    <polyline points="6 9 12 15 18 9" />
  </S>
);

export const Arrow: React.FC<IconProps> = (p) => (
  <S {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </S>
);

export const Heart: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </S>
);

export const Book: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </S>
);

export const Users: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </S>
);

export const Megaphone: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M3 11l18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </S>
);

export const Sprout: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6z" />
    <path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5z" />
  </S>
);

export const MapPin: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </S>
);

export const Phone: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </S>
);

export const Mail: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </S>
);

export const Check: React.FC<IconProps> = (p) => (
  <S {...p}>
    <polyline points="20 6 9 17 4 12" />
  </S>
);

export const Facebook: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" stroke="none" />
  </S>
);

export const Instagram: React.FC<IconProps> = (p) => (
  <S {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </S>
);

export const Linkedin: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor" stroke="none" />
    <rect x="2" y="9" width="4" height="12" fill="currentColor" stroke="none" />
    <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
  </S>
);

export const X: React.FC<IconProps> = (p) => (
  <S {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </S>
);
