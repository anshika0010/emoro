'use client';
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    category: "ANCESTRAL TREATS",
    description:
      "Pure, unadulterated rewards. Featuring Emoro Ocean Protein (real dried mackerel packed with Omega fatty acids) and Emoro Ogbones—the ultimate safe, 100% digestible chicken bone alternative.",
    image: "/dog2.png",
    alt: "Dog with shampoo foam on head",
  },
  {
    id: 2,
    category: "TARGETED CARE",
    description:
      "Tailored solutions for unique needs. From Emoro Pawform for high-performance working dogs to Emoro Lipoburn (a stimulant-free weight management aid) and our soothing Calming formulas for separation anxiety.",
    image: "/dog2.png",
    alt: "French bulldog holding toothbrush",
  },
  {
    id: 3,
    category: "12-IN-1 SUPPLEMENTS",
    description:
      "Fortify their cellular health. Our flagship Emoro 12-in-1 formula delivers a complete, 30-serving multivitamin and mineral matrix designed to fill microscopic nutritional gaps in your dog's daily diet.",
    image: "/image3.png",
    alt: "French bulldog holding toothbrush",
  },
];

export default function DogFoodBanner() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="bg-[#f0ebe3] max-w-[1900px] mx-auto">

        {/* Heading */}
        <div className="text-center py-8 sm:py-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff4200] mb-3 sm:mb-4">
            Our Categories
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our thoughtfully curated range of products designed to support your dog's health,
            happiness, and overall well-being. From nutrition to targeted care, we've got it all covered.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-2xl flex flex-col justify-between w-full"
                style={{
                  backgroundColor: "#e8e0d5",
                  minHeight: "380px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top text content */}
                <div className="px-4 sm:px-5 pt-5 pb-2 z-10 relative">
                  <h2 className="font-black text-[#ff4200] text-xl sm:text-2xl tracking-widest uppercase mb-3 akira-regular">
                    {product.category}
                  </h2>
                  <p className="leading-snug text-gray-800 text-base sm:text-lg max-w-full">
                    {product.description}
                  </p>
                </div>

                {/* Dog image */}
                <div
                  className="relative w-full flex justify-end items-end"
                  style={{ height: "300px" }}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    style={{
                      width: "45%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "top center",
                      borderRadius: "12px 0 0 0",
                      transform: hovered === product.id ? "scale(1.04)" : "scale(1)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>

                {/* Arrow button bottom-left */}
                <div className="absolute bottom-4 left-4 z-20">
                  <button
                    className="flex items-center justify-center rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: "#ff4200",
                      width: "86px",
                      height: "36px",
                      boxShadow:
                        hovered === product.id
                          ? "0 4px 16px #ff4200"
                          : "0 2px 20px #ff4200",
                      transform: hovered === product.id ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.2s ease",
                    }}
                    aria-label={`View ${product.category}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 13L13 3M13 3H6M13 3V10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}