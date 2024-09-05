import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../../../styles/footer.module.css";
import phone from "../../../assets/Images/phone-call.png";
import mail from "../../../assets/Images/mail2.png";
import loc from "../../../assets/Images/loc.png";

function leftContaner() {
  return (
    <div className={styles.leftFooterContainer}>
      <div className="text-2xl font-bold text-customRed">CONTACT US</div>

      <div className="mt-3 text-[18px]">Home Solution Limited</div>
      <div className="flex gap-3">
        <Image src={loc} alt="err" width={15} className="mt-1 h-[15px]" />
        <div>
          Dhauli Heritage Basinomata Bihar Sundarpada, <br />
          Flat no 502 <br />
          Odisha, Bhubaneswar <br /> Pin - 751002
        </div>
      </div>

      <div className="flex gap-3">
        <Image src={phone} alt="err" width={15} className="mt-1 h-[15px]" />
        <div>+91 8249811046 | +91 9439854856 | +91 7326071067 </div>
      </div>

      <div className="flex gap-3">
        <Image src={mail} alt="err" width={15} className="mt-1 h-[15px]" />
        <div>homesolution@gmail.com</div>
      </div>

      <div className="flex gap-[35px]">
        <Link href="https://www.facebook.com" passHref>
          <FaFacebookF className={styles.footerIcons} />
        </Link>

        <Link href="https://www.linkedin.com" passHref>
          <FaLinkedinIn className={styles.footerIcons} />
        </Link>

        <Link href="https://www.twitter.com" passHref>
          <FaTwitter className={styles.footerIcons} />
        </Link>

        <Link href="https://www.youtube.com" passHref>
          <FaYoutube className={styles.footerIcons} />
        </Link>
      </div>
    </div>
  );
}

export default leftContaner;
