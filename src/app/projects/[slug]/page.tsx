import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "../data";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { ChevronRight, HandHeart } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const moreProjects = PROJECTS_DATA.filter((p) => p.slug !== project.slug).slice(0, 3);
  const percentRaised = Math.min(Math.round((project.raised / project.goal) * 100), 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative pt-[92px] pb-[72px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(23,120,133,.94), rgba(77,133,49,.86)), url(${project.img})`,
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-6 flex flex-col items-start gap-3.5">
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-[13.5px] text-white opacity-90 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            All projects
          </a>
          <span className="inline-flex font-heading font-semibold text-[11px] tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full bg-white/16 text-white">
            {project.badge}
          </span>
          <h1 className="m-0 font-display font-extrabold text-[clamp(34px,4.5vw,54px)] text-white">
            {project.title}
          </h1>
          <p className="m-0 text-[18px] leading-[1.6] text-white/90 max-w-[640px]">
            {project.desc}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[var(--container-max)] mx-auto px-6 py-[72px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="flex flex-col gap-5.5 text-[16.5px] leading-[1.8] text-[color:var(--rsa-ink)]">
          <h2 className="m-0 font-display font-extrabold text-[28px] text-[color:var(--text-strong)]">
            About this project
          </h2>
          {project.about.map((p, i) => (
            <p key={i} className="m-0">
              {p}
            </p>
          ))}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-2">
              <h3 className="m-0 mb-4 font-display font-extrabold text-[22px] text-[color:var(--text-strong)]">
                Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    className="w-full aspect-[4/3] rounded-md shadow-sm"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-5 sticky top-[120px]">
          <div className="bg-white border border-[color:var(--border-default)] rounded-lg shadow-sm p-7 flex flex-col gap-4.5">
            <h3 className="m-0 font-display font-extrabold text-[19px] text-[color:var(--text-strong)]">
              Funding progress
            </h3>
            
            <div>
              <div className="flex justify-between font-heading text-[13.5px] mb-2">
                <strong className="text-[color:var(--text-strong)]">{formatCurrency(project.raised)} raised</strong>
                <span className="text-[color:var(--text-muted)]">of {formatCurrency(project.goal)}</span>
              </div>
              <div className="h-2.5 rounded-full bg-[color:var(--rsa-surface-2)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[color:var(--rsa-teal)] to-[color:var(--rsa-green)]"
                  style={{ width: `${percentRaised}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <div className="flex justify-between gap-3">
                <span className="text-[color:var(--text-muted)]">Beneficiaries</span>
                <strong className="text-[color:var(--text-strong)] text-right">
                  {project.beneficiaries}
                </strong>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[color:var(--text-muted)]">Status</span>
                <strong className={`text-right ${project.status === 'Completed' ? 'text-[color:var(--rsa-ink)]' : 'text-[color:var(--rsa-green-600)]'}`}>
                  {project.status}
                </strong>
              </div>
            </div>
            
            {project.status !== 'Completed' && (
              <Button
                variant="donate"
                size="lg"
                href="/donate"
                className="mt-1 w-full justify-center shadow-[0_10px_22px_color-mix(in_srgb,var(--rsa-gold)_40%,transparent)]"
              >
                <HandHeart className="w-[17px] h-[17px]" />
                Sponsor this project
              </Button>
            )}
            
            <Button
              variant="outline"
              size="lg"
              href="/partner"
              className="w-full justify-center"
            >
              Partner with us
            </Button>
          </div>
        </aside>
      </section>

      {/* More Projects Section */}
      <section className="bg-[color:var(--rsa-surface)] py-[72px]">
        <div className="max-w-[var(--container-max)] mx-auto px-6">
          <div className="flex justify-center mb-9">
            <SectionHeading eyebrow="Keep Exploring" title="More projects" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreProjects.map((p) => (
              <ProgramCard
                key={p.slug}
                image={p.img}
                badge={p.badge}
                badgeTone="neutral"
                title={p.title}
                description={p.desc}
                linkLabel="View project"
                href={`/projects/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
