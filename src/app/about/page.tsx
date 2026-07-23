"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import * as Icons from "@/components/Icons";

const OBJECTIVES = [
  "Reduce vulnerability and dependency among differently-abled and less privileged children.",
  "Empower over 15,000 children with life-long skills through vocation and self-sustainability training.",
  "Advocate and give a voice through campaigns, publicity and community sensitization.",
  "Offer a chance for a better life through educational aids and scholarships.",
  "Promote quality learning through school and classroom improvement and refurbishment.",
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="Our story of impact"
        img="/assets/hero-foundation.jpeg"
        intro="Founded in 2020, Raising Star Africa Foundation supports, empowers and inspires quality education and life skills among differently-abled and less privileged children across Africa."
      />

      {/* Founder Section */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <img
          src="/assets/photos/team/michael.jpeg"
          alt="Michael Showunmi"
          className="w-full h-[420px] object-cover rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]"
        />
        <div className="flex flex-col gap-[18px]">
          <SectionHeading
            align="left"
            eyebrow="Our Founder"
            title="Turning lived experience into a movement"
          />
          <p className="margin-0 text-base leading-relaxed text-[color:var(--text-body)]">
            Raising Star Africa Foundation was founded by Michael Showunmi, a person
            with disability from a less-privileged background in Lagos, Nigeria. Unable
            to attend nursery school because no provision was made for disabilities,
            Michael was carried to and from school by friends for over two years of his
            primary education.
          </p>
          <p className="margin-0 text-base leading-relaxed text-[color:var(--text-body)]">
            That experience ignited his passion to inspire an inclusive African society
            where every differently-abled and less privileged child has a voice and
            equal opportunity.
          </p>
          <div className="grid grid-cols-3 gap-3.5 mt-1.5">
            <StatCard value="15,000+" label="Children reached" tone="teal" />
            <StatCard value="2020" label="Year founded" tone="green" />
            <StatCard value="Nigeria" label="Communities served" tone="gold" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[color:var(--rsa-surface)] py-20">
        <div className="max-w-[var(--container-max)] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3.5 p-8 bg-white border border-[color:var(--border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]">
            <span className="w-14 h-14 rounded-[15px] bg-[color:var(--rsa-teal)] text-white inline-flex items-center justify-center">
              <Icons.Sprout size={28} />
            </span>
            <h3 className="margin-0 font-display font-bold text-[26px] text-[color:var(--text-strong)]">
              Our Vision
            </h3>
            <p className="margin-0 text-base leading-relaxed text-[color:var(--text-body)]">
              To inspire an inclusive African society, where every differently-abled
              and less privileged child has a voice and equal opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-3.5 p-8 bg-white border border-[color:var(--border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]">
            <span className="w-14 h-14 rounded-[15px] bg-[color:var(--rsa-green)] text-white inline-flex items-center justify-center">
              <Icons.Heart size={28} />
            </span>
            <h3 className="margin-0 font-display font-bold text-[26px] text-[color:var(--text-strong)]">
              Our Mission
            </h3>
            <p className="margin-0 text-base leading-relaxed text-[color:var(--text-body)]">
              To support, empower and inspire quality education and life skills among
              differently-abled and less privileged children across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="flex justify-center mb-9">
          <SectionHeading eyebrow="Our Objectives" title="What we set out to do" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {OBJECTIVES.map((o, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-white border border-[color:var(--border-default)] rounded-[var(--radius-lg)] p-5"
            >
              <span className="flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[color:var(--rsa-gold)] text-[color:var(--text-on-accent)] font-display font-extrabold inline-flex items-center justify-center">
                {idx + 1}
              </span>
              <p className="margin-0 text-[15px] leading-relaxed text-[color:var(--text-body)]">
                {o}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
