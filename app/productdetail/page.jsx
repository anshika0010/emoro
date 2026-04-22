"use client";

import { useState } from "react";
import Image from "next/image";
import RelatedProductsFaq from "@/components/Relatedproductsfaq";

const productImages = [
  "/product.png",
  "/product.png",
  "/product.png",
  "/product.png",
];

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-[#f07800]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600 font-medium">
        {rating} ({count})
      </span>
    </div>
  );
}

const sections = [
  {
    id: "overview",
    title: "OVERVIEW",
    content:
      "Emoro Hydrate is an advanced hydration formula specially designed to support your dog's daily wellness and active lifestyle. Powered with a balanced blend of essential electrolytes, it helps restore hydration quickly and efficiently.",
  },
  {
    id: "ingredients",
    title: "INGREDIENTS",
    content:
      "Sodium Chloride, Potassium Citrate, Dextrose, Magnesium Sulfate, Calcium Lactate, Natural Flavors, Silicon Dioxide. No artificial preservatives or colors.",
  },
  {
    id: "supplement-facts",
    title: "SUPPLEMENT FACTS",
    content:
      "Serving Size: 1 Scoop (5g) | Servings Per Container: 30 | Sodium: 200mg | Potassium: 150mg | Magnesium: 20mg | Calcium: 50mg | Dextrose: 3g",
  },
];

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));
  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  return (
    <>
      <div className="min-h-screen bg-[#f0ebe3] flex items-center justify-center px-4 py-4 ">
        <div className="bg-[#f0ebe3] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT — Thumbnail Strip + Main Image */}
            <div className="flex gap-5 flex-1">
              {/* Thumbnails */}
              <div className="flex flex-col gap-2">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-45 h-45 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? "border-[#f07800] shadow-md"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Product view ${i + 1}`}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[580px] relative shadow-sm">
                <Image
                  src={productImages[selectedImage]}
                  alt="Emoro Hydrate"
                  fill
                  className="object-contain h-full"
                />
              </div>
            </div>

            {/* RIGHT — Product Info */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Badge */}
              <span className="inline-block self-start bg-[#f5c842] text-[#5a3e00] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                New Product
              </span>

              {/* Title */}
              <h1 className="text-4xl font-bold uppercase text-gray-900 leading-snug">
                Emoro Hydrate Advanced Hydration System For Dogs
              </h1>

              {/* Rating */}
              <StarRating rating={4.8} count={93} />

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  RS 699.99
                </span>
                <span className="text-base text-gray-400 line-through">
                  RS 1,299.99
                </span>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 -mt-3">
                [ Excluding GST 18% Off ]
              </p>

              {/* Description */}
              <p className="text-md text-gray-600 leading-relaxed">
                Emoro Hydrate is an advanced hydration formula specially
                designed to support your dog&apos;s daily wellness and active
                lifestyle. Powered with a balanced blend of essential
                electrolytes like sodium chloride and potassium citrate, along
                with energy-boosting dextrose, it helps restore hydration
                quickly and efficiently.
              </p>

              {/* Servings Tag */}
              <div>
                <button className="bg-[#ff4200] text-white text-lg font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:bg-[#d96900] transition-colors">
                  Servings 30
                </button>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Quantity
                </p>
                <div className="flex items-center gap-0">
                  <button
                    onClick={handleDecrease}
                    className="w-9 h-9 border border-gray-300 rounded-l-md text-gray-700 font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-12 h-9 border-t border-b border-gray-300 flex items-center justify-center text-sm font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="w-9 h-9 border border-gray-300 rounded-r-md text-gray-700 font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 mt-2">
                <button className="flex-1 border-2 border-[#ff4200] text-[#ff4200] font-bold uppercase text-sm tracking-widest py-3 rounded-lg hover:bg-[#fff3eb] transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#ff4200] text-white font-bold uppercase text-md tracking-widest py-3 rounded-lg hover:bg-[#d96900] transition-colors">
                  Buy Now
                </button>
                <button
                  onClick={() => setWishlisted((w) => !w)}
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${wishlisted ? "text-red-500 fill-red-500" : "text-gray-400"}`}
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
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#ede8e0] flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-3">
          {sections.map(({ id, title, content }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className="bg-[#e5dfd6] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full flex items-center justify-between px-9 py-7 text-left"
                >
                  <span className="text-2xl akira-regular font-bold uppercase tracking-widest text-black">
                    {title}
                  </span>
                  <span
                    className={`w-7 h-7 rounded border border-[#b0a898] flex items-center justify-center text-[#2e2a25] font-light text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-[#5a5248] leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RelatedProductsFaq />
    </>
  );
}
