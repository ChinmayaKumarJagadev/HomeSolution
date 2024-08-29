import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Services from "./services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
    </div>
  );
}
