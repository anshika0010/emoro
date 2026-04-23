'use client'

import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    "WHAT NUTRIENTS ARE ESSENTIAL IN A COMPLETE DOG FOOD DIET?",
    "HOW IS YOUR PET FOOD FORMULATED TO MEET NUTRITIONAL STANDARDS?",
    "WHAT ROLE DOES PROTEIN PLAY IN A DOG'S HEALTH?",
    "HOW DO OMEGA-3 AND OMEGA-6 FATTY ACIDS BENEFIT PETS?",
    "WHY IS BALANCED VITAMIN AND MINERAL CONTENT IMPORTANT?",
  ];

  return (
    <div className="w-full bg-[#f3ede7] py-10 md:py-16 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-8 md:gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">

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
              className="rotate-12 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((q, i) => (
              <div
                key={i}
                className="border-b border-gray-400 pb-4 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 max-w-[90%] akira-regular">
                    {q}
                  </p>
                  <span className="text-xl font-bold">
                    {open === i ? "-" : "+"}
                  </span>
                </div>

                {open === i && (
                  <p className="text-[12px] md:text-sm text-gray-600 mt-2">
                    This is a sample answer explaining the question in detail.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* Hidden on mobile to keep layout clean, shown from md+ */}
     <div className="hidden md:flex w-1/2">
  <div className="rounded-2xl flex justify-center items-center w-full">
    <Image
      src="/insta2.png"
      alt="Dog"
      width={400}
      height={500}
      priority
      className="object-contain w-auto h-auto"
    />
  </div>
</div>

        {/* Mobile-only: smaller centered image below FAQs */}
        <div className="flex md:hidden w-full justify-center">
          <Image
            src="/insta2.png"
            alt="Dog"
            width={260}
            height={320}
            priority
            className="object-contain w-auto h-auto"
          />
        </div>

      </div>
    </div>
  );
}