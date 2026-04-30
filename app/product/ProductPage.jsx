"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const filters = [
  { label: "SORT BY" },
  { label: "PRODUCT TYPE" },
  { label: "LIFE STAGE" },
  { label: "FLAVOUR" },
  { label: "INGREDIENTS" },
  { label: "BREED SIZE" },
  { label: "SPECIAL FORMULA" },
  { label: "FOOD FORM" },
];

function ProductCard({ product }) {
  const imageUrl = product.images?.featured_image || "/product.png";
  const [wishlisted, setWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isOutOfStock = product.stock_status === "out_of_stock";

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <div className="bg-[#f0ebe3] rounded-lg flex items-center justify-center h-[400px] overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="object-contain h-auto"
          unoptimized
        />

        {/* Wishlist Button — appears on hover, stays if wishlisted */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            hovered || wishlisted
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              wishlisted ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1 px-4">
        <h3 className="text-[20px] font-bold text-gray-800 leading-tight uppercase tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-bold text-md">
            ₹{product.sell_price}
          </span>
          {product.mrp && (
            <span className="text-gray-400 text-md line-through">
              ₹{product.mrp}
            </span>
          )}
          {isOutOfStock && (
            <span className="text-xs text-red-500 font-semibold ml-1">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <button
        disabled={isOutOfStock}
        className="w-full border-2 border-orange-500 text-orange-500 font-bold text-md py-4 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
      <Link
        href={isOutOfStock ? "#" : `/product/${product.slug}`}
        className={`w-full bg-orange-500 text-white font-bold text-md py-4 rounded hover:bg-orange-600 transition-colors duration-200 uppercase tracking-widest text-center block ${
          isOutOfStock ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
        }`}
      >
        Buy Now
      </Link>
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
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/category`, {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        if (data.status === 200) {
          setCategories(data.data);
        }
      } catch (err) {
        console.error("Category fetch error:", err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      setError("");
      try {
        const params = new URLSearchParams();
        params.append("page", currentPage);
        if (activeCategoryId) params.append("category_id", activeCategoryId);
        if (search.trim()) params.append("search", search.trim());

        const res = await fetch(`${API_BASE_URL}/products?${params.toString()}`, {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        if (data.status === 200) {
          setProducts(data.data);
          setPagination(data.pagination);
        } else {
          setError("Failed to load products.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, [activeCategoryId, currentPage, search]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.name.toUpperCase());
    setActiveCategoryId(cat.id);
    setCurrentPage(1);
  };

  const handleAllClick = () => {
    setActiveCategory("ALL");
    setActiveCategoryId(null);
    setCurrentPage(1);
  };

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search]);

  const totalPages = pagination?.last_page || 1;

  return (
    <div className="min-h-screen bg-[#f5f0e8] font-sans">
      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4 relative">
        <div className="absolute top-6 left-8 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center rotate-12 shadow-md">
          <span className="text-white text-xs">🏷</span>
        </div>
        <div className="absolute top-8 right-10 w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center -rotate-12 shadow-md">
          <span className="text-white text-xs">🏷</span>
        </div>

        <p className="text-xl uppercase tracking-widest text-orange-500 mb-1">
          Explore our all
        </p>
        <h1 className="text-5xl md:text-8xl text-orange-500 uppercase leading-none">
          PRODUCT
        </h1>
        <p className="text-xs text-gray-500 mt-3 max-w-3xl mx-auto leading-relaxed">
          Explore our range of advanced hydration solutions specially designed
          for dogs of all sizes and activity levels. Explore our range of
          advanced hydration solutions specially designed for dogs of all sizes
          and activity levels.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 px-4 pb-6">
        <button
          onClick={handleAllClick}
          className={`px-6 py-3 rounded-xl text-md font-bold uppercase tracking-wider border transition-all duration-200 ${
            activeCategory === "ALL"
              ? "bg-orange-500 text-white border-orange-500 shadow"
              : "bg-white text-gray-700 border-orange-500 hover:border-orange-400 hover:text-orange-500"
          }`}
        >
          ALL
        </button>

        {loadingCategories ? (
          <span className="text-sm text-gray-400 self-center">Loading...</span>
        ) : (
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-3 rounded-xl text-md font-bold uppercase tracking-wider border transition-all duration-200 ${
                activeCategory === cat.name.toUpperCase()
                  ? "bg-orange-500 text-white border-orange-500 shadow"
                  : "bg-white text-gray-700 border-orange-500 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat.name}
            </button>
          ))
        )}
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

          {/* Error */}
          {error && (
            <div className="mb-4 text-red-500 text-sm font-semibold">{error}</div>
          )}

          {/* Products Grid */}
          {loadingProducts ? (
            <div className="grid grid-cols-3 gap-5">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col gap-2 animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-[400px]" />
                  <div className="bg-gray-200 h-5 rounded w-3/4 mx-4" />
                  <div className="bg-gray-200 h-4 rounded w-1/4 mx-4" />
                  <div className="bg-gray-200 h-12 rounded" />
                  <div className="bg-gray-200 h-12 rounded" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-lg font-semibold uppercase tracking-widest">
              No products found.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 rounded font-bold text-md flex items-center justify-center transition-colors ${
                    currentPage === page
                      ? "bg-orange-600 text-white"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  {page}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="w-12 h-12 rounded bg-orange-500 text-white font-bold text-md flex items-center justify-center hover:bg-orange-600"
                >
                  ››
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}