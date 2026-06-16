import Image from "next/image";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Framework from "@/components/landing/Framework";
import Laboratories from "@/components/landing/Labratories";
import Vision from "@/components/landing/Vision";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Framework></Framework>
      <Laboratories></Laboratories>
      <Vision></Vision>
      <Footer></Footer>
    </div>
  );
}
