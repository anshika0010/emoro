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
        We tackle the exact problems other brands gloss over. Walk down any pet aisle, and you'll find treats carrying hidden dangers, like cooked bones that easily shatter and cause severe internal injuries. You'll also find dry kibble that leaves your cat or dog in a constant state of mild dehydration. Emoro attacks these issues head-on. We engineered a 100% digestible, splinter-free chicken bone so your dog gets the chew they crave without the emergency vet visit.
        </p>

        <p className="text-[15px] leading-relaxed text-gray-900">
    We also developed fast-acting electrolyte formulas that pull fluid straight into their cells, protecting their kidneys from strain. You choose us because you expect physical, measurable results you can actually see.
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
        Emoro began from a simple observation in our own living rooms: our pets were running on empty. We watched our active dogs pant heavily, struggling to bounce back after a hot afternoon run. We noticed older cats quietly dealing with kidney stress simply because they naturally refuse to drink enough standing water. When we looked for answers on store shelves, we found nothing but sugar-heavy treats and dangerously brittle cooked bones.
        </p>

        <p className="text-[15px] leading-relaxed text-gray-900">
         That wasn't good enough. We teamed up with animal nutritionists and spent years testing mineral absorption and safe chew textures. The result is a pantry of supplements and rewards that protect your best friend from the inside out.
        </p>
      </section>

    </div>
  );
}