
import Fonts from "@/components/fonts";
import Hero from "@/components/Hero";
import Products from "./products/page";
import Top_sell from "./products/sell";
import Dress from "@/components/dress";
import { CarouselSpacing } from "@/components/carousel";
export default function Home(){
  return(
    <div className="bg-white">
      
      <Hero/>
      <Fonts/>
      <Products/>
      <div className="mb-[1100px] sm:hidden" ></div>
      <Top_sell/>
      <Dress/>
      <CarouselSpacing/>
    </div>
  )
}