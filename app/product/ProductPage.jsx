"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "ALL",
  "ELECTROLYTES",
  "FAT BURNER",
  "HAIR & SKIN",
  "HAIR & SKIN",
  "PROTEIN & SUPPLEMENT",
  "MULTI VITAMINS",
  "BRAIN HEALTH & DEMENTIA",
  "SHAMPOO",
  "TOOTHPASTE",
  "SKIN & COAT",
];

const filters = [
  { label: "SORT BY", open: false },
  { label: "PRODUCT TYPE", open: false },
  { label: "LIFE STAGE", open: false },
  { label: "FLAVOUR", open: false },
  { label: "INGREDIENTS", open: false },
  { label: "BREED SIZE", open: false },
  { label: "SPECIAL FORMULA", open: false },
  { label: "FOOD FORM", open: false },
];

const products = Array(6).fill({
  name: "FROM TAIL-WAGGING HAPPINESS TO PURR-FILLED COMFORT",
  weight: "700RS",
  image: null,
});

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Product Image */}
      <div className="bg-[#f0ebe3] rounded-lg flex items-center justify-center h-[400px] overflow-hidden">
  
  <Image
          src="/product.png" // 👈 put your image in /public/images
          alt="Product"
          width={600}
          height={600}
          className="object-contain h-auto"
        />

      </div>

      {/* Product Info */}
      <div className="space-y-1 px-4">
        <h3 className="text-[20px] font-bold text-gray-800 leading-tight uppercase tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-orange-500 font-bold text-md">{product.weight}</span>
          <span className="text-gray-400 text-md line-through">₹999</span>
        </div>
      </div>

      {/* Buttons */}
      <button className="w-full border-2 border-orange-500 text-orange-500 font-bold text-md py-4 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200 uppercase tracking-widest">
        Add to Cart
      </button>
      <button className="w-full bg-orange-500 text-white font-bold text-md py-4 rounded hover:bg-orange-600 transition-colors duration-200 uppercase tracking-widest">
        Buy Now
      </button>
    </div>
  );
}

function FilterItem({ label }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-center justify-between py-2 border-b border-gray-900 text-[15px] font-semibold text-gray-900 uppercase tracking-widest hover:text-orange-500 transition-colors"
    >
      <span>{label}</span>
      <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
        ⌄
      </span>
    </button>
  );
}

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const row1 = categories.slice(0, 4);
  const row2 = categories.slice(4, 8);
  const row3 = categories.slice(8);

  return (
    <div className="min-h-screen bg-[#f5f0e8] font-sans">
      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4 relative">
        {/* Decorative tags */}
        <div className="absolute top-6 left-8 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center rotate-12 shadow-md">
          <span className="text-white text-xs">🏷</span>
        </div>
        <div className="absolute top-8 right-10 w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center -rotate-12 shadow-md">
          <span className="text-white text-xs">🏷</span>
        </div>

        <p className="text-xl uppercase tracking-widest text-orange-500 mb-1">
          Explore our all
        </p>
        <h1
          className="text-5xl md:text-8xl text-orange-500 uppercase leading-none"

        >
          PRODUCT
        </h1>
        <p className="text-xs text-gray-500 mt-3 max-w-3xl mx-auto leading-relaxed">
          Explore our range of advanced hydration solutions specially designed
          for dogs of all sizes and activity levels.  Explore our range of advanced hydration solutions specially designed
          for dogs of all sizes and activity levels.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-col items-center gap-2 px-4 pb-6">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-2">
          {row1.map((cat, i) => (
                      <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-md font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow"
                  : "bg-white text-gray-700 px-9 py-3 border-orange-500 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-2">
          {row2.map((cat, i) => (
                      <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-md font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow"
                  : "bg-white text-gray-700 px-9 py-3 border-orange-500 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Row 3 */}
        <div className="flex flex-wrap justify-center gap-2">
          {row3.map((cat, i) => (
                 <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-md font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500 shadow"
                  : "bg-white text-gray-700 px-9 py-3 border-orange-500 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-0 max-w-[1600px] mx-auto px-4 pb-16">
        {/* Sidebar */}
        <aside className="w-44 shrink-0 pr-4">
          <div className="bg-[#ede8e0] rounded-t-md px-3 py-2 mb-2">
            <span className="text-[20px] font-bold uppercase tracking-widest text-gray-700">
              Products
            </span>
          </div>
          <div className="space-y-6 text-md">
            {filters.map((f, i) => (
              <FilterItem key={i} label={f.label} />
            ))}
          </div>
        </aside>

        {/* Product Area */}
        <div className="flex-1">
          {/* Search */}
          <div className="mb-5">
            <div className="flex items-center bg-white border border-gray-200 rounded-md px-5 py-5 shadow-md">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-md outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-3 gap-5">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button className="w-12 h-12 rounded bg-orange-500 text-white text-md font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-12 h-12 rounded bg-orange-500 text-white text-md font-bold flex items-center justify-center">
              2
            </button>
            <button className="w-12 h-12 rounded bg-orange-500 text-white text-md font-bold flex items-center justify-center">
              3
            </button>
            <button className="w-12 h-12 rounded bg-orange-500 text-white text-md font-bold flex items-center justify-center">
              ››
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}