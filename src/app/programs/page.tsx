"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Button } from "@/components/ui/Button";
import { PROGRAMS_DATA } from "./data";

export default function ProgramsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="What We Do"
        title="Our Programs"
        img="/assets/photos/vocational-skill.jpg"
        intro="Our programs help us support, empower and inspire quality education and life skills among differently-abled and less privileged children. With the help of our sponsors, volunteers and team, they are a result of dedication, hard work and focus."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS_DATA.map((p) => (
            <ProgramCard
              key={p.slug}
              image={p.coverImage}
              badge={p.badge}
              badgeTone={p.tone}
              title={p.title}
              description={p.desc}
              linkLabel="Read more"
              href={`/programs/${p.slug}`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(/assets/photos/feed-the-1000.jpg)" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(23,120,133,0.94)] to-[rgba(77,133,49,0.86)]" />
        <div className="relative max-w-[var(--container-max)] mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px,3.6vw,42px)",
              color: "#fff",
            }}
            className="max-w-[720px]"
          >
            Help us bring these programs to more children
          </h2>
          <div className="flex gap-3.5 flex-wrap justify-center mt-1">
            <Button
              variant="donate"
              size="lg"
              href="/donate"
            >
              Donate
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/volunteer"
            >
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
