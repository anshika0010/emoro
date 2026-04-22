// OurAchievement.jsx — Next.js + Tailwind CSS component
// Matches the "Our Achievement" section from the uploaded image

const achievements = [
  {
    title: "TRUSTED BY PET OWNERS",
    description:
      "Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness",
  },
  {
    title: "REAL IMPACT ON PET HEALTH",
    description:
      "Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness",
  },
  {
    title: "GROWING COMMUNITY",
    description:
      "We are building a strong and passionate community of pet lovers who believe in better care and smarter wellness solutions.Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness",
  },
  {
    title: "DESIGNED FOR EVERYDAY USE",
    description:
      "We've created solutions that seamlessly fit into daily routines—making pet care easier, more effective, and stress-free for owners Emoro is proudly becoming a trusted choice among pet parents who prioritize their dog's health, hydration, and daily wellness",
  },
];

export default function OurAchievement() {
  return (
    <div className="bg-[#f0ebe3] ">
      {/* Top Hero Block */}
      <div className=" bg-white px-6 overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative">
          {/* Text left, Dog image right */}
          <div className="flex items-center justify-center px-6">
            {/* Left: Heading + description */}
            <div className="">
              {/* Heading */}
              <h2 className="">
                <span className="block text-6xl font-black uppercase tracking-tight text-black leading-none">
                  OUR
                </span>
                <span className="inline-block bg-[#f04e1a] text-white text-3xl font-black uppercase tracking-tight px-2 py-0.5 mt-0.5 leading-tight">
                  ACHIVEMENT
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-[15px] leading-relaxed text-gray-800 max-w-4xl">
                At Emoro, every milestone reflects our commitment to improving
                the health and well-being of dogs. While we continue to grow,
                our achievements are rooted in trust, innovation, and real
                results.At Emoro, every milestone reflects our commitment to improving
                the health and well-being of dogs. While we continue to grow,
                our achievements are rooted in trust, innovation, and real
                results.At Emoro, every milestone reflects our commitment to improving
                the health and well-being of dogs. While we continue to grow,
                our achievements are rooted in trust, innovation, and real
                results.
              </p>
            </div>

            {/* Right: Dog image */}
            <div className="relative w-[700px] flex-shrink-0 -mt-6">
              <img
                src="/dog.png"
                alt="Happy dog"
                className="w-full object-contain "
                style={{ height: "830px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="bg-[#EAE0D7 px-2  pb-8 ">
        <div className="max-w-[1600px] mx-auto divide-y divide-[#c8c0b4]">
          {achievements.map((item, index) => (
            <div key={index} className="py-4">
              <h3 className="text-[25px] font-black uppercase tracking-widest text-gray-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-800">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}