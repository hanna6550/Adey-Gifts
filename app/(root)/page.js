import Image from "next/image";
import HomePage from "@/components/home"
import Hero from '@/components/home/hero'
import Section2 from "@/components/home/sec2";
import Section3 from "@/components/home/sec3"
import Section4 from "@/components/home/sec4"

export default function Home() {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />   
  
      </div>
  );
}
