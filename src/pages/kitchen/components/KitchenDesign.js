import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";
import EclecticRoomDesign from "./EclecticDesign";

function KitchenDesign() {
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
              <Link href="/kitchen">
                <span
                  className={
                    isActive("/kitchen")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  Kitchen
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>
            Kitchen Room Design
          </div>

          <div className={styles.livingRoomContentDesc}>
            This kitchen embodies a perfect blend of style and functionality,
            designed to elevate your culinary experience. The sleek cabinetry in
            a warm wood finish pairs beautifully with a quartz countertop,
            creating a harmonious and inviting atmosphere. A spacious island
            doubles as a meal prep area and casual dining spot, while stainless
            steel appliances add a modern touch.
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                Clever storage solutions, such
            as pull-out pantries and hidden drawers, keep the space organized
            and clutter-free. Soft under-cabinet lighting enhances the ambiance,
            making it ideal for both day and night use. A backsplash in neutral
            tones adds visual interest, tying the entire design together. This
            kitchen is a versatile space, perfect for both casual family meals
            and entertaining guests.
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

export default KitchenDesign;
