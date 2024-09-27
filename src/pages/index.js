import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import About from "@/components/about";
import Construction from "@/components/Home/Construction";
import HomeConstruction from "@/components/Home/HomeConstruction";
import InteriorSection from "@/components/Home/InteriorSection";
import OfferSection from "@/components/Home/OfferSection";
import HomeContact from "@/components/Home/HomeContact";
import Footer from  '../components/Footer/index'

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
      <HomeContact />
      <Footer />
      {/* <h1 className="text-center text-[50px] font-bold">Work in Progress</h1> */}
    </div>
  );
}
