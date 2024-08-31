import Header from "@/components/Home/Header";
import React from "react";
import styles from "../../styles/about.module.css";
import AboutTopContainer from "./components/AboutTopContainer";
import AboutMiddleContainer from "./components/AboutMiddleContainer";
import AboutVideoContainer from "./components/AboutVideoContainer";
import Hero from "@/components/Home/Hero";
import AboutSignature from "./components/AboutSignature";

function ABoutMain() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutTopContainer />
      <hr className="mt-[70px]" />
      <AboutMiddleContainer />
      <hr className="mt-[70px]" />
      <AboutSignature />
      <hr className="mt-[70px]" />
      <AboutVideoContainer />
    </div>
  );
}

export default ABoutMain;
