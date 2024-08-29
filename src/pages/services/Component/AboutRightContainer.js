import React from "react";
import styles from "../../../styles/about.module.css";
import Image from "next/image";
import About1 from '../../../assets/Images/about-1.png'
import About2 from '../../../assets/Images/about-2.png'
import About3 from '../../../assets/Images/about-3.png'

function AboutRightContainer() {
  return (
    <div className={styles.abouRightContainer}>
      <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 w-full">
        <li class="mb-[40px] ms-[60px]">
        <span className="absolute flex items-center justify-center w-[60px] h-[60px] bg-orange-500 rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-900">
        <Image src={About1} alt="error" width={30} height={30} />
        </span>
          <h3 class="font-semibold text-xl text-black leading-tight uppercase">
            Perfectly Customized
          </h3>
          <p class="text-md text-[20px] text-gray-500 mt-2 mr-10">
            Crafting spaces that reflect your style, because your satisfaction
            is our success.
          </p>
        </li>
        <li class="mb-[60px] ms-[60px]">
          <span class="absolute flex items-center justify-center w-[60px] h-[60px] bg-orange-500 rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <Image src={About2} alt="error" width={30} height={30} />
          </span>
          <h3 class="font-semibold leading-tight text-xl text-black leading-tight uppercase">Designed with You</h3>
          <p class="text-md mt-2 mr-10">
            Your input shapes the space. It’s your vision, made real.
          </p>
        </li>
        <li class="mb-[60px] ms-[60px]">
          <span class="absolute flex items-center justify-center w-[60px] h-[60px] bg-orange-500 rounded-full -left-8 ring-7 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <Image src={About3} alt="error" width={30} height={30} />
          </span>
          <h3 class="font-semibold leading-tight text-xl text-black leading-tight uppercase">Value and Timeliness</h3>
          <p class="text-md mt-2 mr-10">
            Delivering top-quality results with precision and on schedule. Where
            value meets reliability.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default AboutRightContainer;
