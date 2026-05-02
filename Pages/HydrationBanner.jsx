import Image from "next/image";

export default function HydrationBanner() {
  return (
    <div className="w-full bg-[#f5f5f5] flex justify-center px-4 md:px-3">
      <div
        className="w-full max-w-[1900px] rounded-2xl overflow-hidden relative px-6 sm:px-10 md:px-16 py-10 sm:py-14 md:py-16 flex items-center bg-cover bg-center h-[380px] sm:h-[480px] md:h-[600px]"
        style={{
          backgroundImage: "url('/image4.jpg')",
        }}
      >
        {/* Left Content */}
        <div className="max-w-[600px] text-white z-10 ">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-tight uppercase mb-4 md:mb-6">
            Advanced Hydration <br /> For Dogs
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[15px] leading-relaxed mb-6 md:mb-8 text-white/90 max-w-[90%] md:max-w-full">
            Keep your dog active and full of energy with a scientifically
            crafted hydration formula designed to combat dehydration
            effectively. Whether it's after playtime, rigorous travel, or
            recovery, this advanced 30-serving blend helps quickly replenish
            lost fluids, delivering balanced electrolytes and vital energy
            support right when they need it most.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="bg-[#ff5a1f] hover:bg-[#ff4a0f] transition px-5 md:px-6 py-2.5 md:py-3 rounded-md font-semibold text-xs md:text-sm">
              BUY NOW
            </button>

            <button className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] bg-[#ff5a1f] flex items-center justify-center rounded-md hover:bg-[#ff4a0f] transition">
              <span className="text-white text-base md:text-lg">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
