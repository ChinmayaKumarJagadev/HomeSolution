import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../styles/footer.module.css";

function LastContainer() {
  return (
    <div className={styles.linksFooterContainer}>
      <div className="text-2xl font-bold text-customRed">USEFUL LINKS</div>

      <div className="flex gap-2 mt-2">
        <MdKeyboardArrowRight className={styles.arrowFooter} />
        <div className="cursor-pointer hover:underline">Home</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline">Services</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline">Projects</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}  />
        <div className="cursor-pointer hover:underline">About</div>
      </div>

  
        <button className={styles.footerButton}>Start Your dream work</button>
      
    </div>
  );
}

export default LastContainer;
