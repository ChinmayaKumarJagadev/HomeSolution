import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import Phone from "../../assets/Images/phone-call.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBars } from "react-icons/fa";

function SocialIcons() {
  return (
    <div>
      <nav className={styles.navbarTop}>
        <ul className={styles.navLinks_top}>
          <li className={styles.phone_container}>
            <Link href="https://www.facebook.com" passHref>
              <Image
                src={Phone}
                alt="error"
                className={styles.scoialIcons}
                height={30}
                width={30}
                style={{ marginTop: "-10px" }}
              />
              <span className={styles.phone_text}>0941 112 071</span>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com" passHref>
              <FaFacebookF className={styles.scoialIcons} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com" passHref>
              <FaLinkedinIn className={styles.scoialIcons} />
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com" passHref>
              <FaTwitter className={styles.scoialIcons} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SocialIcons;
