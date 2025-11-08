import Categories from "@/components/shared/pages/HomePage/Categories";
import Exclusive from "@/components/shared/pages/HomePage/Exclusive";
import Hero from "@/components/shared/pages/HomePage/Hero";
import OurConcern from "@/components/shared/pages/HomePage/OurConcern";
import PopularCourse from "@/components/shared/pages/HomePage/PopularCourse";
import Pyament from "@/components/shared/pages/HomePage/Pyament";
import Quete from "@/components/shared/pages/HomePage/Quete";
import Stories from "@/components/shared/pages/HomePage/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <Categories></Categories>
      <PopularCourse></PopularCourse>
      <Quete></Quete>
      <Stories></Stories>
      <Exclusive></Exclusive>
      <OurConcern></OurConcern>
      <Pyament></Pyament>
    </div>
  );
}
