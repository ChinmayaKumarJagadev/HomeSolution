import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import About from "@/components/about";
import Construction from "@/components/Home/Construction";
import HomeConstruction from "@/components/Home/HomeConstruction";
import InteriorSection from "@/components/Home/InteriorSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Construction />
      <HomeConstruction />
      <InteriorSection />
      {/* <About /> */}
    </div>
  );
}
