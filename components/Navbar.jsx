"use client";
import { Search, ShoppingCart, User, Menu, X, Heart, LogOut } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const debouncedQuery = useDebounce(query, 400);
  const { user, logout } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when popup opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
      setSearched(false);
    }
  }, [searchOpen]);

  // Fetch results on debounced query
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/search/${encodeURIComponent(debouncedQuery)}`, {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        setResults(data.status === 200 ? data.data : []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
        setSearched(true);
      }
    };
    fetchResults();
  }, [debouncedQuery]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Search Popup Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-[#f0ebe3] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#d8cfc6]">
              <Search size={20} className="text-gray-500 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-gray-900 font-semibold text-lg outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
              {query && (
                <button onClick={() => { setQuery(""); setResults([]); setSearched(false); }} className="text-gray-400 hover:text-gray-700 transition-colors">
                  <X size={18} />
                </button>
              )}
              <button onClick={() => setSearchOpen(false)} className="ml-1 bg-gray-200 hover:bg-gray-300 p-1.5 rounded-lg transition-colors">
                <X size={16} className="text-gray-600" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {loading && (
                <div className="flex items-center justify-center py-10 gap-3 text-gray-500">
                  <div className="w-5 h-5 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-medium">Searching...</span>
                </div>
              )}
              {!loading && searched && results.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Search size={36} className="mx-auto mb-3 opacity-30" />
                  <p className="font-semibold">No products found for "{query}"</p>
                  <p className="text-sm mt-1 text-gray-400">Try a different keyword</p>
                </div>
              )}
              {!loading && !searched && !query && (
                <div className="text-center py-12 text-gray-400">
                  <Search size={36} className="mx-auto mb-3 opacity-20" />
                  <p className="text-sm">Start typing to search products</p>
                </div>
              )}
              {!loading && results.length > 0 && (
                <div className="p-3 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2 pt-1">
                    {results.length} result{results.length !== 1 ? "s" : ""} found
                  </p>
                  {results.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`} onClick={() => setSearchOpen(false)}>
                      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#e5dfd6] transition-colors cursor-pointer group">
                        <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                          {product.images?.featured_image ? (
                            <Image src={product.images.featured_image} alt={product.name} fill className="object-contain p-1" unoptimized />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <Search size={16} className="text-gray-300" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm uppercase text-gray-900 leading-tight truncate group-hover:text-orange-600 transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                            {product.brand?.name} · {product.category?.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-black text-gray-900">₹{product.sell_price}</span>
                            {product.mrp && <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>}
                            {product.discount > 0 && (
                              <span className="text-xs font-bold text-green-600">
                                {product.discount_type === "fixed" ? `₹${product.discount} OFF` : `${product.discount}% OFF`}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded flex-shrink-0 ${product.stock_status === "in_stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}>
                          {product.stock_status === "in_stock" ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#d8cfc6] z-50 flex flex-col px-8 pt-24 pb-10 gap-2 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {[
          { label: "HOME", href: "/" },
          { label: "ABOUT", href: "/about" },
          { label: "PRODUCT", href: "/product" },
          { label: "BLOG", href: "/blog" },
        ].map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-bold text-lg py-4 border-b border-black/10 tracking-wider hover:text-orange-600 hover:pl-2 transition-all">
            {item.label}
          </Link>
        ))}

        <div className="mt-7 flex flex-col gap-3">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold tracking-wider hover:bg-orange-600 transition-colors">
              CONTACT
            </button>
          </Link>

          {/* Mobile: show name + logout if logged in */}
          {user ? (
            <div className="flex flex-col gap-2 mt-1">
              <Link href="/userprofile/overview" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 bg-orange-500 px-4 py-3 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 font-black text-sm uppercase">
                    {user.name?.charAt(0)}
                  </div>
                  <span className="text-white font-bold text-sm uppercase tracking-wider truncate">
                    {user.name}
                  </span>
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              {[
                { href: "#", icon: <Search size={18} />, action: () => { setIsOpen(false); setSearchOpen(true); } },
                { href: "/cart", icon: <ShoppingCart size={18} /> },
                { href: "/wishlist", icon: <Heart size={18} /> },
                { href: "/login", icon: <User size={18} /> },
              ].map((item, i) =>
                item.action ? (
                  <button key={i} onClick={item.action} className="flex-1 bg-orange-500 py-3 rounded-lg text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                    {item.icon}
                  </button>
                ) : (
                  <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="flex-1">
                    <div className="bg-orange-500 py-3 rounded-lg text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                      {item.icon}
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full sticky top-0 z-50 bg-[#d8cfc6] rounded-2xl px-6 lg:px-18 py-4 lg:py-6 text-xl flex items-center justify-between akira-regular relative">

        {/* Left: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10 font-semibold text-gray-800 text-base">
          <Link href="/" className="text-orange-600 font-bold">HOME</Link>
          <Link href="/about" className="hover:text-orange-600 transition-colors">ABOUT</Link>
          <Link href="/product" className="hover:text-orange-600 transition-colors">PRODUCT</Link>
          <Link href="/blog" className="hover:text-orange-600 transition-colors">BLOG</Link>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="h-10 lg:h-14 object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Right: Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <button className="bg-gray-100 px-12 py-3 rounded-xl font-semibold text-orange-600 hover:bg-gray-200 transition-colors">
              CONTACT
            </button>
          </Link>
          <div className="flex items-center gap-3">
            {/* Search */}
            <button onClick={() => setSearchOpen(true)}>
              <div className="bg-orange-500 p-3 rounded-lg text-white cursor-pointer hover:bg-gray-400 transition-colors">
                <Search size={18} />
              </div>
            </button>

            {/* Cart */}
            <Link href="/cart">
              <div className="bg-orange-500 p-3 rounded-lg text-white cursor-pointer hover:bg-gray-400 transition-colors">
                <ShoppingCart size={18} />
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <div className="bg-orange-500 p-3 rounded-lg text-white cursor-pointer hover:bg-gray-400 transition-colors">
                <Heart size={18} />
              </div>
            </Link>

            {/* User: first letter + dropdown OR login icon */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-black text-sm uppercase flex items-center justify-center transition-colors"
                >
                  {user.name?.charAt(0)}
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-13 mt-1 w-48 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                    {/* User info */}
                    <div className="px-4 py-3 bg-orange-50 border-b border-gray-100">
                      <p className="text-xs font-black uppercase tracking-widest text-orange-500 truncate">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate mt-0.5">{user.email}</p>
                    </div>
                    <Link
                      href="/userprofile/overview"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <User size={14} />
                      My Profile
                    </Link>
                    <Link
                      href="/userprofile/track-order"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <ShoppingCart size={14} />
                      My Orders
                    </Link>
                    <div className="border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={14} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <div className="bg-orange-500 p-3 rounded-lg text-white cursor-pointer hover:bg-gray-400 transition-colors">
                  <User size={18} />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden ml-auto bg-orange-500 text-white p-2.5 rounded-lg hover:bg-orange-600 transition-colors z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </>
  );
}