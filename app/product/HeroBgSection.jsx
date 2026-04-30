import Image from "next/image";

export default function HeroBgSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[800px] rounded-2xl overflow-hidden my-2">

      {/* Background Image */}
      <Image
        src="/productbanner.jpg" 
        alt="Dog Product"
        fill
        priority
        className="object-cover"
      />

    </section>
  );
}