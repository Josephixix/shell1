"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When Will I Receive My Book?",
    answer:
      "Your digital copy is delivered instantly to your email right after purchase. No waiting, no shipping — just immediate access on any device.",
  },
  {
    question: "Is This Book Easy to Follow?",
    answer:
      "Absolutely. Every remedy and routine is written in plain language with simple steps. No medical background needed — if you can make tea, you can follow this book.",
  },
  {
    question: "Do I Need Special Ingredients?",
    answer:
      "No. Everything in this book uses everyday ingredients — garlic, ginger, lemon, turmeric — found at any grocery store. Nothing exotic, nothing expensive.",
  },
  {
    question: "Is This Suitable For My Age?",
    answer:
      "Yes. This book was written specifically for adults over 60. Every recommendation accounts for how the body changes with age and what actually works at this stage of life.",
  },
  {
    question: "What If It Doesn't Work For Me?",
    answer:
      "You're covered by a 60-day 'Feel the Difference' guarantee. If you don't notice a real improvement, just reach out for a full refund — no questions asked.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f6ef] text-[#1f2937] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="flex flex-col justify-start lg:justify-center md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
            Sleep Better{" "}
            <em className="italic text-[#3d6b4f]">Naturally</em>{" "}
            After 60
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            A simple handbook with sleep routines, foods, drinks, and remedies
            designed for seniors. No pills, no prescriptions, just rest that works.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium px-7 py-3 rounded-full hover:bg-[#2e5040] transition-colors">
              Make Purchase
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center lg:justify-end">
          <img
            src="/hero.png"
            alt="Senior sleeping peacefully"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium mb-4">
              About the Book
            </p>
            <img
              src="/image2.png"
              alt="Natural herbs and remedies"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-3xl font-bold font-serif leading-tight mb-4 text-[#3d6b4f]">
              About Blue Hibiscus
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Blue Hibiscus is a simple, natural wellness guide designed for people over 50 who want better sleep, more energy, and everyday comfort using easy kitchen ingredients and herbal combinations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No complicated routines. Just clear, step-by-step methods that help your body respond naturally and consistently over time.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f6ef] py-24">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium text-center mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold font-serif text-center mb-2">
            Still Have Questions?
          </h2>
          <p className="text-sm text-gray-400 text-center mb-12">
            Everything you need to know before getting started.
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-2xl px-6 bg-white data-[state=open]:bg-white transition-colors"
              >
                <AccordionTrigger className="text-base font-semibold text-gray-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

    {/* FOOTER */}
<footer className="bg-[#1a2a1f] text-white py-16">
  <div className="max-w-6xl mx-auto px-6">

    {/* Top */}
    <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

      {/* Brand */}
      <div className="max-w-xs">
        <h3 className="text-lg font-serif font-bold text-white mb-2">
          Blue Hibiscus
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Natural wellness guides for adults over 50. Simple ingredients, real results.
        </p>
      </div>

      

    </div>

    {/* Divider */}
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-gray-500">
        © 2026 GreenHaven Press. All Rights Reserved.
      </p>
      <p className="text-xs text-gray-600">
        Made with care for natural living.
      </p>
    </div>

  </div>
</footer>

    </main>
  );
}