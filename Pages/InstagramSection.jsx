import Image from "next/image";

export default function InstagramSection() {
  return (
    <div className="max-w-[1900px] mx-auto bg-[#f3ede7] py-10 md:py-16 flex flex-col items-center px-4 md:px-6">

      {/* Heading */}
      <div className="text-center max-w-[800px]">
        <h2 className="text-[#ff4d00] text-[22px] sm:text-[28px] md:text-[38px] font-extrabold uppercase leading-tight">
           "Follow Us <br /> For Daily Dog Happiness" 
        </h2>

        <p className="mt-3 md:mt-4 text-gray-600 text-[12px] sm:text-[13px] md:text-[14px]">
          Daily dose of happy tails, healthy meals, and wagging moments 🐕
          <br />
          Premium nutrition for dogs who deserve the best ❤️
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full ">
        {[
          "/insta1.png",
          "/insta2.png",
          "/insta3.png",
          "/insta4.png",
        ].map((src, i) => (
          <div
            key={i}
            className="bg-[#e6ddd5] rounded-xl overflow-hidden flex items-center justify-center h-[160px] sm:h-[220px] md:h-[400px]"
          >
            <Image
              src={src}
              alt="dog"
              width={260}
              height={300}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8 md:mt-10 flex items-center gap-3">
        <button className="bg-[#ff4d00] text-white px-5 sm:px-7 md:px-8 py-3 md:py-4 rounded-md font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide akira-regular">
          EXPLORE OUR INSTAGRAM
        </button>

        <button className="bg-[#ff4d00] w-[38px] h-[38px] md:w-[45px] md:h-[45px] rounded-md flex items-center justify-center">
          <span className="text-white text-base md:text-lg">↗</span>
        </button>
      </div>

    </div>
  );
}