import React from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
import About1 from '../../../assets/Images/about-1.png'
import About2 from '../../../assets/Images/about-2.png'
import About3 from '../../../assets/Images/about-3.png'

function AboutRightContainer() {
  return (
    <div className={styles.abouRightContainer}>
      <ol class="relative text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400 w-full">
        <li class="mb-[0px] ps-[50px] border-s h-[150px]">
        <span className="absolute flex items-center justify-center w-[60px] h-[60px] 
        rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-900" style={{ backgroundColor: "#f63b2a"}}>
        <Image src={About1} alt="error" width={30} height={30} />
        </span>
          <h3 class="font-semibold text-xl text-black leading-tight uppercase pt-1">
            Perfectly Customized
          </h3>
          <p class="text-[16px] text-gray-500 mt-2 mr-10">
          Crafting spaces that reflect your unique style, because your satisfaction is our ultimate success.
          </p>
        </li>
        <li class="mb-[0px]  border-s ps-[50px] h-[150px]">
          <span class="absolute flex items-center justify-center w-[60px] h-[60px] 
          rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-700" style={{ backgroundColor: "#f63b2a"}}>
          <Image src={About2} alt="error" width={30} height={30} />
          </span>
          <h3 class="font-semibold leading-tight text-xl text-black leading-tight uppercase pt-1">Designed with You</h3>
          <p class="text-[16px] mt-2 mr-10">
          Your vision transforms the space. You shape it, creating a reality that reflects your imagination.
          </p>
        </li>
        <li class="mb-[0px] ps-[50px]">
          <span class="absolute flex items-center justify-center w-[60px] h-[60px] 
          rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-700" style={{ backgroundColor: "#f63b2a"}}>
          <Image src={About3} alt="error" width={30} height={30} />
          </span>
          <h3 class="font-semibold leading-tight text-xl text-black leading-tight uppercase pt-1">Value and Timeliness</h3>
          <p class="text-[16px] mt-2 mr-10">
            Delivering top-quality results with precision and on schedule. Where
            value meets reliability.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default AboutRightContainer;
