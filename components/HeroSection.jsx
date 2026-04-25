import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="px-4 py-4 max-w-[1900px] mx-auto">
      <div
        className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[550px] md:h-[650px] lg:h-[750px] flex items-end"
        style={{
          backgroundImage: "url('/image1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6 md:p-8 max-w-3xl text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight">
            Emoro is fueling richer lives together
          </h1>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-2xl text-gray-200">
        Helping the pets we love live their best lives by our side by providing them with the right nutrition. From our advanced 12-in-1 mineral complex to radically safe, savory ancestral treats, we bridge the gap between instinct and modern wellness.
          </p>

          {/* Button */}
          <div className="flex items-center gap-2 mt-4 sm:mt-6 akira-regular">
            {/* Main Button */}
            <button className="bg-orange-500 text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-sm sm:text-base rounded-xl font-semibold tracking-wide uppercase hover:bg-orange-600 transition">
              Shop Dog
            </button>

            {/* Icon Box */}
            <button className="bg-orange-500 text-white px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-xl hover:bg-orange-600 transition">
              <ArrowUpRight size={18} className="sm:hidden" />
              <ArrowUpRight size={22} className="hidden sm:block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}