"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const SKILLS_LIST = [
  "Photography", "Videography", "Content Writing", "Graphic Design", 
  "Grant Proposal Writing", "Proof Reading", "Digital Engagement", 
  "Fundraising", "Marketing", "Coaching & Training", 
  "Brand Management & PR", "Social Media Management", "Legal Expertise", 
  "Girls/Women Empowerment", "Finance & Accounting", "Project Management", 
  "STEM", "Other"
];

export default function VolunteerPage() {
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());

  const toggleSkill = (skill: string) => {
    const newSkills = new Set(selectedSkills);
    if (newSkills.has(skill)) {
      newSkills.delete(skill);
    } else {
      newSkills.add(skill);
    }
    setSelectedSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for volunteering! This is a demo form.");
  };

  return (
    <div>
      <PageHeader
        eyebrow="Join Us"
        title="Volunteer"
        img="/assets/photos/vocational-skill.jpg"
        intro="Your time, skills and resources help us carry out our mission across Africa — and make a real impact on the wellbeing and education of children and differently-abled persons."
      />

      <section className="max-w-[820px] mx-auto px-6 py-[72px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[color:var(--border-default)] rounded-[var(--radius-xl)] shadow-lg p-10 flex flex-col gap-6"
        >
          <h2 className="m-0 font-display font-extrabold text-[26px] text-[color:var(--text-strong)]">
            Volunteer application
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
            <Input label="Full Name" placeholder="Your full name" required />
            <Input type="email" label="Email" placeholder="you@email.com" required />
            <Input type="tel" label="Phone Number" placeholder="+234 ..." required />
            <Input label="Location" placeholder="City, State" required />

            <div className="flex flex-col gap-1.5">
              <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
                Gender
              </label>
              <select className="p-3 rounded-md border-[1.5px] border-[color:var(--border-strong)] font-body text-[15px] outline-none bg-white focus:border-[color:var(--color-primary)] transition-colors">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
                Employment Status
              </label>
              <select className="p-3 rounded-md border-[1.5px] border-[color:var(--border-strong)] font-body text-[15px] outline-none bg-white focus:border-[color:var(--color-primary)] transition-colors">
                <option>Select</option>
                <option>Employed</option>
                <option>Unemployed</option>
                <option>Self-employed</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
              Skills / Interests <span className="text-[color:var(--text-muted)] font-medium">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {SKILLS_LIST.map((skill) => {
                const isSelected = selectedSkills.has(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`px-3.5 py-2 rounded-full cursor-pointer font-heading font-semibold text-[13.5px] transition-all duration-150 ${
                      isSelected
                        ? "border-[1.5px] border-[color:var(--color-primary)] bg-[color:var(--rsa-teal-100)] text-[color:var(--rsa-teal-700)]"
                        : "border-[1.5px] border-[color:var(--border-strong)] bg-white text-[color:var(--text-body)]"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
              Working experience with these skills
            </label>
            <textarea
              rows={3}
              placeholder="Tell us briefly about your experience"
              required
              className="p-3 rounded-md border-[1.5px] border-[color:var(--border-strong)] font-body text-[15px] outline-none resize-y focus:border-[color:var(--color-primary)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-[13px] text-[color:var(--text-strong)]">
              How did you hear about us?
            </label>
            <select className="p-3 rounded-md border-[1.5px] border-[color:var(--border-strong)] font-body text-[15px] outline-none bg-white focus:border-[color:var(--color-primary)] transition-colors">
              <option>Select</option>
              <option>Our website</option>
              <option>Facebook</option>
              <option>Twitter / X</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>From a friend</option>
              <option>Other</option>
            </select>
          </div>

          <Button type="submit" size="lg" className="self-start mt-2">
            Sign Me Up
          </Button>
        </form>
      </section>
    </div>
  );
}
