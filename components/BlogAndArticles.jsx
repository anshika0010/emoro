"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
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
export default function BlogAndArticles() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [loadingCats, setLoadingCats] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);


  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/blog-category`, {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        console.log("Blog Category API Response:", data); // ← console mein dekho
        
        // Common response structures handle kiye hain
        const list =
          data.data ||
          data.categories ||
          data.result ||
          data.blog_categories ||
          [];
        setCategories(list);
      } catch (err) {
        console.error("Category fetch error:", err);
      } finally {
        setLoadingCats(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
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
        {/* ALL button — hamesha rahega */}
        <button
          onClick={() => setActiveCategory("ALL")}
          className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-150 ${
            activeCategory === "ALL"
              ? "bg-[#f04e1a] text-white border-[#f04e1a]"
              : "bg-transparent text-gray-700 border-gray-300 hover:border-gray-500"
          }`}
        >
          ALL
        </button>

        {/* API categories */}
        {loadingCats ? (
          // Skeleton loading
          Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="w-24 h-8 bg-gray-200 rounded-sm animate-pulse"
            />
          ))
        ) : (
          categories.map((cat) => {
            // name field — adjust karo agar alag ho
            const label = cat.name || cat.title || cat.category_name || "";
            const id = cat.id || cat.slug || label;
            return (
              <button
                key={id}
                onClick={() => setActiveCategory(label.toUpperCase())}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-sm border transition-colors duration-150 ${
                  activeCategory === label.toUpperCase()
                    ? "bg-[#f04e1a] text-white border-[#f04e1a]"
                    : "bg-transparent text-gray-700 border-gray-300 hover:border-gray-500"
                }`}
              >
                {label}
              </button>
            );
          })
        )}
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
    </section> <section className="w-full bg-[#dcd6cf] py-3 px-6 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
     <div className="w-full md:w-1/2">
  <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
    <Image
      src="/blog1.png"
      alt="Pet Care"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      priority
    />
  </div>
</div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          
          <h2 className="text-2xl md:text-3xl font-bold uppercase underline underline-offset-4 mb-4">
            INSIGHTS FOR BETTER <br /> PET CARE
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            Hot weather can quickly lead to dehydration in dogs, especially
            during outdoor activities. Discover practical and effective ways to
            keep your dog cool, hydrated, and protected during high temperatures
            and long summer days.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
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