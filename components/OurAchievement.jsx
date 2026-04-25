// OurAchievement.jsx — Next.js + Tailwind CSS component
// Matches the "Our Achievement" section from the uploaded image

const achievements = [
  {
    title: "TRUSTED BY DEVOTED PARENTS",
    description:
      "We serve a dedicated community of owners who read every label and refuse to compromise on safety.",
  },
  {
    title: "REAL IMPACT ON PET HEALTH:",
    description:
      "Owners report distinct improvements in coat shine, joint f lexibility, and energy recovery in just a few weeks",
  },
  {
    title: "GROWING COMMUNITY",
    description:
      "Thousands of pet owners have officially ditched dangerous rawhide and brittle bones for our safe, digestible alternatives.",
  },
  {
    title: "DESIGNED FOR EVERYDAY USE",
    description:
      "We make powders that mix instantly and treats that dogs obsess over, taking the friction out of your daily health routine.",
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
             Our true measure of success isn't sales volume; it's the number of emergency vet visits we help pet parents avoid. Every time a senior dog gets up off the floor without stiffness, or an active pup recovers from a long hike without heat stress, we know we are doing our job.
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