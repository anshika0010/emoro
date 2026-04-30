"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    slug: "emoro-hydrate",
    image: "/product.png",
    title: "EMORO HYDRATE ADVANCED HYDRATION SYSTEM",
  },
  {
    id: 2,
    slug: "emoro-protein",
    image: "/product.png",
    title: "EMORO PROTEIN ADVANCED DOG SUPPLEMENT",
  },
  {
    id: 3,
    slug: "emoro-vitals",
    image: "/product.png",
    title: "EMORO VITALS DAILY MULTIVITAMIN SUPPORT",
  },
  {
    id: 4,
    slug: "emoro-skin",
    image: "/product.png",
    title: "EMORO SKIN & COAT HEALTH FORMULA",
  },
];

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const timeoutRef = useRef(null);

  const total = products.length;

  const prev = mod(current - 1, total);
  const next = mod(current + 1, total);
  const prevPrev = mod(current - 2, total);
  const nextNext = mod(current + 2, total);

  const go = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => mod(dir === "right" ? c + 1 : c - 1, total));
      setAnimating(false);
      setDirection(null);
    }, 450);
  };


  const slotConfigs = {
    //                  mobile                          desktop (md+)
    prevPrev: {
      left: "0%",      width: "12%",   zIndex: 0,  opacity: 0,   scale: "scale-75",        translateY: "translate-y-10",  translateX: "",
      mdWidth: "14%",
    },
    prev: {
      left: "4%",      width: "26%",   zIndex: 1,  opacity: 0.75, scale: "scale-[0.92]",   translateY: "translate-y-3",   translateX: "",
      mdLeft: "10%",   mdWidth: "28%",
    },
    center: {
      left: "50%",     width: "46%",   zIndex: 10, opacity: 1,   scale: "scale-[1.06]",    translateY: "translate-y-0",   translateX: "-translate-x-1/2",
      mdWidth: "35%",
    },
    next: {
      right: "4%",     width: "26%",   zIndex: 1,  opacity: 0.75, scale: "scale-[0.92]",   translateY: "translate-y-3",   translateX: "",
      mdRight: "10%",  mdWidth: "28%",
    },
    nextNext: {
      right: "0%",     width: "12%",   zIndex: 0,  opacity: 0,   scale: "scale-75",        translateY: "translate-y-10",  translateX: "",
      mdWidth: "14%",
    },
  };

  const getSlotStyle = (slot) => slotConfigs[slot];

  const getAnimatedSlot = (slot) => {
    if (!animating) return slot;
    if (direction === "right") {
      return { prevPrev: "prevPrev", prev: "prevPrev", center: "prev", next: "center", nextNext: "next" }[slot];
    }
    return { prevPrev: "prev", prev: "center", center: "next", next: "nextNext", nextNext: "nextNext" }[slot];
  };

  const renderProduct = (index, slot) => {
    const product = products[index];
    const animatedSlot = getAnimatedSlot(slot);
    const cfg = getSlotStyle(animatedSlot);

    // Build inline style — use mobile values; md overrides handled via CSS classes
    const style = {
      zIndex: cfg.zIndex,
      opacity: cfg.opacity,
      // Positional — apply mobile values as default
      ...(cfg.left !== undefined && !("right" in cfg) ? { left: cfg.left } : {}),
      ...("right" in cfg && cfg.right !== undefined && !("left" in cfg) ? { right: cfg.right } : {}),
      // Special: center has left
      ...(animatedSlot === "center" ? { left: cfg.left } : {}),
    };

    // Width is handled via a utility class pattern; we inject via style tag trick instead
    // Simpler: use CSS custom property per element
    return (
      <div
        key={`${product.id}-${slot}`}
        className={`
          absolute top-0
          transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${cfg.scale} ${cfg.translateY} ${cfg.translateX || ""}
          slider-slot-${animatedSlot}
        `}
        style={style}
      >
        <div className="relative w-full aspect-[3/3]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className={`
              object-contain transition-all duration-500
              drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]
              ${slot !== "center" ? "opacity-80 scale-[0.98]" : "hover:scale-[1.02]"}
            `}
          />
        </div>
      </div>
    );
  };

  const centerProduct = products[current];

  return (
    <>
      <style>{`
        /* Mobile */
        .slider-slot-prevPrev  { width: 12%; left: 0%; }
        .slider-slot-prev      { width: 26%; left: 4%; right: auto; }
        .slider-slot-center    { width: 46%; left: 50%; }
        .slider-slot-next      { width: 26%; right: 4%; left: auto; }
        .slider-slot-nextNext  { width: 12%; right: 0%; left: auto; }

        /* Tablet */
        @media (min-width: 640px) {
          .slider-slot-prevPrev  { width: 13%; left: 0%; }
          .slider-slot-prev      { width: 27%; left: 6%; }
          .slider-slot-center    { width: 40%; }
          .slider-slot-next      { width: 27%; right: 6%; }
          .slider-slot-nextNext  { width: 13%; right: 0%; }
        }

        /* Desktop (md) — matches original exactly */
        @media (min-width: 768px) {
          .slider-slot-prevPrev  { width: 14%; left: 0%; }
          .slider-slot-prev      { width: 28%; left: 10%; }
          .slider-slot-center    { width: 35%; left: 50%; }
          .slider-slot-next      { width: 28%; right: 10%; left: auto; }
          .slider-slot-nextNext  { width: 14%; right: 0%; left: auto; }
        }
      `}</style>

      <section className="bg-[#f0ebe3] max-w-[1900px] mx-auto overflow-hidden py-4">

        {/* TOP HEADING */}
        <h2 className="text-center text-[#ff4200] text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] akira-regular pt-4 leading-none px-4">
          Sustainable Dog Supplement Is{" "}
          <span className="text-black">Here</span>
        </h2>

        {/* SLIDER */}
        <div className="relative max-w-[1900px] mx-auto h-[155px] xs:h-[220px] sm:h-[400px] md:h-[560px] flex items-start justify-center mt-2">

          {/* PRODUCTS */}
          {renderProduct(prevPrev, "prevPrev")}
          {renderProduct(prev, "prev")}
          {renderProduct(current, "center")}
          {renderProduct(next, "next")}
          {renderProduct(nextNext, "nextNext")}

          {/* LEFT BUTTON */}
          <button
            onClick={() => go("left")}
            disabled={animating}
            className="
              absolute
              left-[50%]
              -translate-x-[calc(50%+60px)]
              sm:-translate-x-[calc(50%+80px)]
              md:left-[38%]
              md:translate-x-0
              top-[48%]
              sm:top-[50%]
              -translate-y-1/2
              z-20
              w-5 h-5
              sm:w-11 sm:h-11
              md:w-14 md:h-14
              rounded-full
              bg-[#ff4200]
              text-white
              flex items-center justify-center
              shadow-xl
              hover:scale-110
              hover:bg-[#d93a00]
              transition-all duration-300
              disabled:opacity-50
            "
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => go("right")}
            disabled={animating}
            className="
              absolute
              left-[55%]
              md:left-[50%]
              translate-x-[calc(0%+20px)]
              sm:translate-x-[calc(0%+30px)]
              md:left-auto
              md:right-[38%]
              md:translate-x-0
              top-[48%]
              sm:top-[50%]
              -translate-y-1/2
              z-20
              w-5 h-5
              sm:w-11 sm:h-11
              md:w-14 md:h-14
              rounded-full
              bg-[#ff4200]
              text-white
              flex items-center justify-center
              shadow-xl
              hover:scale-110
              hover:bg-[#d93a00]
              transition-all duration-300
              disabled:opacity-50
            "
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col items-center gap-4 md:gap-5 pb-8 md:pb-10 mt-4 md:mt-6 px-4">

          {/* PRODUCT TITLE */}
          <div className="text-center transition-all duration-500">
            <h3 className="text-[16px] sm:text-[20px] md:text-[34px] font-black uppercase akira-regular tracking-wide text-[#1f1f1f] max-w-[320px] sm:max-w-[600px] md:max-w-[850px] leading-tight">
              {centerProduct.title}
            </h3>
            <div className="w-16 md:w-24 h-[4px] md:h-[5px] bg-[#ff4200] mx-auto mt-2 md:mt-3 rounded-full"></div>
          </div>

          {/* BUTTON */}
          <Link
            href={`/product/${centerProduct.slug}`}
            className="
              inline-flex items-center gap-2 md:gap-3
              bg-[#ff4200] text-white font-black uppercase
              tracking-[0.12em] md:tracking-[0.15em]
              text-xs sm:text-sm md:text-base
              px-7 sm:px-9 md:px-10
              py-2.5 md:py-3
              rounded-xl shadow-lg
              hover:scale-105 hover:bg-[#d93a00]
              transition-all duration-300
            "
          >
            VIEW PRODUCT
            <span className="text-base md:text-xl">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}