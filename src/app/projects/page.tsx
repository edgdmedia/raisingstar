"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { PROJECTS_DATA, PAST_PROJECTS } from "./data";
import { CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        img="/assets/photos/this-ability-5.jpg"
        intro="In line with our mission, our projects help us reach out to the communities that need our resources the most."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 pt-20 pb-10">
        <div className="flex justify-center mb-10">
          <SectionHeading eyebrow="Current & Upcoming" title="Projects we are running now" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((p) => (
            <ProgramCard
              key={p.slug}
              image={p.img}
              badge={p.badge}
              title={p.title}
              description={p.desc}
              linkLabel="View project"
              href={`/projects/${p.slug}`}
              badgeTone="neutral"
            />
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--rsa-surface)] py-[72px]">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-9">
            <SectionHeading
              eyebrow="Our Track Record"
              title="Past projects"
              intro="Completed work that has already changed lives across Lagos and beyond."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAST_PROJECTS.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-[color:var(--border-default)] rounded-lg shadow-sm p-6 flex flex-col gap-3"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-[color:var(--rsa-green-100)] text-[color:var(--rsa-green-600)]">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <h3 className="m-0 font-display font-bold text-[17px] leading-[1.3] text-[color:var(--text-strong)]">
                  {p}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
