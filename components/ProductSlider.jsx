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

  const getSlotStyle = (slot) => {
    const base =
      "absolute top-0 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

    const configs = {
      prevPrev: {
        left: "0%",
        width: "14%",
        zIndex: 0,
        opacity: 0,
        scale: "scale-75",
        translateY: "translate-y-10",
      },

      prev: {
        left: "10%",
        width: "28%",
        zIndex: 1,
        opacity: 0.75,
        scale: "scale-[0.92]",
        translateY: "translate-y-3",
      },

      center: {
        left: "50%",
        width: "35%",
        zIndex: 10,
        opacity: 1,
        scale: "scale-[1.06]",
        translateY: "translate-y-0",
        translateX: "-translate-x-1/2",
      },

      next: {
        right: "10%",
        width: "28%",
        zIndex: 1,
        opacity: 0.75,
        scale: "scale-[0.92]",
        translateY: "translate-y-3",
      },

      nextNext: {
        right: "0%",
        width: "14%",
        zIndex: 0,
        opacity: 0,
        scale: "scale-75",
        translateY: "translate-y-10",
      },
    };

    return { base, config: configs[slot] };
  };

  const getAnimatedSlot = (slot) => {
    if (!animating) return slot;

    if (direction === "right") {
      const map = {
        prevPrev: "prevPrev",
        prev: "prevPrev",
        center: "prev",
        next: "center",
        nextNext: "next",
      };

      return map[slot];
    }

    const map = {
      prevPrev: "prev",
      prev: "center",
      center: "next",
      next: "nextNext",
      nextNext: "nextNext",
    };

    return map[slot];
  };

  const renderProduct = (index, slot) => {
    const product = products[index];

    const animatedSlot = getAnimatedSlot(slot);

    const { base, config } = getSlotStyle(animatedSlot);

    const style = {
      width: config.width,
      zIndex: config.zIndex,
      opacity: config.opacity,
      ...(config.left !== undefined ? { left: config.left } : {}),
      ...(config.right !== undefined ? { right: config.right } : {}),
    };

    return (
      <div
        key={`${product.id}-${slot}`}
        className={`${base} ${config.scale} ${config.translateY} ${
          config.translateX || ""
        }`}
        style={style}
      >
        <div className="relative w-full aspect-[3/3]">
          
         

          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className={`
              object-contain
              transition-all
              duration-500
              drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]
              ${
                slot !== "center"
                  ? "opacity-80 scale-[0.98]"
                  : "hover:scale-[1.02]"
              }
            `}
          />
        </div>
      </div>
    );
  };

  const centerProduct = products[current];

  return (
    <section className="bg-[#f0ebe3] max-w-[1900px] mx-auto overflow-hidden py-4">
      
      {/* TOP HEADING */}
        <h2 className="text-center text-[#ff4200] text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] akira-regular pt-4  leading-none">
          Sustainable Dog Supplement Is{" "}
          <span className="text-black">Here</span>
        </h2>
     

      {/* SLIDER */}
      <div className="relative max-w-[1900px] mx-auto h-[460px] md:h-[560px] flex items-start justify-center mt-2">

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
            left-[38%]
            top-[50%]
            -translate-y-1/2
            z-20
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-full
            bg-[#ff4200]
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-110
            hover:bg-[#d93a00]
            transition-all
            duration-300
            disabled:opacity-50
          "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => go("right")}
          disabled={animating}
          className="
            absolute
            right-[38%]
            top-[50%]
            -translate-y-1/2
            z-20
            w-12
            h-12
            md:w-14
            md:h-14
            rounded-full
            bg-[#ff4200]
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-110
            hover:bg-[#d93a00]
            transition-all
            duration-300
            disabled:opacity-50
          "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* PRODUCT INFO */}
      <div className="flex flex-col items-center gap-5 pb-10 mt-6">

        {/* PRODUCT TITLE */}
        <div className="text-center transition-all duration-500">
          <h3 className="text-[22px] md:text-[34px] font-black uppercase akira-regular tracking-wide text-[#1f1f1f] max-w-[850px] leading-tight">
            {centerProduct.title}
          </h3>

          <div className="w-24 h-[5px] bg-[#ff4200] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* BUTTON */}
        <Link
          href={`/product/${centerProduct.slug}`}
          className="
            inline-flex
            items-center
            gap-3
            bg-[#ff4200]
            text-white
            font-black
            uppercase
            tracking-[0.15em]
            text-sm
            md:text-base
            px-10
            py-3
            rounded-xl
            shadow-lg
            hover:scale-105
            hover:bg-[#d93a00]
            transition-all
            duration-300
          "
        >
          VIEW PRODUCT
          <span className="text-xl">→</span>
        </Link>
      </div>
    </section>
  );
}