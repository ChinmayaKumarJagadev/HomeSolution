import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";
import EclecticRoomDesign from "./EclecticDesign";

function WodrobeDesign() {
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
              <Link href="/wodrobe">
                <span
                  className={
                    isActive("/wodrobe")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Wodrobe
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>Wodrobe Design</div>

          <div className={styles.livingRoomContentDesc}>
            A wardrobe is a versatile storage unit designed to keep your
            clothing, accessories, and personal items organized. Typically
            crafted from wood, metal, or a combination of materials, it often
            features multiple compartments, shelves, and hanging spaces to
            accommodate various wardrobe essentials.
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                  The exterior can be styled with sliding or hinged doors,
                  mirrors, or decorative panels to complement your room’s
                  aesthetics. Inside, you’ll find a thoughtfully arranged layout
                  that maximizes space, with rods for hanging garments, shelves
                  for folded clothes, and drawers for smaller items like jewelry
                  or socks. A well-designed wardrobe not only provides practical
                  storage but also enhances the overall look of your bedroom,
                  offering both functionality and style in one cohesive piece.
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

export default WodrobeDesign;
