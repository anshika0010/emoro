// EmeroSections.jsx — Next.js + Tailwind CSS component
// Matches the UI design from the uploaded image

export default function EmeroSections() {
  return (
    <div className="bg-[#f0ebe3] ">

      {/* WHY CHOOSE US Section */}
      <section className="px-6 py-10 max-w-[1600px] mx-auto">
     <h2 className="text-4xl font-black uppercase tracking-tight text-black mb-6 flex items-center gap-2">
          Why{" "}
          <span className="bg-[#f04e1a] text-white px-3 py-1 rounded-sm text-2xl font-black uppercase">
            Choose Us
          </span>
        </h2>

        <p className="text-[15px] leading-relaxed text-gray-900 mb-5">
          Emoro stands for trusted, science-backed pet care that goes beyond basic hydration.
          Our advanced formula is designed with essential electrolytes and fast-absorbing nutrients
          to deliver quick, effective results when your dog needs it most. Whether it&apos;s heat, exercise,
          or daily wellness, Emoro Hydrate helps restore fluid balance, boost energy, and support
          overall health.
        </p>

        <p className="text-[15px] leading-relaxed text-gray-900">
          We focus on quality, safety, and real-life usability—using premium ingredients that are
          carefully selected and tested for consistent performance. Easy to mix and suitable for
          all dog breeds.
        </p>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#d6cfc6] max-w-[1600px] mx-auto" />

      {/* OUR STORY Section */}
      <section className="px-6 py-10 max-w-[1600px] mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-tight text-black mb-6 flex items-center gap-2">
          OUR{" "}
          <span className="bg-[#f04e1a] text-white px-3 py-1 rounded-sm text-2xl font-black uppercase">
            STORY
          </span>
        </h2>

        <p className="text-[15px] leading-relaxed text-gray-900 mb-5">
          Emoro was born from a simple observation—many dogs struggle with dehydration,
          especially during heat, activity, and travel. We saw the need for a reliable, effective
          solution that goes beyond basic care.
        </p>

        <p className="text-[15px] leading-relaxed text-gray-900">
          This inspired us to develop advanced hydration formulas that are easy to use,
          fast-acting, and designed specifically for real-life pet needs.
        </p>
      </section>

    </div>
  );
}