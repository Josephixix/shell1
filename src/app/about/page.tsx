"use client";

import Aboutnav from "@/components/aboutnav";
import Script from "next/script";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const interval = setInterval(() => {
      const toggle = document.querySelector("[data-formkit-toggle='42eb18a4eb']") as HTMLElement;
      if (toggle) {
        toggle.click();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f8f6ef] min-h-screen">

      <Script
        async
        data-uid="42eb18a4eb"
        src="https://blue-hibiscus.kit.com/42eb18a4eb/index.js"
        strategy="afterInteractive"
      />

      <Aboutnav />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="/about.jpeg"
            alt="Sleep Research"
            className="w-full aspect-[16/7] object-cover rounded-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-xl md:text-2xl font-bold font-serif leading-tight text-[#1f2937] mb-10">
            After 7 Years Of Studying Sleep Patterns, The Blue Hibiscus Sleep
            Research Team Uncovered A Hidden Sleep Pattern Most People Overlook
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              You probably believe falling asleep is the problem. Our research
              discovered that many people who wake up at 2AM, 3AM or 4AM are
              actually dealing with a completely different issue. The body
              already produces the natural compounds responsible for deep,
              uninterrupted sleep, yet many people unknowingly disrupt this
              process night after night. The result is waking up exhausted,
              struggling to fall back asleep and relying on caffeine just to
              function the next day.
            </p>

            <p>
              Imagine falling asleep within minutes, sleeping deeply through the
              night and waking up energized instead of exhausted. According to
              our research, the missing piece is not another medication,
              supplement or complicated routine. It's understanding how to
              naturally support the sleep process your body was already designed
              to perform. The information you're about to receive reveals the
              exact discovery that changed how we understand restorative sleep.
            </p>
          </div>

          {/* Hidden trigger button — auto-clicked on load */}
          <button
            data-formkit-toggle="42eb18a4eb"
            className="hidden"
            aria-hidden="true"
          />

          {/* Visible CTA for manual re-open */}
          <div className="mt-12">
            <button
              className="inline-flex items-center justify-center bg-[#3d6b4f] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2e5040] transition cursor-pointer"
            >
              Get The Free Sleep Discovery Guide
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}