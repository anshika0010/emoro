"use client";

import { useState } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
        <path d="M12 2C8 2 5 7 5 12c0 3.87 3.13 7 7 7s7-3.13 7-7c0-5-3-10-7-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
    number: "01",
    title: "ADVANCED\nHYDRATION SOLUTIONS",
    description:
      "We offer scientifically formulated hydration products that help replenish lost fluids, restore electrolyte balance, and keep your dog active and healthy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
    number: "02",
    title: "ENERGY & RECOVERY\nSUPPORT",
    description:
      "Our solutions are designed to support faster recovery after exercise, heat exposure, or stress—helping your dog regain energy and stay refreshed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
        <path d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
      </svg>
    ),
    number: "03",
    title: "DAILY WELLNESS\nSUPPORT",
    description:
      "Emoro products are suitable for everyday use, ensuring consistent hydration and overall well-being for dogs of all breeds and activity levels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    number: "04",
    title: "PREVENTIVE\nPET CARE",
    description:
      "We help dog owners stay proactive about their pet's health with easy-to-use supplements designed to prevent dehydration before it becomes a problem.",
  },
];

export default function OurServices() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const maxIndex = services.length - visible;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const visibleServices = services.slice(current, current + visible);

  return (
    <div className="bg-[#f0ebe3] px-5 py-8 font-sans select-none">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
          OUR{" "}
          <span className="bg-[#f04e1a] text-white px-3 py-1 rounded-sm text-2xl font-black uppercase">
            SERVICES
          </span>
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 bg-[#f04e1a] text-white flex items-center justify-center rounded-sm disabled:opacity-40 hover:bg-[#d94315] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="w-9 h-9 bg-[#f04e1a] text-white flex items-center justify-center rounded-sm disabled:opacity-40 hover:bg-[#d94315] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {visibleServices.map((service, index) => (
          <div
            key={current + index}
            className="bg-[#e4ddd5] rounded-xl p-5 flex flex-col justify-between relative overflow-hidden min-h-[280px]"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-[11.5px] font-black uppercase tracking-widest text-gray-900 leading-snug mb-3 whitespace-pre-line">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[12.5px] leading-relaxed text-gray-700 flex-1">
              {service.description}
            </p>

            {/* Large Number */}
            <span className="absolute bottom-2 right-4 text-6xl font-black text-[#ccc5bc] leading-none select-none">
              {service.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}