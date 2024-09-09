import React from "react";
import Header from "@/components/Home/Header";
import Footer from '../../components/Footer/index'
import ArchitectureHero from './components/ArchitechtureHero'
import ArchtitectureDesignSection from './components/ArchitectureDesignSection'

function Archtitecture() {
  return (
    <div>
      <Header />
      <ArchitectureHero />
      <ArchtitectureDesignSection />
      <Footer />
    </div>
  );
}

export default Archtitecture;
