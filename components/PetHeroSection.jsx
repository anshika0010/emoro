export default function PetHeroSection() {
  return (
    <div className="w-full bg-[#f5f5f5] py-10 md:py-20 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1900px] bg-[#d9cfc6] rounded-xl relative overflow-visible">

        <div className="flex flex-col md:flex-row items-center relative min-h-[340px] md:min-h-[500px]">

          {/* Left Image */}
          {/* Desktop: absolute overlapping layout (original) */}
          <div className="hidden md:block w-1/2 relative">
            <img
              src="/image2.png"
              alt="Pet Love"
              className="absolute left-0 -top-[380px] h-[600px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Mobile: normal flow image */}
          <div className="block md:hidden w-full flex justify-center pt-8 px-6">
            <img
              src="/image2.png"
              alt="Pet Love"
              className="h-[250px] sm:h-[280px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-10 py-8 md:py-12 md:ml-auto text-center md:text-left">
            <h2 className="text-[20px] sm:text-[28px] md:text-[30px] font-extrabold text-[#ff3d00] leading-tight uppercase">
              Because They're More Than <br className="hidden sm:block" /> Just Pets 🐾
            </h2>

            <p className="mt-4 md:mt-6 text-gray-700 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-[500px] mx-auto md:mx-0">
             From tail-wagging happiness to purr-filled comfort, we bring you premium-quality products
crafted to support your pet's health and happiness. Whether it's nutritious meals, tasty
treats, or daily essentials everything is designed with care, so your pets feel their absolute
best.

            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="relative bottom-0 left-0 w-full bg-[#ff3d00] py-3 md:py-4 overflow-hidden mt-6 md:mt-0 rounded-b-xl">
          <div className="flex whitespace-nowrap marquee">
            {Array(10).fill("EMORO").map((item, index) => (
              <span
                key={`a-${index}`}
                className="mx-8 md:mx-12 text-white font-bold akira-regular tracking-wider text-base md:text-xl"
              >
                {item}
              </span>
            ))}
            {Array(10).fill("EMORO").map((item, index) => (
              <span
                key={`b-${index}`}
                className="mx-8 md:mx-12 text-white font-bold akira-regular tracking-wider text-base md:text-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}