"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heart, HandHeart, CheckSquare, Square } from "lucide-react";
import { usePaystackPayment } from "react-paystack";

export default function DonatePage() {
  const [accepted, setAccepted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: (parseFloat(amount) || 0) * 100, // Paystack expects amount in kobo (multiply by 100)
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY || "pk_test_placeholder_key_replace_me",
    currency: "NGN"
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    console.log("Payment successful", reference);
    alert(`Thank you for your generous donation! Ref: ${reference.reference}`);
    setName("");
    setEmail("");
    setAmount("");
    setAccepted(false);
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    // Initialize Paystack payment
    initializePayment({ onSuccess, onClose });
  };

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

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[color:var(--border-default)] rounded-[var(--radius-xl)] shadow-lg p-9 flex flex-col gap-5.5"
        >
          <h2 className="m-0 font-display font-extrabold text-[24px] text-[color:var(--text-strong)]">
            Make a donation
          </h2>

          <div className="flex flex-col gap-4">
            <Input 
              label="Full Name *" 
              placeholder="Your full name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              type="email" 
              label="Email *" 
              placeholder="you@email.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              type="number" 
              label="Amount (NGN) *" 
              placeholder="5000" 
              required 
              min="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <label className="flex gap-2.5 items-start text-[14px] text-[color:var(--text-body)] cursor-pointer mt-1 select-none">
            <div className="pt-0.5" onClick={() => setAccepted(!accepted)}>
              {accepted ? (
                <CheckSquare className="w-[18px] h-[18px] text-[color:var(--color-primary)]" />
              ) : (
                <Square className="w-[18px] h-[18px] text-[color:var(--border-strong)]" />
              )}
            </div>
            <span onClick={() => setAccepted(!accepted)}>I accept the terms and conditions and privacy policy.</span>
          </label>

          <Button
            type="submit"
            variant="donate"
            size="lg"
            className="w-full justify-center mt-2 shadow-[0_12px_26px_color-mix(in_srgb,var(--rsa-gold)_42%,transparent)]"
            disabled={!mounted}
          >
            <HandHeart className="w-[18px] h-[18px]" />
            Donate with Paystack
          </Button>
        </form>
      </section>
    </div>
  );
}
