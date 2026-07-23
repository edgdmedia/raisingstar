"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Download, Target } from "lucide-react";

type FilterType = "All" | "Impact Reports" | "Financial Reports" | "Others";

export default function ResourcesPage() {
  const [filter, setFilter] = useState<FilterType>("All");

  const impactReports = [
    { title: '2025 Annual Impact Report', meta: 'PDF · Latest', href: '/assets/documents/2025-impact-report.pdf', category: 'Impact Reports', icon: <FileText className="w-6 h-6" />, color: 'teal' },
    { title: '2024 Annual Impact Report', meta: 'PDF', href: '/assets/documents/2024-impact-report.pdf', category: 'Impact Reports', icon: <FileText className="w-6 h-6" />, color: 'teal' },
    { title: 'Annual Impact Report 2022', meta: 'PDF', href: '/assets/documents/2022-impact-report.pdf', category: 'Impact Reports', icon: <FileText className="w-6 h-6" />, color: 'teal' },
    { title: '2021 Annual Impact Report', meta: 'PDF', href: '/assets/documents/2021-impact-report.pdf', category: 'Impact Reports', icon: <FileText className="w-6 h-6" />, color: 'teal' },
  ];

  const financialReports = [
    { title: '2025 Financial Audit Report', meta: 'PDF · Audited', href: '/assets/documents/2025-financial-audit-report.pdf', category: 'Financial Reports', icon: <FileText className="w-6 h-6" />, color: 'green' },
    { title: '2024 Audit Report', meta: 'PDF · Audited', href: '/assets/documents/2024-audit-report.pdf', category: 'Financial Reports', icon: <FileText className="w-6 h-6" />, color: 'green' },
    { title: '2023 Account Final', meta: 'PDF', href: '/assets/documents/2023-account.pdf', category: 'Financial Reports', icon: <FileText className="w-6 h-6" />, color: 'green' },
    { title: 'Financial Statement 2022', meta: 'PDF', href: '/assets/documents/2022-financial-statement.pdf', category: 'Financial Reports', icon: <FileText className="w-6 h-6" />, color: 'green' },
    { title: '2021 Financial Report', meta: 'PDF', href: '/assets/documents/2021-account-final.pdf', category: 'Financial Reports', icon: <FileText className="w-6 h-6" />, color: 'green' },
  ];

  const others = [
    { title: 'Raising Star Africa Strategy Document', meta: 'PDF · Our multi-year roadmap', href: '/assets/documents/strategy-document.pdf', category: 'Others', icon: <Target className="w-6 h-6" />, color: 'gold' },
  ];

  const allResources = [...impactReports, ...financialReports, ...others];

  const filteredResources = allResources.filter(r => filter === "All" || r.category === filter);

  const filters: FilterType[] = ["All", "Impact Reports", "Financial Reports", "Others"];

  return (
    <div>
      <PageHeader
        eyebrow="Transparency"
        title="Resources"
        img="/assets/photos/img-4299.jpg"
        intro="Our impact reports, audited financials and strategy documents — open for anyone to read."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-10">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full font-heading font-semibold text-[14.5px] transition-all border ${
                  filter === f
                    ? "bg-[color:var(--color-primary)] border-[color:var(--color-primary)] text-white shadow-md"
                    : "bg-white border-[color:var(--border-default)] text-[color:var(--text-body)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredResources.map((d, i) => {
              const bgClass = d.color === 'teal' ? 'bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)]' :
                              d.color === 'green' ? 'bg-[color:var(--rsa-green-100)] text-[color:var(--rsa-green-600)]' :
                              'bg-[color:var(--rsa-gold-100)] text-[color:var(--rsa-gold-600)]';
                              
              const hoverBorderClass = d.color === 'teal' ? 'hover:border-[color:var(--rsa-teal)]' :
                                       d.color === 'green' ? 'hover:border-[color:var(--rsa-green)]' :
                                       'hover:border-[color:var(--rsa-gold)]';

              const hoverTextClass = d.color === 'teal' ? 'group-hover:text-[color:var(--color-primary)]' :
                                     d.color === 'green' ? 'group-hover:text-[color:var(--rsa-green-600)]' :
                                     'group-hover:text-[color:var(--rsa-gold-600)]';

              return (
                <a
                  key={i}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4.5 bg-white border border-[color:var(--border-default)] rounded-lg shadow-sm p-5.5 no-underline hover:shadow-lg transition-all group ${hoverBorderClass}`}
                >
                  <span className={`flex-none w-12 h-12 rounded-xl flex items-center justify-center ${bgClass}`}>
                    {d.icon}
                  </span>
                  <span className="flex-1">
                    <span className={`block font-display font-bold text-[16.5px] text-[color:var(--text-strong)] transition-colors ${hoverTextClass}`}>
                      {d.title}
                    </span>
                    <span className="block font-heading text-[12.5px] text-[color:var(--text-muted)] mt-1">
                      {d.meta}
                    </span>
                  </span>
                  <span className={`flex-none text-[color:var(--text-muted)] transition-colors ${hoverTextClass}`}>
                    <Download className="w-5 h-5" />
                  </span>
                </a>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12 text-[color:var(--text-muted)] font-body text-[16px]">
              No resources found for this category.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
