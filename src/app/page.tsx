import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main style={{ overflowY: "scroll", height: "100vh" }}>
      <HeroSection />
      <Feature />
      <Content />
      <Contact />
    </main>
  );
}
