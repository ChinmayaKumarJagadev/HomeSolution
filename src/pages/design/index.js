import Header from "@/components/Home/Header";
import React from "react";
import styles from "../../styles/designAndPlanning.module.css";
import DesignScreenAOverview from "./components/DesignScrrenOverviewSection";
import DesignScreenHero from "./components/DesignScreenHero";
import Footer from '../../components/Footer/index'

function DesignAndPlanning() {
  return (
    <div>
      <Header />
      <DesignScreenHero />
      <DesignScreenAOverview />
      <Footer />
    </div>
  );
}

export default DesignAndPlanning;
