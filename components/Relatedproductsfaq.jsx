"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

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

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative w-full h-66 bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-1"
        />
      </div>
      <div className="p-2">
        <h3 className="text-[15px] font-bold uppercase leading-tight text-gray-900 mb-1">
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

export default function RelatedProductsFaq() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#ede8e0] px-4 py-10">
      <div className="mb-10 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-black uppercase">
            <span className="text-gray-900">RELATED </span>
            <span className="bg-[#ff4200] text-white px-2 py-0.5 inline-block">PRODUCTS</span>
          </h2>
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="w-9 h-9 bg-[#f07800] text-white rounded flex items-center justify-center hover:bg-[#d96900] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="w-9 h-9 bg-[#ff4200] text-white rounded flex items-center justify-center hover:bg-[#d96900] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            480:  { slidesPerView: 2, spaceBetween: 12 },
            768:  { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 16 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}