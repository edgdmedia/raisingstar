"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";

import Image from "next/image";

const PEOPLE = [
  {
    name: "Dr. Adetola A. Saliu",
    role: "Special Adviser to the Minister of Education, Nigeria",
    img: "/assets/photos/advisory/adetola.jpg",
  },
  {
    name: "Dr. Kelechuwku Onwukamike (PhD)",
    role: "Procter & Gamble",
    img: "/assets/photos/advisory/kelechuwku.jpg",
  },
  {
    name: "Dr. Wisdom Patrick Enang",
    role: "Exxon Mobil",
    img: "/assets/photos/advisory/wisdom.jpg",
  },
  {
    name: "Fletcher NG",
    role: "Advisory Board Member",
    img: "/assets/photos/advisory/fletcher.jpg",
  },
  {
    name: "HE Princess (Mrs.) Sarah Adebisi Sosan, OFR",
    role: "Advisory Board Member",
    img: "/assets/photos/advisory/sarah.jpg",
  },
  {
    name: "Olusola Samuel Owonikoko",
    role: "Founder, Stanforte Edge",
    img: "/assets/photos/advisory/olusola.jpg",
  },
  {
    name: "Yemi Faseun",
    role: "YF Talent Partners",
    img: "/assets/photos/advisory/yemi.jpg",
  },
];

export default function AdvisoryBoardPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our People"
        title="Advisory Board"
        img="/assets/photos/igando-inclusive-school.jpg"
        intro="Distinguished advisers who lend their expertise and networks to our cause."
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
                <h3 className="margin-0 font-display font-bold text-lg text-[color:var(--text-strong)] leading-tight">
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
