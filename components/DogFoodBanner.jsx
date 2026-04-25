'use client';
import Image from "next/image";
import { useState } from "react";


  const products = [
  {
    id: 1,
    category: " ANCESTRAL TREATS",
    description:
      "Pure, unadulterated rewards. Featuring Emoro Ocean Protein (real dried mackerel packed with Omega fatty acids) and Emoro Ogbones—the ultimate safe, 100% digestible chicken bone alternative. ",
    image:
      "/dog2.png",
    alt: "Dog with shampoo foam on head",
  },
  {
    id: 2,
    category: "TARGETED CARE",
    description:
      "Tailored solutions for unique needs. From Emoro Pawform for high-performance working dogs to Emoro Lipoburn (a stimulant-free weight management aid) and our soothing Calming formulas for separation anxiety.",
    image:
      "/dog2.png",
    alt: "French bulldog holding toothbrush",
  },
];
export default function DogFoodBanner() {
  const [hovered, setHovered] = useState(null);

  return (
    <>  
    <div className="bg-[#f0ebe3] max-w-[1900px] mx-auto">
     <div
      className=" flex items-center justify-center "

    >
      <div className="flex gap-40 flex-wrap justify-between py-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-2xl flex flex-col justify-between"
            style={{
              backgroundColor: "#e8e0d5",
              width: "820px",
              minHeight: "420px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Top text content */}
            <div className="px-5 pt-5 pb-2 z-10 relative">
              <h2
                className="font-black text-[#e05a2b] text-4xl tracking-widest uppercase mb-3 akira-regular"
            
              >
                {product.category}
              </h2>
              <p
                className="leading-snug text-gray-800 text-xl max-w-full"
            
              >
                {product.description}
              </p>
            </div>
 
            {/* Dog image — positioned to bottom-right, slightly cropped */}
            <div
              className="relative w-full flex justify-end items-end"
              style={{ height: "420px" }}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="object-cover object-top transition-transform duration-500"
                style={{
                  width: "85%",
                  height: "150%",
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
                  backgroundColor: "#e05a2b",
                  width: "36px",
                  height: "36px",
                  boxShadow:
                    hovered === product.id
                      ? "0 4px 16px rgba(224,90,43,0.5)"
                      : "0 2px 8px rgba(224,90,43,0.3)",
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


     <div className=" py-4 flex justify-center">
      <div className="w-[1850px] bg-[#ff5a1f] rounded-xl px-12 py-8 relative overflow-hidden shadow-md h-[320px]">
        
        {/* Content */}
        <div className="max-w-[720px]">
          <h5 className="text-white text-4xl tracking-widest uppercase mb-3 akira-regular">
           12-IN-1 SUPPLEMENTS
          </h5>

          <p className="text-white text-[22px] leading-snug">
            Fortify their cellular health. Our flagship Emoro 12-in-1
formula delivers a complete, 30-serving multivitamin and mineral matrix designed to fill
microscopic nutritional gaps in your dog's daily diet.
          </p>
           <div className="absolute bottom-4 right-4">
          <div className="w-[80px] h-[60px] rounded-xl border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-white text-xl">↗</span>
          </div>
        </div>

        </div>

        {/* Dog Image */}
        <div className="absolute right-29 bottom-0">
          <Image
            src="/image3.png"
            alt="Dog"
            width={340}
            height={250}
            className="object-contain h-auto"
          />
        </div>

        {/* Arrow Button */}
        {/* <div className="absolute bottom-4 right-4">
          <div className="w-[80px] h-[60px] rounded-xl border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-white text-xl">↗</span>
          </div>
        </div> */}

      </div>
    </div>
   </div>
    </>
  );
}