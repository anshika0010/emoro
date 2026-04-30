"use client";

import { useState } from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: false,
  },
  {
    id: 2,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: true,
  },
  {
    id: 3,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: false,
  },
  {
    id: 4,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: false,
  },
  {
    id: 5,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: true,
  },
  {
    id: 6,
    category: "HYDRATIONS",
    title: "Why Hydration Is Essential For Your Dog's Health",
    excerpt:
      "Expert insights on dog hydration, wellness, and everyday care to help your pet stay healthy, active, and happy.",
    image: "",
    featured: false,
  },
];

function ArticleCard({ article }) {
  const { category, title, excerpt, image, featured } = article;

  if (featured) {
    return (
      <div className="rounded-lg overflow-hidden shadow-md bg-[#f07800] flex flex-col">
        <div className="relative w-full h-44">
          <Image
            src="/dog1.png"
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="p-3 flex flex-col gap-1">
          <span className="text-white text-[10px] font-extrabold uppercase tracking-widest">
            {category}
          </span>
          <h3
            className="text-white font-black uppercase text-[12px] leading-tight tracking-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-orange-100 text-[10px] leading-snug mt-0.5">
            {excerpt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col">
      <div className="relative w-full h-44">
        <Image
          src="/dog1.png"
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <span className="text-[#f07800] text-[10px] font-extrabold uppercase tracking-widest">
          {category}
        </span>
        <h3
          className="text-gray-900 font-black uppercase text-[12px] leading-tight tracking-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-gray-500 text-[10px] leading-snug mt-0.5">
          {excerpt}
        </p>
      </div>
    </div>
  );
}

function Pagination({ current, total, onChange }) {
  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`w-7 h-7 rounded text-xs font-bold transition-colors ${
            current === page
              ? "bg-[#f07800] text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(current + 1, total))}
        className="w-7 h-7 rounded text-xs font-bold text-gray-400 hover:bg-gray-100 transition-colors"
      >
        »
      </button>
    </div>
  );
}

export default function InsightsTrends() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <section className="max-w-[1600px] mx-auto px-4 py-8 bg-[#f5f5f5] min-h-screen">
        {/* Section Label */}
        <p className="text-[#f07800] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#f07800] inline-block" />
          Blog and Articles
        </p>

        {/* Section Heading */}
        <h2
          className="text-2xl font-black uppercase mb-6 leading-none"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <span className="text-gray-900">LATEST </span>
          <span className="bg-[#f07800] text-white px-2 py-0.5 inline-block">
            INSIGHTS AND TRENDS
          </span>
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-3 gap-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination current={currentPage} total={3} onChange={setCurrentPage} />
      </section>
    </>
  );
}
