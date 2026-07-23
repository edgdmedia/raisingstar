"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "./Icons";
import { Button } from "./ui/Button";

export const SiteHeader: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = [
    {
      label: "About",
      key: "about",
      sub: [
        { label: "About Us", href: "/about" },
        { label: "Advisory Board", href: "/about/advisory" },
        { label: "Board Members", href: "/about/board" },
        { label: "Team Members", href: "/about/team" },
      ],
    },
    { label: "Programs", key: "programs", href: "/programs" },
    { label: "Projects", key: "projects", href: "/projects" },
    {
      label: "Blog",
      key: "blog",
      sub: [
        { label: "Blog Posts", href: "/blog" },
        { label: "Resources", href: "/resources" },
      ],
    },
    { label: "Gallery", key: "gallery", href: "/gallery" },
    {
      label: "Join Us",
      key: "join",
      sub: [
        { label: "Partner", href: "/partner" },
        { label: "Volunteer", href: "/volunteer" },
      ],
    },
  ];

  // Helper to determine active state
  const isActive = (item: typeof nav[number]) => {
    if (item.href && (pathname === item.href || pathname.startsWith(item.href + "/"))) return true;
    if (item.href === "/" && pathname === "/") return true;
    if (item.sub) {
      return item.sub.some((s) => pathname === s.href || pathname.startsWith(s.href + "/"));
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[color:var(--border-default)] shadow-[var(--shadow-sm)]">
      {/* Top bar */}
      <div className="bg-[color:var(--rsa-teal-700)] text-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-2 flex justify-between items-center font-heading text-[12.5px]">
          <span className="inline-flex items-center gap-2 opacity-92">
            <Icons.Mail size={15} /> info@raisingstarafrica.org
          </span>
          <div className="flex gap-3.5 items-center">
            <a
              href="https://www.facebook.com/Raising-Star-Africa-Foundation-101535372009952"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              <Icons.Facebook size={15} />
            </a>
            <a
              href="https://x.com/RaisingStarAfr"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              <Icons.X size={15} />
            </a>
            <a
              href="https://instagram.com/raisingstarafrica"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              <Icons.Instagram size={15} />
            </a>
            <a
              href="https://www.linkedin.com/company/raising-stars-africa/"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              <Icons.Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="inline-flex">
          <img
            src="/assets/logo.png"
            alt="Raising Star Africa Foundation"
            className="h-[58px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <div
              key={n.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(n.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {n.sub ? (
                <button
                  className={`inline-flex items-center gap-1 px-3 py-2 font-heading font-semibold text-[14.5px] cursor-pointer transition-colors ${
                    isActive(n)
                      ? "text-[color:var(--color-primary)]"
                      : "text-[color:var(--text-strong)] hover:text-[color:var(--color-primary)]"
                  }`}
                >
                  {n.label}
                  <Icons.ChevronDown size={15} />
                </button>
              ) : (
                <Link
                  href={n.href || "#"}
                  className={`inline-flex items-center gap-1 px-3 py-2 font-heading font-semibold text-[14.5px] transition-colors ${
                    isActive(n)
                      ? "text-[color:var(--color-primary)]"
                      : "text-[color:var(--text-strong)] hover:text-[color:var(--color-primary)]"
                  }`}
                >
                  {n.label}
                </Link>
              )}

              {n.sub && openDropdown === n.key && (
                <div className="absolute top-full left-0 min-w-[200px] bg-white border border-[color:var(--border-default)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] p-1.5 flex flex-col">
                  {n.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`px-3 py-2 rounded-[var(--radius-sm)] font-body text-sm transition-all ${
                        pathname === s.href || (pathname.startsWith(s.href + "/") && s.href !== "/about")
                          ? "bg-[color:var(--rsa-teal-050)] text-[color:var(--color-primary)] font-medium"
                          : "text-[color:var(--text-body)] hover:bg-[color:var(--rsa-teal-050)] hover:text-[color:var(--color-primary)]"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="donate"
            size="sm"
            iconLeft={<Icons.Heart size={16} />}
            href="/donate"
          >
            Donate
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="block md:hidden text-[color:var(--text-strong)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <Icons.Close size={24} /> : <Icons.Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[114px] bottom-0 bg-white border-t border-[color:var(--border-default)] z-40 overflow-y-auto p-6 flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <div key={n.key} className="flex flex-col gap-2">
                {n.sub ? (
                  <>
                    <span className="font-heading font-semibold text-[15.5px] text-[color:var(--text-strong)] opacity-60">
                      {n.label}
                    </span>
                    <div className="pl-4 flex flex-col gap-2 border-l border-[color:var(--border-default)]">
                      {n.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-body text-[14.5px] text-[color:var(--text-body)] py-1"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={n.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading font-semibold text-[15.5px] text-[color:var(--text-strong)] py-1"
                  >
                    {n.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <Button
              variant="donate"
              fullWidth
              iconLeft={<Icons.Heart size={16} />}
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
