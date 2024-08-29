import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBars } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import styles from "../styles/header.module.css";
import logo from "../assets/Images/logo1.png";
import Phone from "../assets/Images/phone-call.png";
import Mail from "../assets/Images/mail.png";
import SocialIcons from "./SocialIcons";

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
            height={100}
            width={150}
            className={styles.website_logo}
          />
        </div>
        <div className={styles.header_text}>
          <Link href="/">HomeSolution</Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`${styles.navLinks} hidden lg:flex`}>
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
          <FaBars className="text-2xl text-white"/>
        </button>

        {/* Mobile Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center text-center text-2xl gap-5"
          style={{ height: "100%" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-full bg-slate-700 bg-opacity-70 shadow-xl text-white gap-5 overflow-auto lg:hidden md:overflow-auto"
            style={{ height: "100%" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-7 text-5xl"
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 uppercase tracking-wider mt-2">
              <li className="hover:bg-orange-700 p-3 rounded mt-20 text-xl m-3">
                <Link href="/">About</Link>
              </li>
              <li className="hover:bg-orange-700 p-3 rounded text-xl m-8">
                <Link href="/">Services</Link>
              </li>
              <li className="hover:bg-orange-700 p-3 rounded text-xl m-8">
                <Link href="/">Projects</Link>
              </li>
              <li className="hover:bg-orange-700 p-3 rounded text-xl m-8">
                <Link href="/">Testimonials</Link>
              </li>
              <li className="hover:bg-orange-700 p-3 rounded text-xl m-8">
                <Link href="/">Contact</Link>
              </li>

              <hr className="w-full" />
            </ul>

            <div className="text-2xl mt-3 md:mt-9 ml-5 md:ml-[100px] float-left mb-5 md:mb-9">
              <div className="text-left mb-2 md:text-3xl text-[16px] font-bold">NEED HELP ?</div>
              <div className="flex flex-col gap-1 md:gap-7">
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
                  <span className="text-[18px] ml-3 text-orange-600 font-bold md:text-3xl">
                    0941 112 0710
                  </span>
                </Link>

                <Link href="https://www.facebook.com" passHref>
                  <Image
                    src={Mail}
                    alt="error"
                    className={styles.scoialIcons}
                    height={30}
                    width={30}
                  />
                  <span className="text-[18px] ml-3 text-orange-600 font-bold md:text-3xl">
                    supportalok@gmail.com
                  </span>
                </Link>
              </div>
            </div>

            <hr className="w-full" />

            <div className="md:ml-[100px] ml-4 pb-5">
              <div className="mt-5 text-left md:text-3xl text-[16px] font-bold">FOLLOW US</div>
              <div className="flex gap-5 mt-1" style={{ marginLeft: "-5px"}}>
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
        </Dialog>
      </nav>
    </header>
  );
}

export default Header;
