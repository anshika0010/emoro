import EmeroSections from "@/components/EmeroSections";
import FAQSection from "@/components/FAQSectionabout";
import OurAchievement from "@/components/OurAchievement";
import OurServices from "@/components/OurServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function page() {
  return (
    <>
    <section className="relative w-full h-[500px] md:h-[850px] rounded-2xl overflow-hidden my-3">

      {/* Background Image */}
      <Image
        src="/aboutbanner.jpg" // 👈 put your uploaded image here
        alt="About Emoro"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        
        {/* Left Text */}
        <div className="max-w-3xl text-white">
          
          <h2 className="text-lg md:text-2xl tracking-wide mb-2">
            ABOUT
          </h2>

          <h1 className="text-5xl md:text-9xl font-extrabold leading-none mb-6">
            EMORO
          </h1>

          <p className="text-sm md:text-base leading-relaxed mb-4">
   We started Emoro because we were tired of the compromises in the pet aisle. Dogs and cats deserve real food and actual health support, not just cheap fillers hiding behind flashy labels. We formulate every product—from our 12-mineral daily blends to our completely splinterfree chicken chews—using strict veterinary standards and rigorously tested raw ingredients. Your pets are family. That means our only benchmark is their daily comfort, their joint strength, and their long-term survival. We test every batch. We hide absolutely nothing.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            At the heart of our brand lies a commitment to uncompromised quality,
            transparency, and care. We source only the finest ingredients.
          </p>

        </div>
      </div>
    </section>
    <EmeroSections/>
    <OurAchievement/>
    <FAQSection/>
    {/* <OurServices/> */}
    <TestimonialsSection/>
    </>
  );
}