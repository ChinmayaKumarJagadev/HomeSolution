import ConstructionNavbar from "@/components/ConstructionNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PersonalHomeDesign from "./PersonalHomeDesign";
import styles from '../../../styles/personalhome.module.css'

function Home() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  return (
    <div className={styles.personalHomeMainContainer}>
      <div className="pt-[20px] md:pt-[50px] mr-auto">
        <ul className="flex gap-[10px]">
          <li>
            <Link href="/">
              <span
                className={
                  isActive("/")
                    ? "text-blue-500 md:text-[16px] text-[12px]"
                    : "text-customRed md:text-[16px] text-[12px]"
                }
              >
                Home /
              </span>
            </Link>
          </li>
          <li>
            <Link href="/personal-home">
              <span
                className={
                  isActive("/personal-home")
                    ? "text-black md:text-[16px] text-[12px]"
                    : "text-black md:text-[16px] text-[12px]"
                }
              >
                Personal Home
              </span>
            </Link>
          </li>
        </ul>
      </div>

     <ConstructionNavbar/>
     <PersonalHomeDesign />
    </div>
  );
}

export default Home;
