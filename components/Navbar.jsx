"use client";
import { Search, ShoppingCart, User, Menu, X , Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#d8cfc6] z-50 flex flex-col px-8 pt-24 pb-10 gap-2 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[
          { label: "HOME", href: "/" },
          { label: "ABOUT", href: "/about" },
          { label: "PRODUCT", href: "/product" },
          { label: "BLOG", href: "/blog" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-gray-800 font-bold text-lg py-4 border-b border-black/10 tracking-wider hover:text-orange-600 hover:pl-2 transition-all"
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-7 flex flex-col gap-3">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold tracking-wider hover:bg-orange-600 transition-colors">
              CONTACT
            </button>
          </Link>
          <div className="flex gap-2">
            {[
              { href: "/search", icon: <Search size={18} /> },
              { href: "/cart", icon: <ShoppingCart size={18} /> },
                 { href: "/wishlist", icon: <Heart size={18} /> },
              { href: "/login", icon: <User size={18} /> },
            ].map((item, i) => (
              <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="flex-1">
                <div className="bg-orange-500 py-3 rounded-lg text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full sticky top-0 z-50  bg-[#d8cfc6] rounded-2xl px-6 lg:px-18 py-4 lg:py-6 text-xl flex items-center justify-between akira-regular relative">

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
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 lg:h-14 object-contain cursor-pointer"
            />
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
            {[
              { href: "/search", icon: <Search size={18} /> },
              { href: "/cart", icon: <ShoppingCart size={18} /> },
               { href: "/wishlist", icon: <Heart size={18} /> },
              { href: "/login", icon: <User size={18} /> },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="bg-orange-500 p-3 rounded-lg text-white cursor-pointer hover:bg-gray-400 transition-colors">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Mobile Hamburger */}
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