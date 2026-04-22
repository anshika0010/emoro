import DogFoodBanner from "@/components/DogFoodBanner";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PetHeroSection from "@/components/PetHeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ClothBagsPage from "@/Pages/ClothBagsPage";
import CTABanner from "@/Pages/CTABanner";
import HydrationBanner from "@/Pages/HydrationBanner";
import InstagramSection from "@/Pages/InstagramSection";
import Image from "next/image";

export default function Home() {
  return (
 
      <main className="">
        <HeroSection/>
        <WhoWeAre/>
        <DogFoodBanner/>
        <PetHeroSection/>
        <HydrationBanner/>
        <FAQSection/>
        <InstagramSection/>
        <CTABanner/>
      {/* <ClothBagsPage/> */}
      </main>

  );
}
