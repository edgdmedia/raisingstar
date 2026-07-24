import React from "react";
import { PageHeader } from "@/components/PageHeader";
import dynamic from "next/dynamic";

const PaystackDonateForm = dynamic(() => import("@/components/PaystackDonateForm"), {
  ssr: false,
});

export default function DonatePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Support Our Work"
        title="Donate"
        img="/assets/photos/feed-the-1000.jpg"
        intro="Your monetary donation helps to broaden our reach to more children across Africa."
      />

      <section className="max-w-[var(--container-max)] mx-auto px-6 py-[76px] grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="m-0 font-display font-extrabold text-[30px] text-[color:var(--text-strong)]">
            Why your gift matters
          </h2>
          <p className="m-0 text-[16px] leading-[1.75] text-[color:var(--text-body)]">
            Every donation funds educational aids, scholarships, therapy, vocational training and advocacy for differently-abled and less privileged children. We have already reached over 15,000 children — your gift helps us reach the next.
          </p>

          <div className="bg-[color:var(--rsa-surface)] border border-[color:var(--border-default)] rounded-lg p-7 mt-2">
            <h3 className="m-0 mb-4 font-display font-bold text-[19px] text-[color:var(--text-strong)]">
              Bank Transfer — United Bank for Africa
            </h3>
            <div className="flex flex-col gap-2.5 text-[15px]">
              <div className="flex justify-between gap-4">
                <span className="text-[color:var(--text-muted)]">Account name</span>
                <strong className="text-[color:var(--text-strong)] text-right">Raising Star Africa</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[color:var(--text-muted)]">Naira (NGN)</span>
                <strong className="text-[color:var(--text-strong)] text-right">1023988410</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[color:var(--text-muted)]">Dollar (USD)</span>
                <strong className="text-[color:var(--text-strong)] text-right">3003286628</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[color:var(--text-muted)]">Pounds (GBP)</span>
                <strong className="text-[color:var(--text-strong)] text-right">3003286635</strong>
              </div>
            </div>
          </div>
        </div>

        <PaystackDonateForm />
      </section>
    </div>
  );
}
