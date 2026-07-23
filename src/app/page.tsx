"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import * as Icons from "@/components/Icons";

const HERO_SLIDES = [
  {
    img: "/assets/hero-disability-advocacy.jpeg",
    kicker: "Raising Star Africa Foundation",
    title: "Promoting Inclusive Education",
  },
  {
    img: "/assets/hero-educational-inclusion.jpeg",
    kicker: "Educational Inclusion",
    title: "Educational Aids and Scholarships",
  },
  {
    img: "/assets/hero-foundation.jpeg",
    kicker: "Disability Awareness & Advocacy",
    title: "Community Sensitization",
  },
  {
    img: "/assets/hero-digital-vocational.jpeg",
    kicker: "Digital & Vocational Empowerment",
    title: "Self-sustainability Skills Training",
  },
];

const FOCUS = [
  {
    icon: Icons.Book,
    tone: "teal" as const,
    title: "Educational Inclusion",
    body: "We provide differently-abled and less privileged children with improved quality of life through educational aids and scholarship.",
  },
  {
    icon: Icons.Sprout,
    tone: "green" as const,
    title: "Vocational Empowerment",
    body: "We provide life-long skills through vocation and self-sustainability skill training to reduce vulnerability and dependency.",
  },
  {
    icon: Icons.Megaphone,
    tone: "gold" as const,
    title: "Disability Awareness & Advocacy",
    body: "We give a voice through advocacy campaigns, publicity programs, community, and social sensitization.",
  },
];

const PROJECTS = [
  {
    title: "Renovation of Iganmu Schools",
    img: "/assets/photos/igando-inclusive-school.jpg",
    badge: "Schools",
    href: "/projects/renovation-iganmu",
  },
  {
    title: "This Ability 5.0",
    img: "/assets/photos/this-ability-5.jpg",
    badge: "Event",
    href: "/projects/this-ability-5",
  },
  {
    title: "Leadership & Capacity Development",
    img: "/assets/photos/team-photo.jpg",
    badge: "Training",
    href: "/projects/leadership-capacity",
  },
  {
    title: "Building of the Ability Center",
    img: "/assets/photos/visit-ogun-state.jpg",
    badge: "Infrastructure",
    href: "/projects/ability-center",
  },
  {
    title: "Sports Fest 4.0",
    img: "/assets/photos/feed-the-1000.jpg",
    badge: "Event",
    href: "/projects/sports-fest",
  },
  {
    title: "Hiring of Therapists & Interpreters",
    img: "/assets/photos/vocational-skill.jpg",
    badge: "Support",
    href: "/projects/hiring-therapists",
  },
];

const BLOG = [
  {
    title: "Education Is Hope; Why Every Child With Disabilities Must Be Included",
    excerpt:
      "In many communities, education is seen as the key to a better life. Parents struggle, sacrifice and pray so their children can go to school…",
    tag: "Inclusion",
    href: "/blog/education-is-hope",
  },
  {
    title: "Empowering Inclusion: The Role of Disability Representation in Advertising",
    excerpt:
      "In today’s modern world, advertising has become an all-pervading part of our lives. Whether we are browsing the internet…",
    tag: "Advocacy",
    href: "/blog/empowering-inclusion",
  },
  {
    title: "Girls, women, and the multifaceted challenges",
    excerpt:
      "For the past few years, different campaigns have been raised that address the major issues facing women and girls…",
    tag: "Girl Child",
    href: "/blog/girls-women",
  },
];

const PARTNERS = [
  "1.jpg", "2.jpg", "3.png", "4.jpg", "5.png", "6.png", "7.jpg", "8.jpeg",
  "9.png", "10.jpeg", "11.jpeg", "12.png", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg"
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const activeSlide = HERO_SLIDES[slideIndex];

  return (
    <div className="relative">
      {/* Hero Slider */}
      <section className="relative h-[560px] overflow-hidden bg-[color:var(--rsa-ink)]">
        {HERO_SLIDES.map((sl, idx) => (
          <div
            key={idx}
            className="absolute inset-0 bg-cover bg-center transition-all duration-[900ms] ease-[var(--ease-out)]"
            style={{
              backgroundImage: `url(${sl.img})`,
              opacity: idx === slideIndex ? 1 : 0,
              transform: idx === slideIndex ? "scale(1.04)" : "scale(1)",
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(23,120,133,0.9)] via-[rgba(23,120,133,0.55)] to-[rgba(38,49,47,0.25)]" />

        {/* Content */}
        <div className="relative h-full max-w-[var(--container-max)] mx-auto px-6 flex flex-col justify-center gap-[22px]">
          <div className="max-w-[620px] flex flex-col gap-5">
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: ".18em",
                color: "var(--rsa-gold)",
              }}
              className="uppercase"
            >
              {activeSlide.kicker}
            </span>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px,5vw,58px)",
                lineHeight: 1.08,
                color: "#fff",
                letterSpacing: "-.01em",
              }}
            >
              {activeSlide.title}
            </h1>
            <p className="margin-0 text-lg md:text-xl text-white/90 leading-relaxed max-w-[540px]">
              Every differently-abled and less privileged child deserves a voice
              and an equal opportunity to learn.
            </p>
            <div className="flex gap-3.5 mt-1">
              <Button
                variant="donate"
                size="lg"
                iconLeft={<Icons.Heart size={18} />}
                href="/donate"
              >
                Donate Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/about"
                className="text-white border-white/70 hover:border-white"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className="h-2.5 rounded-full cursor-pointer transition-all duration-[var(--dur-base)] ease-[var(--ease-out)]"
              style={{
                width: idx === slideIndex ? 32 : 11,
                background: idx === slideIndex ? "var(--rsa-gold)" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Focus / Callout Section */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 -mt-[70px] relative z-10 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {FOCUS.map((f) => {
            const IconComp = f.icon;
            return (
              <div
                key={f.title}
                className="flex flex-col gap-3.5 p-[var(--space-5)] bg-white border border-[color:var(--border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-[var(--dur-base)] ease-[var(--ease-out)]"
              >
                <span
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    background: `var(--rsa-${f.tone === "gold" ? "gold-600" : f.tone})`,
                  }}
                >
                  <IconComp size={26} />
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 21,
                    color: "var(--text-strong)",
                  }}
                >
                  {f.title}
                </h3>
                <p className="margin-0 text-[14.5px] leading-relaxed text-[color:var(--text-body)]">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Story */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="/assets/photos/img-4299.jpg"
            alt="Children in an inclusive classroom"
            className="w-full h-[440px] object-cover rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]"
          />
          <div className="absolute -bottom-6 -right-[10px] md:-right-[18px] bg-[color:var(--rsa-gold)] color-[#4a3a10] px-6 py-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] text-center">
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 34,
                lineHeight: 1,
                color: "var(--text-on-accent)",
              }}
            >
              15,000+
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 12.5,
                marginTop: 4,
                color: "var(--text-on-accent)",
              }}
            >
              children reached
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[22px]">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Our story of impact"
            intro="Raising Star Africa Foundation is a non-governmental organization founded to support, empower and inspire quality education and life skills among differently-abled and less privileged children across Africa."
          />
          <div className="flex flex-col gap-3.5">
            {FOCUS.map((f) => (
              <div key={f.title} className="flex gap-3.5 items-start">
                <span className="flex-shrink-0 w-[34px] h-[34px] rounded-lg bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)] inline-flex items-center justify-center">
                  <Icons.Check size={18} />
                </span>
                <div>
                  <strong
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-strong)",
                      fontSize: 15,
                    }}
                  >
                    {f.title}.
                  </strong>{" "}
                  <span className="text-[14.5px] text-[color:var(--text-body)]">
                    {f.body}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button
              variant="primary"
              iconRight={<Icons.Arrow size={17} />}
              href="/about"
            >
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="bg-[color:var(--rsa-surface)] py-20 mt-10">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-10">
            <SectionHeading
              eyebrow="Upcoming Projects"
              title="Where your support goes next"
              intro="These projects are a result of dedication, hard work, and the generosity of our partners and volunteers."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <ProgramCard
                key={p.title}
                image={p.img}
                badge={p.badge}
                title={p.title}
                description="View the project details, goals and the children it will reach."
                linkLabel="View project"
                href={p.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fixed CTA Banner */}
      <section
        className="relative py-[92px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/assets/photos/this-ability-5.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(23,120,133,0.94)] to-[rgba(77,133,49,0.86)]" />
        <div className="relative max-w-[var(--container-max)] mx-auto px-6 text-center flex flex-col items-center gap-[22px]">
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
            All over Africa
          </span>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(30px,4vw,46px)",
              color: "#fff",
            }}
            className="max-w-[760px]"
          >
            Be a part of the change
          </h2>
          <p className="margin-0 text-lg leading-relaxed text-white/92 max-w-[640px]">
            We are helping to reduce the inclusion gap in education amongst girls
            and differently-abled people. We invite you to be a part of this
            change.
          </p>
          <div className="flex gap-3.5 mt-1.5">
            <Button
              variant="donate"
              size="lg"
              iconLeft={<Icons.Heart size={18} />}
              href="/donate"
            >
              Donate
            </Button>
            <Button variant="secondary" size="lg" href="/volunteer">
              Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Blog items */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10 gap-5 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow="Our Blog"
            title="Stories & perspectives"
          />
          <Button variant="outline" href="/blog">
            All articles
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG.map((b) => (
            <ProgramCard
              key={b.title}
              badge={b.tag}
              badgeTone="green"
              title={b.title}
              description={b.excerpt}
              linkLabel="Read more"
              href={b.href}
            />
          ))}
        </div>
      </section>

      {/* Partners Logos */}
      <section className="bg-[color:var(--rsa-surface)] py-16 overflow-hidden">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-[34px]">
            <SectionHeading
              title="Our partners & donors"
              intro="Some of the partners and donors who help us make a difference."
            />
          </div>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee gap-5 px-2.5 hover:[animation-play-state:paused]">
            {[...PARTNERS, ...PARTNERS].map((p, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[var(--radius-md)] border border-[color:var(--border-default)] w-[160px] h-[90px] flex-shrink-0 flex items-center justify-center p-3.5 hover:shadow-md transition-all cursor-pointer"
              >
                <img
                  src={`/assets/partners/${p}`}
                  alt="Partner"
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[var(--dur-base)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
