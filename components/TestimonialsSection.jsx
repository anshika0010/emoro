"use client";

const reviews = [
  {
    name: "PRIYA VERMA",
    location: "DELHI , INDIA",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    days: "2 DAYS AGO",
    review:
      '"I have tried many dog food brands before, but nothing matched the quality and results I\'ve seen with this one. My dog Bruno has become more active, playful, and his coat looks much shinier than before. Even his digestion has improved significantly, and he finishes every meal happily.\n\nI can clearly see the difference in his energy levels and overall health. Highly recommended for every pet parent who truly cares about their dog\'s well-being."',
  },
  {
    name: "SUNIL SINGH",
    location: "BANGLORE , INDIA",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    days: "2 DAYS AGO",
    review:
      '"I was looking for a reliable grooming and nutrition brand for my dog Max, and I\'m glad I found this. The dog food is clearly made with quality ingredients, and the shampoo works amazingly well on his sensitive skin. No irritation, no dryness—just a healthy, shiny coat.\n\nI can clearly see the difference in his energy levels and overall health. Highly recommended for every pet parent who truly cares about their dog\'s well-being."',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#f04e1a" className="w-3 h-3">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Decorative tag shape
function TagIcon({ className = "" }) {
  return (
    <div className={`w-10 h-10 bg-[#f04e1a] flex items-center justify-center rounded-sm rotate-45 ${className}`}>
      <div className="w-2.5 h-2.5 rounded-full bg-white -rotate-45" />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f0ebe3] px-4 sm:px-8 py-12 font-sans overflow-hidden">
      {/* Hero heading block */}
      <div className="relative flex flex-col items-center text-center mb-10">
        {/* Decorative tags */}
        <TagIcon className="absolute left-0 top-0 sm:left-4 md:left-10" />
        <TagIcon className="absolute right-0 top-6 sm:right-4 md:right-10 rotate-[225deg]" />

        {/* Main Heading */}
        <div className="mt-2">
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight text-gray-900">
            LOVED BY{" "}
            <span className="bg-[#f04e1a] text-white px-2 py-0.5 rounded-sm inline-block">
              PETS.
            </span>
          </h2>
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight text-gray-900 mt-1">
            <span className="bg-[#f04e1a] text-white px-2 py-0.5 rounded-sm inline-block mr-2">
              TRUSTED
            </span>
            BY PARENTS.
          </h2>
        </div>

        {/* Subtext */}
        <p className="mt-4 text-sm text-gray-600 max-w-xl leading-relaxed">
          Hear from pet owners who have seen real changes in their pets'
          health, energy, and happiness after using our premium food and care
          products.
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm relative"
          >
            {/* Reviewer Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-wide text-gray-900">
                  {r.name}
                </p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold">
                  {r.location}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <StarRating count={r.rating} />
                  <span className="text-[10px] text-gray-400 font-semibold tracking-wider">
                    {r.days}
                  </span>
                </div>
              </div>

              {/* Quote icon */}
              <div className="self-start mt-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="#f04e1a"
                  className="w-7 h-7 opacity-90"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-[12.5px] leading-relaxed text-gray-700 whitespace-pre-line">
              {r.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}