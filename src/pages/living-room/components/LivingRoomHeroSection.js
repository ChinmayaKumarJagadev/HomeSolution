import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import LivingRoomDesign from "./LivingRoomDesign";
import ScandinavianLivingRoom from "./ScandinavianLivingRoom";
import MinimalistRoomDesign from "./MinimalistRoomDesign";
import RetroRoomDesign from "./RetroRoomDesign";
import EclecticRoomDesign from "./EclecticRoomDesign";
import InteriorOfferSection from "@/components/interiorOfferSection";

function LivingRoomHeroSection() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [clipText, setClipText] = useState(false);

  const handleButtonClicked = () => {
    setClipText(!clipText);
  };

  return (
    <div className={styles.livingRoomContentContainer}>
      <div className="md:ml-[50px] ml-[20px]">
        <ul className="flex gap-[10px]">
          <li>
            <Link href="/">
              <span
                className={
                  isActive("/")
                    ? "text-blue-500 md:text-[16px] text-[12px]"
                    : "text-customRed md:text-[16px] text-[12px]"
                }
              >
                Home /
              </span>
            </Link>
          </li>
          <li>
            <Link href="/living-room">
              <span
                className={
                  isActive("/living-room")
                    ? "text-black md:text-[16px] text-[12px]"
                    : "text-black md:text-[16px] text-[12px]"
                }
              >
                Living-Room
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={styles.livingRoomContentText}>Living Room Design</div>

        <div className={styles.livingRoomContentDesc}>
          Elevate your living space with our expertly designed living rooms,
          tailored to reflect your personal style and enhance comfort. Whether
          you prefer a cozy, intimate atmosphere or a spacious, modern layout,
          we bring together functionality and aesthetic appeal to create the
          perfect balance.
          <span
            className={styles.livingRoomReadMoreButton}
            onClick={handleButtonClicked}
          >
            {!clipText ? "Read more" : ""}
          </span>
          {clipText && (
            <>
              <span>
                Our designs emphasize open floor plans, strategic lighting, and
                thoughtfully curated furniture arrangements to make your living
                room the heart of your home. We pay attention to every detail,
                from choosing the right color palette and textures to
                incorporating smart storage solutions and stylish decor. With a
                focus on comfort and elegance, our living room designs create
                inviting spaces where you can relax, entertain, and enjoy the
                best moments with your loved ones.
              </span>
              <span
                className={styles.livingRoomReadMoreButton}
                onClick={handleButtonClicked}
              >
                Read less
              </span>
            </>
          )}
        </div>
      </div>
      <LivingRoomDesign />
      <ScandinavianLivingRoom />
      <InteriorOfferSection/>
      <MinimalistRoomDesign/>
      <RetroRoomDesign/>
      <EclecticRoomDesign/>
    </div>
  );
}

export default LivingRoomHeroSection;
