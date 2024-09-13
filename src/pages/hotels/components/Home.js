import ConstructionNavbar from "@/components/ConstructionNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../../../styles/personalhome.module.css'
import HotelDesign from "./HotelDesign";

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
            <Link href="/hotels">
              <span
                className={
                  isActive("/hotels")
                    ? "text-black md:text-[16px] text-[12px]"
                    : "text-black md:text-[16px] text-[12px]"
                }
              >
                Hotels
              </span>
            </Link>
          </li>
        </ul>
      </div>

     <ConstructionNavbar/>
     <HotelDesign />
    </div>
  );
}

export default Home;
