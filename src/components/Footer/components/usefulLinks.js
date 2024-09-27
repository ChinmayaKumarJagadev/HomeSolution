import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../styles/footer.module.css";
import { Router, useRouter } from "next/router";

function LastContainer() {
  const router = useRouter();

  return (
    <div className={styles.linksFooterContainer}>
      <div className="text-2xl font-bold text-customRed">USEFUL LINKS</div>

      <div className="flex gap-2 mt-2">
        <MdKeyboardArrowRight className={styles.arrowFooter} />
        <div className="cursor-pointer hover:underline" onClick={() => router.push('/')}>Home</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline" onClick={() => router.push('/services')}>Services</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline">Projects</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline" onClick={() => router.push('/about')}>About</div>
      </div>

  
        <button className={styles.footerButton}>Start Your dream work</button>
      
    </div>
  );
}

export default LastContainer;
