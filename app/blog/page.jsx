import BlogAndArticles from "@/components/BlogAndArticles";
import InsightsTrends from "@/components/InsightsTrends";
import Image from "next/image";

export default function page() {
  return (
 <>
 <BlogAndArticles/>
 <section className="w-full bg-[#dcd6cf] py-3 px-6 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/blog1.png" 
              alt="Pet Care"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          
          <h2 className="text-2xl md:text-3xl font-bold uppercase underline underline-offset-4 mb-4">
            INSIGHTS FOR BETTER <br /> PET CARE
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-6">
            Hot weather can quickly lead to dehydration in dogs, especially
            during outdoor activities. Discover practical and effective ways to
            keep your dog cool, hydrated, and protected during high temperatures
            and long summer days.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
    <InsightsTrends/>
 </>

  );
}
