import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import About from "@/components/about";
import Construction from "@/components/Home/Construction";
import HomeConstruction from "@/components/Home/HomeConstruction";
import InteriorSection from "@/components/Home/InteriorSection";
import OfferSection from "@/components/Home/OfferSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Construction />
      <HomeConstruction />
      <InteriorSection />
      <OfferSection/>
      <About />
    </div>
  );
}
