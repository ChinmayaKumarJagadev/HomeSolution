import React from "react";
import Image from "next/image";
import styles from "../../../styles/about.module.css";
import RightArrow from "../../../assets/Images/right-arrow.png";

function AboutLeftContainer() {
  return (
    <div className={styles.abouLeftContainer}>
      <div className={styles.aboutUSTitle}>ABOUT US</div>
      <div class="relative w-48 h-[3px] ml-auto my-0 md:mt-3 mb-5 mr-5 overflow-visible">
        <div class="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-full">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-wave"></div>
        </div>
        <div class="absolute top-1/2 left-[-5px] transform -translate-y-1/2 w-3 h-3 border-2 border-gray-400 rounded-full"></div>
        <div class="absolute top-1/2 right-[-5px] transform -translate-y-1/2 w-3 h-3 border-2 border-gray-400 rounded-full"></div>
      </div>

      <div className={styles.aboutUSDesc}>
        With over a decade of unparalleled expertise in the construction,
        interior design, and maintenance sectors, <br />
        we at HomeSolution.com have transformed countless spaces into stunning,
        functional environments. Our journey of 10-12 years <br /> has been
        marked by a commitment to excellence, creativity, and precision. From
        envisioning captivating interiors to executing seamless construction
        projects,
        <br /> we blend innovation with craftsmanship to bring your dream spaces
        to life.
        <br /> Our legacy is built on trust, quality, and a passion for
        perfection, <br />
        making us the go-to choice for clients seeking to elevate their living
        and working spaces.
      </div>

      <button className="flex font-bold bg-orange-500 py-2 px-5 text-white rounded-md mr-5 mt-5 ml-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600">
        More About Us
        <Image
          src={RightArrow}
          alt="error"
          className="h-6 w-5 ml-3 transition-transform duration-300 ease-in-out transform hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default AboutLeftContainer;
