"use client";

import React from "react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function PartnerPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will be in touch. This is a demo form.");
  };

  return (
    <div>
      <PageHeader
        eyebrow="Join Us"
        title="Partner With Us"
        img="/assets/photos/team-photo.jpg"
        intro="Partnering with our foundation is an opportunity to make a significant impact on the wellbeing and education of children and differently-abled persons."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-[76px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="m-0 font-display font-extrabold text-[28px] text-[color:var(--text-strong)]">
            Let's build inclusion together
          </h2>
          <p className="m-0 text-[16px] leading-[1.75] text-[color:var(--text-body)]">
            Please share your details and we will reach out to explore how we can work together — through funding, resources, expertise or shared programs.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex gap-3.5 items-start">
              <span className="flex-none w-10.5 h-10.5 rounded-[11px] bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <div className="font-heading font-bold text-[14px] text-[color:var(--text-strong)]">Address</div>
                <div className="text-[14.5px] text-[color:var(--text-body)] mt-0.5">1 Adekunle Owobiyi Close, Ogba, Ikeja, Lagos.</div>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <span className="flex-none w-10.5 h-10.5 rounded-[11px] bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="font-heading font-bold text-[14px] text-[color:var(--text-strong)]">Phone</div>
                <div className="text-[14.5px] text-[color:var(--text-body)] mt-0.5">+234 803 446 5277 · +234 913 484 0906</div>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <span className="flex-none w-10.5 h-10.5 rounded-[11px] bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="font-heading font-bold text-[14px] text-[color:var(--text-strong)]">Email</div>
                <div className="text-[14.5px] text-[color:var(--text-body)] mt-0.5">info@raisingstarafrica.org</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[color:var(--border-default)] rounded-[var(--radius-xl)] shadow-lg p-9 flex flex-col gap-5"
        >
          <h2 className="m-0 font-display font-extrabold text-[24px] text-[color:var(--text-strong)]">
            Partnership enquiry
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" placeholder="Your name" required />
            <Input label="Organisation" placeholder="Company / NGO" required />
            <Input type="email" label="Email" placeholder="you@email.com" required />
            <Input type="tel" label="Phone" placeholder="+234 ..." required />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
              How would you like to partner?
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your organisation and how you'd like to work together"
              required
              className="p-3 rounded-md border-[1.5px] border-[color:var(--border-strong)] font-body text-[15px] outline-none resize-y focus:border-[color:var(--color-primary)] transition-colors"
            />
          </div>

          <Button type="submit" size="lg" className="self-start mt-2">
            Send Enquiry
          </Button>
        </form>
      </section>
    </div>
  );
}
