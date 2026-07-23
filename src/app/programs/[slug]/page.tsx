import React from "react";
import { notFound } from "next/navigation";
import { PROGRAMS_DATA } from "../data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Check, ChevronRight, HandHeart } from "lucide-react";

export async function generateStaticParams() {
  return PROGRAMS_DATA.map((program) => ({
    slug: program.slug,
  }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = PROGRAMS_DATA.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const morePrograms = PROGRAMS_DATA.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-[92px] pb-[72px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(23,120,133,.94), rgba(77,133,49,.86)), url(${program.coverImage})`,
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-6 flex flex-col items-start gap-3.5">
          <a
            href="/programs"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-[13.5px] text-white opacity-90 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            All programs
          </a>
          <span className="inline-flex font-heading font-semibold text-[11px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full bg-white/16 text-white">
            {program.badge}
          </span>
          <h1 className="m-0 font-display font-extrabold text-[clamp(34px,4.5vw,54px)] text-white">
            {program.title}
          </h1>
          <p className="m-0 text-[18px] leading-[1.6] text-white/90 max-w-[640px]">
            {program.desc}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 py-[72px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="flex flex-col gap-5.5 text-[16.5px] leading-[1.8] text-[color:var(--rsa-ink)]">
          <h2 className="m-0 font-display font-extrabold text-[28px] text-[color:var(--text-strong)]">
            About this program
          </h2>
          <p className="m-0">{program.about}</p>
          {program.extendedAbout && <p className="m-0">{program.extendedAbout}</p>}

          <h3 className="mt-2 mb-0 font-display font-extrabold text-[22px] text-[color:var(--text-strong)]">
            What the program covers
          </h3>
          <div className="flex flex-col gap-3">
            {program.covers.map((c, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <span className="flex-none w-8 h-8 rounded-lg bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)] inline-flex items-center justify-center mt-0.5">
                  <Check className="w-[17px] h-[17px]" />
                </span>
                <p className="m-0 text-[15.5px] leading-[1.65]">{c}</p>
              </div>
            ))}
          </div>

          <img
            src={program.coverImage}
            alt={program.title}
            className="w-full h-[340px] object-cover rounded-lg shadow-md mt-2"
          />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-5 sticky top-[120px]">
          <div className="bg-white border border-[color:var(--border-default)] rounded-lg shadow-sm p-7 flex flex-col gap-4">
            <h3 className="m-0 font-display font-extrabold text-[19px] text-[color:var(--text-strong)]">
              Program facts
            </h3>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <div className="flex justify-between gap-3">
                <span className="text-[color:var(--text-muted)]">Focus area</span>
                <strong className="text-[color:var(--text-strong)] text-right">
                  {program.focusArea}
                </strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[color:var(--text-muted)]">Beneficiaries</span>
                <strong className="text-[color:var(--text-strong)] text-right">
                  {program.beneficiaries}
                </strong>
              </div>
              {program.partner && (
                <div className="flex justify-between gap-3">
                  <span className="text-[color:var(--text-muted)]">Partner</span>
                  <strong className="text-[color:var(--text-strong)] text-right">
                    {program.partner}
                  </strong>
                </div>
              )}
            </div>
            
            <Button
              variant="donate"
              size="lg"
              href="/donate"
              className="mt-2 w-full justify-center shadow-[0_10px_22px_color-mix(in_srgb,var(--rsa-gold)_40%,transparent)]"
            >
              <HandHeart className="w-[17px] h-[17px]" />
              Fund this program
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/volunteer"
              className="w-full justify-center"
            >
              Volunteer as a trainer
            </Button>
          </div>
        </aside>
      </section>

      {/* More Programs Section */}
      <section className="bg-[color:var(--rsa-surface)] py-[72px]">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-9">
            <SectionHeading eyebrow="Keep Exploring" title="More programs" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {morePrograms.map((p) => (
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
        </div>
      </section>
    </div>
  );
}
