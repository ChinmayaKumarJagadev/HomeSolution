import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "../../../styles/footer.module.css";

function MiddleConatiner() {
  return (
    <div className={styles.middleFooterContainer}>
      <div className="text-2xl font-bold text-customRed">SERVICES</div>

      <div className="flex gap-2 mt-2">
        <MdKeyboardArrowRight className="mt-1"/>
        <div className="cursor-pointer">Construction</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className="mt-1"/>
        <div className="cursor-pointer">Home Interior</div>
      </div>

      <div className="flex gap-2">
        <MdKeyboardArrowRight className="mt-1" />
        <div className="cursor-pointer">Maintainance</div>
      </div>
    </div>
  );
}

export default MiddleConatiner;
