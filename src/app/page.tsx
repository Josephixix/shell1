"use client";
import Script from "next/script";
import { motion, useInView } from "motion/react";
import { use, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { u } from "motion/react-client";
import { server } from "shadcn/mcp";
import Navbar from "@/components/navbar";

const faqs = [
  {
    question: "When Will I Receive My Book?",
    answer:
      "Your digital copy is delivered instantly to your email right after purchase. No waiting, no shipping — just immediate access on any device.",
  },
  {
    question: "Is This Book Easy to Follow?",
    answer:
      "Absolutely. Every remedy and routine is explained in simple language with step-by-step guidance. No medical knowledge needed.",
  },
  {
    question: "Do I Need Special Ingredients?",
    answer:
      "No. Most remedies use simple herbs and ingredients that are affordable and easy to find in grocery stores or local markets.",
  },
  {
    question: "Who Is This Book For?",
    answer:
      "This book is designed for anyone struggling with poor sleep, restless nights, stress, or low energy — regardless of age.",
  },
  {
    question: "What If It Doesn't Work For Me?",
    answer:
      "You're covered by a 60-day satisfaction guarantee. If you're not happy with your experience, simply reach out for a full refund.",
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
    text: "Simple, practical, and it actually works. I was skeptical at first, but the routines are so easy to follow. My wife noticed the difference before I did, I'm calmer and more rested.",
  },
  {
    name: "Dolores M., 64",
    location: "Miami, FL",
    text: "Everything is right there in my kitchen. No expensive supplements, no confusing instructions. Just real ingredients and real results. I feel like myself again.",
  },
];

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export default function Home() {
  return (
    <main className="bg-[#f8f6ef] text-[#1f2937] overflow-hidden">
<Navbar />
      {/* ConvertKit script — loads once for the inline form below */}
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-start lg:justify-center md:mt-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
          Herbal Remedies For Deep,{" "}
            <em className="italic text-[#3d6b4f]">Restful Sleep</em>{" "}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
        A guide that restores your carcadian rhythm naturally, without
         the chemical hangover through a variety of handpicked ancient herbal remedies that has stood 
         the test of time.
          </motion.p>
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a href="https://thebluehibiscus.gumroad.com/l/jqfsdj" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium px-7 py-3 rounded-full"
                whileHover={{ scale: 1.04, backgroundColor: "#2e5040" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Make Purchase
              </motion.button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center items-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/hero2.png"
            alt="hero image"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium mb-4">
              About the Book
            </p>
            <img
              src="/hero3.png"
              alt="Natural herbs and remedies"
              className="w-full rounded-2xl object-cover"
            />
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <h2 className="text-2xl font-bold font-serif leading-tight mb-4 text-[#3d6b4f]">
              About Blue Hibiscus
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
       Green health is real wealth, that is why at Blue Hibiscus we offer you the best solutions to everyday ailments and health concerns.  Our guides consist of a collection of carefully selected herbs, herbal remedies, curated routines and a whole lot more providing you with healthy alternatives to pills and prescriptions that causes drug dependency.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            Why swallow those bitter tablets when you could enjoy a fragrant hot cup of home brewed tea.
            </p>
            <a href="https://thebluehibiscus.gumroad.com/l/jqfsdj" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium mt-4 px-7 py-3 rounded-full"
                whileHover={{ scale: 1.04, backgroundColor: "#2e5040" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Make Purchase
              </motion.button>
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-[#f8f6ef] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium text-center mb-3">
              Why It Works
            </p>
            <h2 className="text-2xl font-bold font-serif text-center mb-14">
              Why This Works When Everything Else Doesn't
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FadeInSection delay={0.1}>
              <div className="bg-[#f0f7f2] border border-[#c5dbc9] rounded-2xl p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-[#3d6b4f] flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332-.477-4.5-1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-serif text-[#3d6b4f] mb-5">
                  Blue Hibiscus: Natural Sleep Solutions
                </h3>
                <ul className="flex flex-col gap-3 flex-1">
                  {[
                    "No complicated routines, no expensive lab synthesized supplements",
                    "Backed by traditional medicine and modern science",
                    "Unlike pills, herbs work with your body,not against it",
                    "Carefully reserched and designed for home use",
                    "step-by-step guid on how to prepare herbal remedies in your kitchen",
                    "Realistic routine and life style change that makes a real difference",
                    "feel refreshed, energized, and ready to shine",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#3d6b4f] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-serif text-gray-900 mb-5">
                  Pills, Supplements & Guesswork
                </h3>
                <ul className="flex flex-col gap-3 flex-1">
                  {[
                    "One ingredient at a time",
                    "Conflicting advice everywhere",
                    "Expensive products that don't fix anything",
                    "Temporary relief, then it comes back",
                    "One pill leads to another",
                    "No clear system, just trial and error",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-900"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.1}>
            <div className="text-center">
              <a href="https://thebluehibiscus.gumroad.com/l/jqfsdj" target="_blank" rel="noopener noreferrer">
                <motion.span
                  className="inline-block bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium px-7 py-3 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.04, backgroundColor: "#2e5040" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Send Me My Copy Now
                </motion.span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium text-center mb-3">
              Real Stories
            </p>
            <h2 className="text-2xl font-bold font-serif text-center mb-2">
              What Readers Are Saying
            </h2>
            <p className="text-sm text-gray-400 text-center mb-14">
              From people just like you who made the switch to natural rest.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* NEWSLETTER — ConvertKit inline form */}
<section className="bg-[#3d6b4f] py-24 border-t border-gray-100">
  <div className="max-w-2xl mx-auto px-6">
    <FadeInSection>
  
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async data-uid="5be4437952" src="https://blue-hibiscus.kit.com/5be4437952/index.js"></script>`,
        }}
      />
    </FadeInSection>
  </div>
</section>

      {/* FAQ */}
      <section className="bg-[#f8f6ef] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection>
            <p className="text-xs uppercase tracking-widest text-[#3d6b4f] font-medium text-center mb-3">
              FAQ
            </p>
            <h2 className="text-2xl font-bold font-serif text-center mb-2">
              Still Have Questions?
            </h2>
            <p className="text-sm text-gray-400 text-center mb-12">
              Everything you need to know before getting started.
            </p>
          </FadeInSection>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2a1f] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <FadeInSection>
              <div className="max-w-xs">
                <h3 className="text-lg font-serif font-bold text-white mb-2">Blue Hibiscus</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Natural wellness guides for all ages. Simple ingredients, real results.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <a href="https://thebluehibiscus.gumroad.com/l/jqfsdj" target="_blank" rel="noopener noreferrer">
                  <motion.span
                    className="inline-block bg-[#3d6b4f] text-[#f8f6ef] text-sm font-medium px-7 py-3 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.04, backgroundColor: "#2e5040" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Me My Copy Now
                  </motion.span>
                </a>
              </div>
            </FadeInSection>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2026 Blue Hibiscus. All Rights Reserved.</p>
            <p className="text-xs text-gray-600">Made with care for natural living.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}