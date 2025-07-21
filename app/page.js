import Image from "next/image";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Brands from "./_components/Brands";
import Products from "./_components/LatestProducts";
import Blogs from "./_components/Blogs";
import Offers from "./_components/Offers";
import CategoriesSlider from "./_components/TypesSlider";
export default function Home() {
  return (
    <>
    <Hero/>
    <CategoriesSlider/>
    <Categories/>
    <Brands/>
    <Products/>
    <Blogs/>
    <Offers/>
    </>
    
  );
}
