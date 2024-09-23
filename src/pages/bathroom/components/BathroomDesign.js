import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";
import EclecticRoomDesign from "./EclecticDesign";

function DinningDesign() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [clipText, setClipText] = useState(false);

  const handleButtonClicked = () => {
    setClipText(!clipText);
  };

  return (
    <div>
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
              <Link href="/bathroom">
                <span
                  className={
                    isActive("/bathroom")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Bathroom
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>Bath Room Design</div>

          <div className={styles.livingRoomContentDesc}>
            Transform your bathroom into a luxurious retreat with our elegant
            bathroom design. This concept combines functionality and
            sophistication, featuring sleek fixtures, modern fittings, and a
            soothing color palette. A spacious vanity with ample storage ensures
            clutter-free organization, while a stylish mirror enhances the
            room’s visual appeal. 
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                The walk-in shower, framed with glass, adds a
            contemporary touch, and the rainfall showerhead provides a spa-like
            experience. Soft, ambient lighting and strategically placed sconces
            create a calming atmosphere, perfect for unwinding after a long day.
            The use of high-quality materials such as marble, ceramic tiles, and
            brushed metal accents adds to the sense of opulence. This bathroom
            design is ideal for those seeking a perfect blend of comfort, style,
            and functionality.
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

        <ContemproryDesign />
        <ScandinavianLivingRoom />
        <MinimalistRoomDesign />
        <RetroRoomDesign />
        <EclecticRoomDesign />
      </div>
    </div>
  );
}

export default DinningDesign;
