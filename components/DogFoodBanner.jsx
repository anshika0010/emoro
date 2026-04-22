import Image from "next/image";

export default function DogFoodBanner() {
  return (
    <div className="bg-[#f5f5f5] py-6 flex justify-center">
      <div className="w-[1600px] bg-[#ff5a1f] rounded-xl px-10 py-8 relative overflow-hidden shadow-md h-[320px]">
        
        {/* Content */}
        <div className="max-w-[520px]">
          <h5 className="text-white text-4xl tracking-widest uppercase mb-3 akira-regular">
            Dog Foods
          </h5>

          <p className="text-white text-[22px] leading-snug">
            Nutritious cat food crafted for taste, balanced diet, and your cat’s daily health needs.
          </p>
        </div>

        {/* Dog Image */}
        <div className="absolute right-24 bottom-0">
          <Image
            src="/image3.png"
            alt="Dog"
            width={260}
            height={320}
            className="object-contain"
          />
        </div>

        {/* Arrow Button */}
        <div className="absolute bottom-4 right-4">
          <div className="w-[80px] h-[60px] rounded-xl border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
            <span className="text-white text-xl">↗</span>
          </div>
        </div>

      </div>
    </div>
  );
}