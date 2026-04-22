"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "From Tail-Wagging Happiness To Purr-Filled Comfort",
    price: "700RS",
    originalPrice: "900RS",
    image: "/product.png",
  },
  {
    id: 2,
    title: "From Tail-Wagging Happiness To Purr-Filled Comfort",
    price: "700RS",
    originalPrice: "900RS",
    image: "/product.png",
  },
  {
    id: 3,
    title: "From Tail-Wagging Happiness To Purr-Filled Comfort",
    price: "700RS",
    originalPrice: "900RS",
    image: "/product.png",
  },
  {
    id: 4,
    title: "From Tail-Wagging Happiness To Purr-Filled Comfort",
    price: "700RS",
    originalPrice: "900RS",
    image: "/product.png",
  },
  {
    id: 5,
    title: "From Tail-Wagging Happiness To Purr-Filled Comfort",
    price: "700RS",
    originalPrice: "900RS",
    image: "/product.png",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is Emoro Hydrate used for?",
    answer:
      "Emoro Hydrate is used to support your dog's daily hydration needs. It replenishes essential electrolytes lost during exercise, heat, or illness, helping your dog stay healthy and active.",
  },
  {
    id: 2,
    question: "Can I give Emoro Hydrate daily to my dog?",
    answer:
      "Yes, Emoro Hydrate is formulated for daily use. It is safe for regular consumption and helps maintain optimal hydration levels throughout the day.",
  },
  {
    id: 3,
    question: "Is Emoro Hydrate suitable for all dog breeds?",
    answer:
      "Emoro Hydrate is suitable for all breeds and sizes. However, we recommend consulting your veterinarian for puppies under 3 months or dogs with specific health conditions.",
  },
  {
    id: 4,
    question: "When should I give Emoro Hydrate to my dog?",
    answer:
      "You can give it before or after physical activity, during hot weather, or whenever your dog seems lethargic or dehydrated. Mix one scoop in your dog's water bowl.",
  },
  {
    id: 5,
    question: "How does Emoro Hydrate work?",
    answer:
      "Emoro Hydrate uses a blend of electrolytes including sodium chloride, potassium citrate, and dextrose to rapidly restore fluid balance and energy levels in your dog's body.",
  },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex-shrink-0 w-[155px] md:w-[400px]">
      <div className="relative w-full h-56 bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-1"
        />
      </div>
      <div className="p-2">
        <h3
          className="text-[15px] font-bold uppercase leading-tight text-gray-900 mb-1 "
    
        >
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-md font-black text-gray-900 p-2">{product.price}</span>
          <span className="text-[15px] text-gray-400 line-through">{product.originalPrice}</span>
        </div>
        <button className="w-full border border-[#ff4200] text-[#ff4200] text-[16px] font-bold uppercase tracking-wider py-4 rounded mb-1.5 hover:bg-orange-50 transition-colors">
          Add to Cart
        </button>
        <button className="w-full bg-[#ff4200] text-white text-[16px] font-bold uppercase tracking-wider py-4 rounded hover:bg-[#d96900] transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-[#e8e2d9] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-6 text-left"
      >
        <span
          className="text-[20px] font-black uppercase  akira-regular text-[#2e2a25]"
         
        >
          {faq.question}
        </span>
        <span
          className={`w-12 h-12 rounded border border-[#b0a898] flex-shrink-0 flex items-center justify-center text-[#2e2a25] text-3xl font-light transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-[#5a5248] leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function RelatedProductsFaq() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <>

      <div
        className="min-h-screen bg-[#ede8e0] px-4 py-10 max-w-full mx-auto"

      >

        {/* ── Related Products ── */}
        <div className="mb-10 px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-4xl font-black uppercase"
           
            >
              <span className="text-gray-900">RELATED </span>
              <span className="bg-[#ff4200] text-white px-2 py-0.5 inline-block">PRODUCTS</span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 bg-[#f07800] text-white rounded flex items-center justify-center hover:bg-[#d96900] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 bg-[#ff4200] text-white rounded flex items-center justify-center hover:bg-[#d96900] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="px-10 py-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <h2
              className="text-5xl font-black uppercase p-2"
      
            >
              <span className="text-gray-900">PRODUCT </span>
              <span className="bg-[#ff4200] text-white px-2 py-0.5 inline-block">RELATED FAQ</span>
            </h2>
            <div className="w-10 h-10 bg-[#ff4200] rounded-lg flex items-center justify-center rotate-12">
              <span className="text-white text-lg -rotate-12">?</span>
            </div>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}