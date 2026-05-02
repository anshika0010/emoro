'use client';
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    tag: "New Arrival",
    title: "Emoro is fueling richer lives together",
    description:
      "Helping the pets we love live their best lives by our side by providing them with the right nutrition. From our advanced 12-in-1 mineral complex to radically safe, savory ancestral treats, we bridge the gap between instinct and modern wellness.",
    image: "/image1.png",
    btnLabel: "Shop Dog",
  },
  {
    id: 2,
    tag: "Best Seller",
    title: "Emoro is fueling richer lives together",
    description:
      "Helping the pets we love live their best lives by our side by providing them with the right nutrition. From our advanced 12-in-1 mineral complex to radically safe, savory ancestral treats, we bridge the gap between instinct and modern wellness.",
    image: "/image2.png",
    btnLabel: "Shop Dog",
  },
  {
    id: 3,
    tag: "Limited Edition",
    title: "Emoro is fueling richer lives together",
    description:
      "Helping the pets we love live their best lives by our side by providing them with the right nutrition. From our advanced 12-in-1 mineral complex to radically safe, savory ancestral treats, we bridge the gap between instinct and modern wellness.",
    image: "/image3.png",
    btnLabel: "Shop Dog",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="px-4 py-4 max-w-[1900px] mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[550px] md:h-[650px] lg:h-[750px] flex items-end"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat:"no-repeat",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Prev / Next Buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl hover:bg-black/60 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl hover:bg-black/60 transition"
        >
          ›
        </button>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6 md:p-8 max-w-5xl text-white">
          {/* Tag */}
          <span className="inline-block bg-orange-500/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-3">
            {slide.tag}
          </span>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight">
            {slide.title}
          </h1>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-2xl text-gray-200">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-4 sm:mt-6">
            <button className="bg-orange-500 text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base rounded-xl font-semibold tracking-wide uppercase hover:bg-orange-600 transition">
              {slide.btnLabel}
            </button>
            <button className="bg-orange-500 text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl hover:bg-orange-600 transition">
              <ArrowUpRight size={18} className="sm:hidden" />
              <ArrowUpRight size={22} className="hidden sm:block" />
            </button>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-4 right-5 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-orange-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}