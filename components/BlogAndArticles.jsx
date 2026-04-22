"use client";

import { useState } from "react";

const categories = ["ALL", "HYDRATION", "DOG HEALTH", "DAILY CARE", "ENERGY"];

const articles = [
  {
    category: "HYDRATION",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    title: "INSIGHTS FOR BETTER PET CARE",
    description:
      "Hot weather can quickly lead to dehydration in dogs, especially during outdoor activities. Discover practical and effective ways to keep your dog cool, hydrated, and protected during high temperatures and long summer days.",
  },
  {
    category: "DOG HEALTH",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80",
    title: "SIGNS YOUR DOG NEEDS MORE WATER",
    description:
      "Recognizing early signs of dehydration in dogs can save their lives. Learn what to watch for and how to ensure your pet stays properly hydrated every day.",
  },
  {
    category: "DAILY CARE",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    title: "DAILY ROUTINES FOR A HEALTHIER DOG",
    description:
      "Small habits make a big difference. Explore daily care routines that support your dog's physical health, mental well-being, and overall happiness.",
  },
  {
    category: "ENERGY",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "BOOST YOUR DOG'S ENERGY NATURALLY",
    description:
      "From nutrition to exercise, discover science-backed strategies to naturally boost your dog's energy levels and keep them active throughout the day.",
  },
];

export default function BlogAndArticles() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat =
      activeCategory === "ALL" || a.category === activeCategory;
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    
    <section className="bg-[#f0ebe3] px-4 sm:px-6 md:px-10 py-8 font-sans">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-5 flex flex-wrap items-center gap-2">
        BLOG AND
        <span className="bg-[#f04e1a] text-white px-3 py-1 rounded-sm font-black text-2xl sm:text-3xl">
          ARTICLES
        </span>
      </h2>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-150 ${
              activeCategory === cat
                ? "bg-[#f04e1a] text-white border-[#f04e1a]"
                : "bg-transparent text-gray-700 border-gray-300 hover:border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-[#e8e3da] rounded-sm px-4 py-3 mb-8 border border-[#d6cfc6]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-gray-400 flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="SEARCH..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-[12px] font-semibold uppercase tracking-widest text-gray-500 placeholder-gray-400 outline-none w-full"
        />
      </div>

   
    </section>
  );
}