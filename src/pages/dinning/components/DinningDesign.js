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
              <Link href="/dinning">
                <span
                  className={
                    isActive("/dinning")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Dinning
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>
            Dinning Room Design
          </div>

          <div className={styles.livingRoomContentDesc}>
            Create an inviting and stylish dining space with our contemporary
            dining room design. This design features a seamless blend of comfort
            and elegance, using sleek furniture, neutral tones, and subtle
            accents to enhance the overall ambiance. 
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                A spacious dining table
            becomes the focal point, surrounded by modern, upholstered chairs
            that provide both support and style. Ambient lighting fixtures, like
            pendant lights or chandeliers, add a warm, sophisticated glow,
            perfect for both intimate dinners and larger gatherings. The room is
            adorned with tasteful art pieces and greenery to bring in a touch of
            nature, creating a balanced, calming environment. This design is
            ideal for those who appreciate a modern aesthetic with a welcoming,
            personal touch.
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
