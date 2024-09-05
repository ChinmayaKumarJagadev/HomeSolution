import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../styles/footer.module.css";

function LastContainer() {
  return (
    <div className={styles.linksFooterContainer}>
      <div className="text-2xl font-bold text-customRed">USEFUL LINKS</div>

      <div className="flex gap-2 mt-2">
        <MdKeyboardArrowRight className="mt-1" />
        <div className="cursor-pointer">Home</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className="mt-1" />
        <div className="cursor-pointer">Services</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className="mt-1" />
        <div className="cursor-pointer">Projects</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className="mt-1" />
        <div className="cursor-pointer">About</div>
      </div>

  
        <button className={styles.footerButton}>Start Your dream work</button>
      
    </div>
  );
}

export default LastContainer;
