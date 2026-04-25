import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="max-w-[1850px] mx-auto rounded-xl">

      {/* TOP SECTION */}
      <div
        className="w-full relative px-12 pt-10 md:pt-16 pb-6 bg-[#e9e1d8] bg-cover bg-center overflow-visible rounded-t-xl"
        style={{ backgroundImage: "url('/boneimage.png')" }}
      >
        <div className="">
          <h3 className="text-[#ff4d00] text-[20px] sm:text-[28px] md:text-[39px] uppercase font-semibold">
            Who We Are
          </h3>

          <h1 className="text-[#ff4d00] text-[60px] sm:text-[90px] md:text-[140px] font-extrabold leading-none">
            EMORO
          </h1>
        </div>

        {/* Floating Image — hidden on mobile to avoid layout issues */}
        <img
          src="/boneimage2.png"
          alt="icon"
          className="hidden md:block absolute right-150 top-10 w-[100px] animate-float"
        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-[#ff5a1f] px-6 sm:px-10 md:px-12 py-8 md:py-6 relative overflow-visible rounded-b-xl">
        <div className=" flex flex-col md:flex-row items-start gap-6 md:gap-0">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 text-white">
            <p className="text-[14px] sm:text-[15px] leading-relaxed mb-6">
We are a team of passionate pet lovers dedicated to creating holistic wellness products that combine real, high-quality ingredients with scientifically balanced nutrition. Every formula is crafted with care to support your pet's health, happiness, and vitality because we believe every dog and cat deserves a life full of energy, love, and joy.            </p>

            <p className="text-[14px] sm:text-[15px] leading-relaxed">
At the heart of our brand lies a commitment to uncompromised quality, transparency, and care. We source only the finest ingredients to craft everything from our deeply nourishing multivitamin matrices to our splinter-free, safe chicken chews. We don't just feed pets; we fortify them.            </p>
          </div>

          {/* RIGHT IMAGE */}
        <Image
  src="/image6.png"
  alt="Dog"
  width={500}
  height={690}
  className="object-contain w-auto h-auto -mt-30"
/>

          {/* Mobile: normal flow image */}
          <div className="block md:hidden w-full flex justify-center">
          <Image
  src="/image6.png"
  alt="Dog"
  width={300}
  height={380}
  className="object-contain mx-auto w-auto h-auto"
/>
          </div>

        </div>
      </div>

    </div>
  );
}