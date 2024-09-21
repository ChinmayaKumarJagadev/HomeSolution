import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";
import EclecticRoomDesign from "./EclecticDesign";

function BedRoomDesign() {
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
              <Link href="/bed-room">
                <span
                  className={
                    isActive("/bed-room")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Bed-Room
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>Bed Room Design</div>

          <div className={styles.livingRoomContentDesc}>
            A well-designed bedroom should be a peaceful retreat that combines
            comfort and style. Imagine a space with soft, neutral colors that
            create a calm atmosphere, perfect for rest. The bed, the centerpiece
            of the room, features a stylish headboard and cozy bedding that
            invites relaxation.
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                  Subtle lighting, such as bedside lamps and warm overhead
                  lights, helps to set a soothing mood. Minimalist decor, like a
                  few pieces of artwork or decorative accents, adds character
                  without cluttering the space. Thoughtful storage solutions,
                  such as under-bed drawers or built-in wardrobes, keep the room
                  tidy and organized. Overall, the design should focus on
                  creating a serene and inviting environment, making it an ideal
                  spot to unwind and recharge.
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
        <ScandinavianLivingRoom/>
        <MinimalistRoomDesign/>
        <RetroRoomDesign/>
        <EclecticRoomDesign/>

      </div>
    </div>
  );
}

export default BedRoomDesign;
