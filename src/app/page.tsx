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

const testimonials = [
  {
    name: "Margaret T., 67",
    location: "Portland, OR",
    text: "I've struggled with sleep for years. After two weeks with Blue Hibiscus, I'm sleeping through the night for the first time in a decade. The chamomile and valerian blend is my new evening ritual.",
  },
  {
    name: "Robert K., 72",
    location: "Austin, TX",
    text: "Simple, practical, and it actually works. I was skeptical at first, but the routines are so easy to follow. My wife noticed the difference before I did — I'm calmer and more rested.",
  },
  {
    name: "Dolores M., 64",
    location: "Miami, FL",
    text: "Everything is right there in my kitchen. No expensive supplements, no confusing instructions. Just real ingredients and real results. I feel like myself again.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (email) {
    setSubmitted(true);
    setEmail("");
  }
};

  return (
    <main className="bg-[#f8f6ef] text-[#1f2937] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
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
               <button className="bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium mt-4 px-7 py-3 rounded-full hover:bg-[#2e5040] transition-colors">
              Make Purchase
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f8f6ef] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium text-center mb-3">
            Real Stories
          </p>
          <h2 className="text-4xl font-bold font-serif text-center mb-2">
            What Readers Are Saying
          </h2>
          <p className="text-sm text-gray-400 text-center mb-14">
            From people just like you who made the switch to natural rest.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[#3d6b4f] fill-[#3d6b4f]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="bg-[#3d6b4f]">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-[#a8c5b0] font-medium mb-3">
            Stay in the Loop
          </p>
          <h2 className="text-4xl font-bold font-serif text-white mb-4">
            Get Natural Wellness Tips in Your Inbox
          </h2>
          <p className="text-[#c5dbc9] text-base leading-relaxed mb-10">
            Join our community of readers over 50. We share simple remedies, seasonal routines, and gentle advice — no spam, just good guidance.
          </p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
              <p className="text-white font-semibold text-lg">You're on the list!</p>
              <p className="text-[#c5dbc9] text-sm mt-1">Thank you for joining. Check your inbox for a welcome note.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full bg-white text-gray-800 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-[#1a2a1f] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-black transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
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
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div className="max-w-xs">
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Blue Hibiscus
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Natural wellness guides for adults over 50. Simple ingredients, real results.
              </p>
            </div>
          </div>
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