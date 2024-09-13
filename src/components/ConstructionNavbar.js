import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/personalhome.module.css';

function ConstructionNavbar() {
  const router = useRouter();

  return  (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <li className={`${styles.navbarItem} ${router.pathname === "/personal-home" ? styles.activeItem : ""}`}>
          <Link href="/personal-home">Personal Home</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/flats" ? styles.activeItem : ""}`}>
          <Link href="/flats">Flats</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/restaurants" ? styles.activeItem : ""}`}>
          <Link href="/restaurants">Restaurants</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/hospitals" ? styles.activeItem : ""}`}>
          <Link href="/hospitals">Hospitals</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/hotels" ? styles.activeItem : ""}`}>
          <Link href="/hotels">Hotels</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/shops" ? styles.activeItem : ""}`}>
          <Link href="/shops">Shops</Link>
        </li>
        <li className={`${styles.navbarItem} ${router.pathname === "/office" ? styles.activeItem : ""}`}>
          <Link href="/office">Office</Link>
        </li>
      </ul>
    </div>
  );
}

export default ConstructionNavbar;

