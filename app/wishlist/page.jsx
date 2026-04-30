"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

const initialItems = [
  {
    id: 1,
    name: "EMORO HYDRATE",
    image: "https://placehold.co/80x80/e8ddd7/555?text=Product",
    price: 699.0,
    originalPrice: 1299.99,
    currency: "RS",
    inStock: true,
  },
];

export default function Wishlist() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <div className="min-h-screen bg-[#f0ebe4] px-4 py-10">
      <div className="max-w-8xl mx-auto w-full">

        {/* ── Heading ── */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
            Your Wishlist
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            There are {items.length} product{items.length !== 1 ? "s" : ""} in thes list
          </p>
        </div>

        {/* ── Table card ── */}
        <div className="bg-[#ece6de] rounded-2xl overflow-hidden">

          {/* Table header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center px-6 py-4 border-b border-[#ddd5c8]">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-700">
              Product
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-700">
              Price
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-700">
              Stock Status
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-700">
              Action
            </span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-700 pr-1">
              Remove
            </span>
          </div>

          {/* Rows */}
          {items.length === 0 ? (
            <div className="px-6 py-14 text-center text-sm text-gray-400">
              Your wishlist is empty.
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.id}
                className={`grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center px-6 py-5 gap-4 ${
                  idx !== items.length - 1 ? "border-b border-[#ddd5c8]" : ""
                }`}
              >
                {/* Product */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-20 h-20 rounded-xl bg-[#ddd5c8] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-gray-800 truncate">
                    {item.name}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm font-bold text-gray-900">
                    {item.currency}{item.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {item.currency}{item.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Stock status */}
                <div>
                  {item.inStock ? (
                    <span className="text-xs font-bold tracking-widest uppercase text-green-500">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs font-bold tracking-widest uppercase text-red-400">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Action */}
                <div>
                  <button
                    disabled={!item.inStock}
                    className="bg-gray-900 hover:bg-gray-700 active:bg-black disabled:opacity-40 disabled:cursor-not-allowed text-white text-[10px] font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Remove */}
                <div className="flex justify-center pr-1">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                    aria-label="Remove item"
                  >
                    <Trash2 size={17} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}