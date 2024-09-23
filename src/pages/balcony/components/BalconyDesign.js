import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";

function BalconyDesign() {
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
              <Link href="/balcony">
                <span
                  className={
                    isActive("/balcony")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Balcony
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>Balcony Design</div>

          <div className={styles.livingRoomContentDesc}>
            This contemporary balcony design offers a perfect blend of comfort
            and style, ideal for enjoying outdoor living. The space features
            cozy seating arrangements with plush cushions and a small coffee
            table, making it a perfect spot for morning coffee or evening
            relaxation. The floor is adorned with sleek wooden decking, adding
            warmth and texture to the area.
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                Vertical planters and potted plants
            introduce lush greenery, creating a tranquil environment that
            connects with nature. Ambient lighting, such as string lights or
            lanterns, adds a soft, inviting glow, enhancing the ambiance during
            evenings. Whether used for lounging, reading, or entertaining
            guests, this balcony provides a serene and stylish escape from the
            hustle and bustle of daily life.
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
      </div>
    </div>
  );
}

export default BalconyDesign;
