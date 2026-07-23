"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import Image from "next/image";

const PEOPLE = [
  { name: "Kola Olugbodi", role: "Chairman, Board of Trustees", img: "/assets/photos/board/kola.jpg" },
  { name: "Afolabi Oluwatoyin Adetokunbo", role: "Member, Board of Trustees", img: "/assets/photos/board/afolabi.jpg" },
  { name: "Eyitayo Ogunyemi", role: "Member, Board of Trustees", img: "/assets/photos/board/eyitayo.jpg" },
  { name: "Micheal Showunmi", role: "Member, Board of Trustees", img: "/assets/photos/team/michael.jpeg" },
  { name: "Oluwatomi Duduyemi", role: "Secretary, Board of Trustees", img: "/assets/photos/board/oluwatomi.jpg" },
];

export default function BoardOfTrusteesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Governance"
        title="Board of Trustees"
        img="/assets/photos/visit-ogun-state.jpg"
        intro="The trustees who provide strategic oversight and stewardship of the foundation."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PEOPLE.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-[color:var(--border-default)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] p-9 flex flex-col items-center text-center gap-4"
            >
              <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-[color:var(--rsa-teal-100)] bg-gray-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="margin-0 font-display font-bold text-[19px] text-[color:var(--text-strong)] leading-tight">
                  {p.name}
                </h3>
                <div
                  style={{
                    color: "var(--rsa-teal-700)",
                  }}
                  className="mt-1.5 font-heading font-semibold text-[13.5px] tracking-[0.02em]"
                >
                  {p.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
