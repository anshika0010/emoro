'use client'

import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      question: "WHAT NUTRIENTS ARE ESSENTIAL IN A COMPLETE DOG FOOD DIET?",
      answer:
        "While standard food covers macronutrients, aging and active pets require precise micronutrients. That is why our Emoro 12-in-1 multivitamin exists—it seamlessly delivers twelve essential trace and macro-minerals (like Zinc for coat health, Calcium for bones, and Manganese for cartilage) to ensure complete, snout-to-tail vitality."
    },
    {
      question: "HOW IS YOUR PET FOOD FORMULATED TO MEET NUTRITIONAL STANDARDS?",
      answer:
        "Every Emoro formula is crafted through strict, evidence-based research. Whether it's balancing electrolytes in our Emoro Hydrate, or precisely measuring the creatine and taurine in our high-performance Emoro Pawform, we ensure every scoop is biologically appropriate and clinically safe."
    },
    {
      question: "WHAT ROLE DOES PROTEIN PLAY IN A DOG'S HEALTH?",
      answer:
        "Protein is the fundamental building block of your pet's immune system, organs, and lean muscle mass. To supplement their primary diet, we offer high-value protein rewards like Emoro Ocean Protein and our safe, splinter-free Emoro Ogbones, satisfying their carnivorous cravings without the hazards of brittle cooked bones."
    },
    {
      question: "HOW DO OMEGA-3 AND OMEGA-6 FATTY ACIDS BENEFIT PETS?",
      answer:
        "Omegas act as systemic anti-inflammatories. They work rapidly to soothe itchy skin, lubricate stiff joints, and transform dull fur into a luxuriously soft coat. Our Emoro Ocean Protein (100g of dried mackerel) is an excellent, natural source of these essential fatty acids."
    },
    {
      question: "WHY IS BALANCED VITAMIN AND MINERAL CONTENT IMPORTANT?",
      answer:
        "Minerals act as the crucial 'spark plugs' for nearly every enzymatic process in your pet's body. Without a balanced mineral intake, pets can suffer from lethargy, joint degradation, and a weakened immune system. Our 12-in-1 matrix proactively prevents these deficiencies before they start."
    }
  ];

  return (
    <div className="w-full bg-[#f3ede7] py-10 md:py-16 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row gap-8 md:gap-12 items-start">

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
                <div className="flex justify-between items-center">
                  <p className="text-[11px] sm:text-xs md:text-sm text-gray-700 max-w-[90%] akira-regular">
                    {faq.question}
                  </p>
                  <span className="text-xl font-bold">
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

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex w-1/3">
          <div className="rounded-2xl flex justify-end items-end w-full">
            <Image
              src="/insta2.png"
              alt="Dog"
              width={400}
              height={500}
              priority
              className="object-contain w-[700px] h-auto"
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="flex md:hidden w-full justify-center">
          <Image
            src="/insta2.png"
            alt="Dog"
            width={360}
            height={320}
            priority
            className="object-contain w-auto h-auto"
          />
        </div>

      </div>
    </div>
  );
}