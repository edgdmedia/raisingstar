"use client";

import React from "react";
import Link from "next/link";
import * as Icons from "./Icons";
import { Button } from "./ui/Button";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[color:var(--rsa-ink)] text-white/80">
      {/* Upper Footer */}
      <div className="max-w-[var(--container-max)] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-11">
        {/* Brand Column */}
        <div className="flex flex-col gap-3.5">
          <img
            src="/assets/logo.png"
            alt="Raising Star Africa"
            className="h-16 self-start bg-white rounded-xl p-2"
          />
          <p className="margin-0 text-[14.5px] leading-relaxed">
            Empowering and inspiring quality education and life skills among
            differently-abled and less privileged children across Africa.
          </p>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-3.5">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white">
            Contact
          </h4>
          <a
            href="https://goo.gl/maps/qHf39xW4mJCgMKZ27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors text-[14.5px] flex items-start gap-2.5"
          >
            <Icons.MapPin size={17} className="mt-1 flex-shrink-0" />
            <span>1 Adekunle Owobiyi Close, Ogba, Ikeja, Lagos.</span>
          </a>
          <a
            href="tel:+2348034465277"
            className="text-white/80 hover:text-white transition-colors text-[14.5px] flex items-center gap-2.5"
          >
            <Icons.Phone size={17} className="flex-shrink-0" />
            <span>+234 803 446 5277</span>
          </a>
          <a
            href="mailto:info@raisingstarafrica.org"
            className="text-white/80 hover:text-white transition-colors text-[14.5px] flex items-center gap-2.5"
          >
            <Icons.Mail size={17} className="flex-shrink-0" />
            <span>info@raisingstarafrica.org</span>
          </a>
        </div>

        {/* Menu Column */}
        <div className="flex flex-col gap-3.5">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white">
            Menu
          </h4>
          {[
            { label: "About Us", href: "/about" },
            { label: "Programs", href: "/programs" },
            { label: "Projects", href: "/projects" },
            { label: "Volunteer", href: "/volunteer" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/80 hover:text-white transition-colors text-[14.5px]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-3.5">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white">
            Newsletter
          </h4>
          <p className="margin-0 text-[14.5px]">
            Get our emails about opportunities to help.
          </p>
          <div className="flex gap-2">
            <input
              placeholder="Your email"
              type="email"
              className="flex-1 min-w-0 px-3.5 py-2.5 rounded-[var(--radius-md)] border border-white/18 bg-white/6 text-white font-body text-sm outline-none focus:border-[color:var(--rsa-teal)] transition-colors"
            />
            <Button variant="donate" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/12">
        <div className="max-w-[var(--container-max)] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <span>&copy; 2026 Raising Star Africa Foundation. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Raising-Star-Africa-Foundation-101535372009952"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icons.Facebook size={17} />
            </a>
            <a
              href="https://x.com/RaisingStarAfr"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icons.X size={17} />
            </a>
            <a
              href="https://instagram.com/raisingstarafrica"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icons.Instagram size={17} />
            </a>
            <a
              href="https://www.linkedin.com/company/raising-stars-africa/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icons.Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
