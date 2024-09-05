import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoDesignernews } from "react-icons/io";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";
import Modal from "react-modal";
import { motion } from "framer-motion";
import styles from "../../styles/header.module.css";
import logo from "../../assets/Images/homeLogo.svg";
import Phone from "../../assets/Images/phone-call.png";
import Mail from "../../assets/Images/mail.png";
import SocialIcons from "./SocialIcons";

Modal.setAppElement("#__next"); // Important for accessibility

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Navbar */}
      <SocialIcons />

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div>
          <Image
            src={logo}
            alt="error"
            height={50}
            width={100}
            className={styles.website_logo}
          />
          

          {/* <div className={styles.logo}>H</div> */}
        </div>
        {/* <div className={styles.header_text}>
          <Link href="/">HomeSolution</Link>
        </div> */}

        {/* Desktop Menu */}
        <ul className={`${styles.navLinks} hidden lg:flex`}>
        <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/project">Projects</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="text-2xl text-textColor" />
        </button>

        {/* Mobile Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              inset: 0,
              background: "transparent",
              border: "none",
              padding: 0,
              overflow: "hidden",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-full bg-black shadow-xl text-white gap-5 overflow-auto lg:hidden"
            style={{ height: "100%" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-7 text-5xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 uppercase tracking-wider mt-2]">

            <li className="hover:bg-customRed hover:text-white p-2 rounded mt-20 text-xl m-3">
                <Link href="/" className="flex items-center">
                 Home
                  <FaChevronRight className="text-white text-sm ml-auto mr-[15px]" />
                </Link>
              </li>

              <li className="hover:bg-customRed hover:text-white p-2 rounded mt-20 text-xl m-3">
                <Link href="/about" className="flex items-center">
                  About{" "}
                  <FaChevronRight className="text-white text-sm ml-auto mr-[15px]" />
                </Link>
              </li>
              <li className="hover:bg-customRed hover:text-white p-2 rounded text-xl m-4">
                <Link href="/" className="flex items-center">
                  Services{" "}
                  <FaChevronRight className="text-white text-sm ml-auto mr-[15px]" />
                </Link>
              </li>
              <li className="hover:bg-customRed hover:text-white p-2 rounded text-xl m-4">
                <Link href="/" className="flex items-center">
                  Projects{" "}
                  <FaChevronRight className="text-white text-sm ml-auto mr-[15px]" />
                </Link>
              </li>
              <li className="hover:bg-customRed hover:text-white p-2 rounded text-xl m-4">
                <Link href="/" className="flex items-center">
                  Testimonials{" "}
                  <FaChevronRight className="text-white text-sm ml-auto mr-[15px]" />
                </Link>
              </li>
              <li className="hover:bg-customRed hover:text-white p-2 rounded text-xl m-4">
                <Link href="/" className="flex items-center">
                  Contact{" "}
                  <FaChevronRight className="text-white hover:text-blue-500 text-sm ml-auto mr-[15px]" />
                </Link>
              </li>

              <hr className="w-full" style={{ backgroundColor: "#3d466b"}}/>
            </ul>

            <div className="relative text-2xl mt-3 md:mt-9 ml-5 float-left mb-5 md:mb-9">
              <div className="text-left mb-2 md:text-3xl text-[16px] font-bold">
                NEED HELP ?
              </div>
              <div className="flex flex-col gap-1 md:gap-7 h-[75px]">
                <div className={styles.phoneText}>
                  <Link
                    href="https://www.facebook.com"
                    passHref
                    className="text-left md:mt-2"
                  >
                    <Image
                      src={Phone}
                      alt="error"
                      className={styles.scoialIcons}
                      height={30}
                      width={30}
                    />
                    <a href="tel:+918249811046" className="text-[20px] ml-3 text-customRed font-bold md:text-3xl">
                      +91 8249811046
                    </a>
                  </Link>
                </div>

                <div className={styles.emailText}>
                  <Link href="https://www.facebook.com" passHref>
                    <Image
                      src={Mail}
                      alt="error"
                      className={styles.scoialIcons}
                      height={30}
                      width={30}
                    />
                    <span className="text-[20px] ml-3 text-customRed font-bold md:text-3xl">
                      supportalok@gmail.com
                    </span>
                  </Link>
                </div>

              </div>
            </div>

            <hr className="w-full" style={{ backgroundColor: "#3d466b"}}/>

            <div className="relative ml-4 pb-5">
              <div className="mt-5 text-left md:text-3xl text-[16px] font-bold">
                FOLLOW US
              </div>
              <div
                className={styles.mobileSocialIcons}
                style={{ marginLeft: "-5px" }}
              >
                <Link href="https://www.facebook.com" passHref>
                  <FaFacebookF className={styles.scoialIcons} />
                </Link>

                <Link href="https://www.linkedin.com" passHref>
                  <FaLinkedinIn className={styles.scoialIcons} />
                </Link>

                <Link href="https://www.twitter.com" passHref>
                  <FaTwitter className={styles.scoialIcons} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Modal>
      </nav>
    </header>
  );
}

export default Header;
