'use client'

import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

const faqs = [
  {
    question: "WHAT IS EMORO HYDRATE USED FOR?",
    answer:
      "Plain water isn't always enough. This is a rapid recovery drink. It replaces the exact fluids and minerals your dog sweats out through heavy panting during a park run, hot weather, or travel, stopping heat stress before it takes hold."
  },
  {
    question: "CAN I GIVE EMORO HYDRATE DAILY TO MY DOG?",
    answer:
      "Yes. If your dog works hard, runs daily, or lives in a hot climate, a daily serving after their main exercise maintains their stamina and protects their kidneys from chronic dehydration."
  },
  {
    question: "IS EMORO HYDRATE SUITABLE FOR ALL DOG BREEDS?",
    answer:
      "Yes. We balanced the sodium and potassium ratios so the powder is completely safe and highly effective for every size and age—from young puppies to senior dogs that just need a push to drink more water."
  },
  {
    question: "WHEN SHOULD I GIVE EMORO HYDRATE TO MY DOG?",
    answer:
      "Pour it in their bowl right after a long walk, a rough play session, or anytime you notice them panting heavily and slowing down from the summer heat."
  },
  {
    question: "HOW DOES EMORO HYDRATE WORK?",
    answer:
      "Plain water sits heavy in a dog's stomach. Our mix uses a specific carbohydrate to open a transport channel in the gut, forcing water and electrolytes directly into the bloodstream to cool their core temperature fast."
  }
];

  return (
    <div className="max-w-[1600px] py-10 md:py-16">

      {/* Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-34">

        {/* Heading */}
        <div className="flex items-center gap-3 md:gap-4 mb-7 md:mb-10">

          <div>
            <h2 className="text-[#ff4d00] text-[60px] sm:text-[72px] md:text-8xl font-extrabold akira-regular uppercase leading-none">
              FAQ
            </h2>
            <div className="h-[4px] w-[180px] sm:w-[240px] md:w-[300px] bg-[#ff4d00] mt-1"></div>
          </div>

          <Image
            src="/questionmark.png"
            alt="?"
            width={100}
            height={100}
            className="rotate-12 w-[60px] h-[60px] sm:w-[100px] sm:h-[80px] md:w-[100px] md:h-[100px] animate-float"
          />
        </div>

        {/* FAQ List */}
     <div className="space-y-4">
  {faqs.map((faq, i) => (
    <div
      key={i}
      className="border-b border-gray-400 pb-4 cursor-pointer"
      onClick={() => setOpen(open === i ? null : i)}
    >
      <div className="flex justify-between items-center gap-3">
        <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 max-w-[90%] akira-regular">
          {faq.question}
        </p>
        <span className="text-xl font-bold shrink-0">
          {open === i ? "-" : "+"}
        </span>
      </div>

      {open === i && (
        <p className="text-[12px] md:text-sm text-gray-600 mt-2">
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}