"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const products = [
  {
    id: 1,
    name: "Be Positive Bag",
    tagline: "Let It Go",
    price: "₹799",
    color: "#F5A623",
    accent: "#00BFFF",
    ropeColor: "#E0E0E0",
    bg: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-400/60",
    textLines: ["Be", "Positive."],
    sub: "Let it go ~",
    textColor: "white",
    badge: "Motivational",
  },
  {
    id: 2,
    name: "The Batman Bag",
    tagline: "Dark Knight Edition",
    price: "₹1,299",
    color: "#1a0a0a",
    accent: "#C0392B",
    ropeColor: "#FFFFFF",
    bg: "from-zinc-900 via-red-950 to-black",
    shadow: "shadow-red-900/80",
    textLines: ["THE", "BATMAN"],
    sub: "Dark Knight Edition",
    textColor: "#C0392B",
    badge: "Limited Edition",
  },
  {
    id: 3,
    name: "Kawaii Bunny Bag",
    tagline: "Cute & Dreamy",
    price: "₹999",
    color: "#FF4DAA",
    accent: "#7ED957",
    ropeColor: "#FFFFFF",
    bg: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/60",
    textLines: ["Kawaii", "Bunny 🐰"],
    sub: "Cute & Dreamy",
    textColor: "white",
    badge: "Fan Favourite",
  },
  {
    id: 4,
    name: "Ocean Vibes Bag",
    tagline: "Feel the Wave",
    price: "₹849",
    color: "#0077B6",
    accent: "#00F5D4",
    ropeColor: "#E0E0E0",
    bg: "from-blue-600 to-cyan-500",
    shadow: "shadow-cyan-400/60",
    textLines: ["Ocean", "Vibes 🌊"],
    sub: "Feel the Wave",
    textColor: "white",
    badge: "New Arrival",
  },
  {
    id: 5,
    name: "Forest Soul Bag",
    tagline: "Into the Wild",
    price: "₹899",
    color: "#1B4332",
    accent: "#95D5B2",
    ropeColor: "#D4A373",
    bg: "from-green-900 to-emerald-700",
    shadow: "shadow-emerald-600/60",
    textLines: ["Forest", "Soul 🌿"],
    sub: "Into the Wild",
    textColor: "#95D5B2",
    badge: "Eco Pick",
  },
];

// SVG Drawstring Bag Component
function BagSVG({ product, scale = 1 }) {
  const isCenter = scale === 1;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 260 * scale, height: 340 * scale }}
    >
      <svg
        viewBox="0 0 260 340"
        width={260 * scale}
        height={340 * scale}
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: isCenter ? `drop-shadow(0 30px 60px ${product.color}80)` : "none" }}
      >
        <defs>
          <linearGradient id={`bagGrad${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            {product.id === 2 ? (
              <>
                <stop offset="0%" stopColor="#1a0a0a" />
                <stop offset="50%" stopColor="#3d0000" />
                <stop offset="100%" stopColor="#0a0000" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor={product.color} stopOpacity="1" />
                <stop offset="100%" stopColor={product.color} stopOpacity="0.75" />
              </>
            )}
          </linearGradient>
          <linearGradient id={`shine${product.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.08" />
            <stop offset="40%" stopColor="white" stopOpacity="0.18" />
            <stop offset="100%" stopColor="white" stopOpacity="0.02" />
          </linearGradient>
          <clipPath id={`bagClip${product.id}`}>
            <path d="M40 90 Q30 100 25 180 Q20 260 30 310 Q40 330 130 333 Q220 330 230 310 Q240 260 235 180 Q230 100 220 90 Z" />
          </clipPath>
        </defs>

        {/* Bag body */}
        <path
          d="M40 90 Q30 100 25 180 Q20 260 30 310 Q40 330 130 333 Q220 330 230 310 Q240 260 235 180 Q230 100 220 90 Z"
          fill={`url(#bagGrad${product.id})`}
        />
        {/* Shine overlay */}
        <path
          d="M40 90 Q30 100 25 180 Q20 260 30 310 Q40 330 130 333 Q220 330 230 310 Q240 260 235 180 Q230 100 220 90 Z"
          fill={`url(#shine${product.id})`}
        />

        {/* Top cuff */}
        <path
          d="M35 88 Q130 70 225 88 Q228 95 225 102 Q130 120 35 102 Z"
          fill={product.accent}
          opacity="0.95"
        />

        {/* Rope eyelets */}
        {[60, 100, 160, 200].map((x, i) => (
          <circle key={i} cx={x} cy={95} r={5} fill={product.accent} stroke="white" strokeWidth="1.5" />
        ))}

        {/* Drawstring ropes */}
        <path
          d="M60 95 Q80 130 100 160 Q115 185 120 220 L115 310"
          stroke={product.ropeColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M200 95 Q180 130 160 160 Q145 185 140 220 L145 310"
          stroke={product.ropeColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Rope knots */}
        <circle cx="117" cy="315" r="7" fill={product.ropeColor} opacity="0.9" />
        <circle cx="143" cy="315" r="7" fill={product.ropeColor} opacity="0.9" />

        {/* Text on bag */}
        <g clipPath={`url(#bagClip${product.id})`}>
          {product.textLines.map((line, i) => (
            <text
              key={i}
              x="130"
              y={190 + i * 52}
              textAnchor="middle"
              fontSize={product.id === 2 ? "36" : "32"}
              fontWeight="800"
              fill={product.textColor}
              fontFamily="Georgia, serif"
              letterSpacing="1"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              {line}
            </text>
          ))}
          {product.id !== 2 && (
            <text
              x="130"
              y="295"
              textAnchor="middle"
              fontSize="14"
              fill={product.textColor}
              fontFamily="Georgia, serif"
              opacity="0.7"
              fontStyle="italic"
            >
              {product.sub}
            </text>
          )}
        </g>

        {/* Bottom watermark */}
        <text
          x="130"
          y="328"
          textAnchor="middle"
          fontSize="7"
          fill="white"
          opacity="0.3"
          letterSpacing="3"
          fontFamily="monospace"
        >
          ALL RIGHTS RESERVED
        </text>
      </svg>
    </div>
  );
}

export default function ClothBagsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef(null);
  const touchStartX = useRef(null);

  const total = products.length;

  const goTo = useCallback(
    (idx, dir = 1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setActiveIndex((idx + total) % total);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, total]
  );

  const next = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  // Auto-slide
  useEffect(() => {
    autoRef.current = setInterval(next, 3200);
    return () => clearInterval(autoRef.current);
  }, [next]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 3200);
  }, [next]);

  const handleNext = () => { next(); resetAuto(); };
  const handlePrev = () => { prev(); resetAuto(); };

  // Touch swipe
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); }
    touchStartX.current = null;
  };

  const getSlot = (offset) => (activeIndex + offset + total) % total;

  const current = products[activeIndex];

  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans select-none overflow-hidden">
      {/* Top announcement bar */}
      <div className="w-full bg-orange-500 text-white text-center py-2 text-sm tracking-wide font-medium">
        Morem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <button className="flex items-center gap-2 text-orange-500 font-bold text-lg cursor-pointer hover:scale-105 transition-transform">
          <span className="text-2xl">☰</span> Menu
        </button>
        <h1
          className="text-6xl md:text-7xl font-black text-orange-500 tracking-tight"
          style={{
            fontFamily: "'Georgia', serif",
            textShadow: "4px 4px 0px #c2410c, 6px 6px 0px rgba(194,65,12,0.3)",
            letterSpacing: "-1px",
          }}
        >
          ClothBags
        </h1>
        <button
          className="text-orange-500 font-bold text-lg cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setCart((c) => c)}
        >
          Cart{" "}
          <span className="text-zinc-700 font-normal">
            ({String(cart).padStart(2, "0")})
          </span>
        </button>
      </nav>

      {/* Carousel Stage */}
      <div
        className="relative flex items-end justify-center mt-6 pb-4"
        style={{ height: 440 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT bag */}
        <div
          className="absolute transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            left: "50%",
            transform: "translateX(-420px) translateY(60px) scale(0.72)",
            filter: "blur(3px) brightness(0.75)",
            zIndex: 1,
            opacity: 0.8,
          }}
          onClick={handlePrev}
        >
          <BagSVG product={products[getSlot(-1)]} scale={0.85} />
        </div>

        {/* CENTER bag */}
        <div
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            left: "50%",
            transform: `translateX(-50%) translateY(${isAnimating ? direction * -12 : 0}px) scale(1)`,
            filter: "none",
            zIndex: 10,
            opacity: 1,
          }}
        >
          <BagSVG product={current} scale={1.1} />
        </div>

        {/* RIGHT bag */}
        <div
          className="absolute transition-all duration-500 ease-in-out cursor-pointer"
          style={{
            left: "50%",
            transform: "translateX(160px) translateY(60px) scale(0.72)",
            filter: "blur(3px) brightness(0.75)",
            zIndex: 1,
            opacity: 0.8,
          }}
          onClick={handleNext}
        >
          <BagSVG product={products[getSlot(1)]} scale={0.85} />
        </div>

        {/* Nav arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-orange-500 text-xl font-black hover:scale-110 hover:bg-orange-500 hover:text-white transition-all duration-200"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-orange-500 text-xl font-black hover:scale-110 hover:bg-orange-500 hover:text-white transition-all duration-200"
        >
          ›
        </button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center mt-2 px-4 transition-all duration-300">
        <div className="flex items-center gap-3 mb-1">
          <span
            className="text-xs font-bold tracking-widest px-3 py-1 rounded-full text-white"
            style={{ background: current.color }}
          >
            {current.badge}
          </span>
        </div>
        <h2 className="text-2xl font-black text-zinc-800 tracking-tight">{current.name}</h2>
        <p className="text-zinc-400 text-sm mt-1 italic">{current.tagline}</p>
        <p className="text-3xl font-black text-orange-500 mt-2">{current.price}</p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i, i > activeIndex ? 1 : -1); resetAuto(); }}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? 28 : 8,
              height: 8,
              background: i === activeIndex ? current.color : "#D1D5DB",
            }}
          />
        ))}
      </div>

      {/* Add to Cart */}
      <div className="flex justify-center mt-6 pb-10">
        <button
          onClick={() => setCart((c) => c + 1)}
          className="relative overflow-hidden px-14 py-4 rounded-full text-white font-black text-lg tracking-wide shadow-xl transition-all duration-200 active:scale-95 hover:shadow-2xl hover:-translate-y-1"
          style={{
            background: `linear-gradient(135deg, ${current.color}, ${current.accent || current.color})`,
            boxShadow: `0 12px 40px ${current.color}60`,
          }}
        >
          <span className="relative z-10">Add to cart</span>
          <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-full" />
        </button>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-4">
        <span className="text-xs text-zinc-300 tracking-widest animate-bounce">↓ SCROLL OR SWIPE</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}