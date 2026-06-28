import Image from "next/image";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import FrameworkSection from "@/components/landing/FrameworkSection";
import Vision from "@/components/landing/Vision";

import { frameworks } from "@/features/landing/data";

export default function Home() {
  return (
    <div className="">
      {/*absolute inset-0 -z-10 bg-gradient-to-b from-slate-400 to-white */}
      <Navbar></Navbar>
      <Hero></Hero>
      {frameworks.map((framework) => (
        <FrameworkSection
          key={framework.id}
          titles={framework.titles}
          description={framework.description}
          items={framework.items}
          reverse={framework.reverse}
        />

      ))}
      <Vision></Vision>
      <Footer></Footer>
    </div>
  );
}
