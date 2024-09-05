import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../styles/footer.module.css";

function MiddleConatiner() {
  return (
    <div className={styles.middleFooterContainer}>
      <div className="text-2xl font-bold text-customRed">SERVICES</div>

      <div className="flex gap-2 mt-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}/>
        <div className="cursor-pointer hover:underline">Residential and Commercial Construction</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter}/>
        <div className="cursor-pointer hover:underline">Interior Design and Decoration</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter} />
        <div className="cursor-pointer hover:underline">Renovation and Remodeling</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter} />
        <div className="cursor-pointer hover:underline">Custom Furniture Design</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className={styles.arrowFooter} />
        <div className="cursor-pointer hover:underline">Landscaping and Outdoor Design</div>
      </div>
    </div>
  );
}

export default MiddleConatiner;
