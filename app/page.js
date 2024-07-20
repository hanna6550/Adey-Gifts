import Image from "next/image"; 
import Products from "@/components/products";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Products className="mx-5 md:mx-10 "/>
      <Services/>
      <About/>
      <Contact/>
    </div>
    );
}