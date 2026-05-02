import Image from "next/image";

export default function CTABanner() {
  return (
    <div className="w-full bg-[#f5f5f5] py-10 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1900px] bg-[#ff6a00] rounded-3xl px-6 sm:px-10 md:px-12 py-10 md:py-12 relative overflow-hidden md:overflow-visible flex items-center min-h-[260px] md:min-h-0">
        {/* Left Content */}
        <div className="max-w-[800px] text-white z-10 w-full md:w-auto">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-extrabold leading-tight uppercase mb-4 md:mb-6">
            Ready to experience <br />
            Emoro exceptional <br />
            care ?
          </h2>

          <p className="text-[13px] sm:text-[15px] md:text-[20px] text-white/90 mb-5 md:mb-6 max-w-[60%] md:max-w-full">
            contact us today and discover a world of happiness and health for
            your pet.
          </p>

          <button className="bg-black text-white px-5 md:px-6 py-2.5 md:py-3 rounded-md font-semibold text-sm md:text-md akira-regular">
            CALL US NOW
          </button>
        </div>

        {/* Desktop: original absolute overlapping image */}
        <div className="hidden md:block absolute right-10 -top-[200px]">
          <Image
            src="/image5.png"
            alt="Dog"
            width={320}
            height={300}
            priority
            className="object-contain drop-shadow-2xl w-auto h-auto"
          />
        </div>

        {/* Mobile: right-side decorative image inside card */}
        <div className="md:hidden absolute right-0 bottom-0 h-full flex items-end pointer-events-none">
          <Image
            src="/image5.png"
            alt="Dog"
            width={420}
            height={500}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
