import React, { useState } from "react";
import styles from "../../../styles/livingRoom.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ContemproryDesign from "./ContemproryDesign";
import ScandinavianLivingRoom from "./ScandinavianDesign";
import MinimalistRoomDesign from "./MinimalistDesign";
import RetroRoomDesign from "./RetroDesign";
import EclecticRoomDesign from "./EclecticDesign";

function FalseCeiling() {
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
              <Link href="/flase-ceiling">
                <span
                  className={
                    isActive("/flase-ceiling")
                      ? "text-black md:text-[16px] text-[12px]"
                      : "text-black md:text-[16px] text-[12px]"
                  }
                >
                  False-Ceiling
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.livingRoomContentText}>
            False CeilingDesign
          </div>

          <div className={styles.livingRoomContentDesc}>
            A false ceiling, also known as a dropped or suspended ceiling, adds
            a modern and stylish touch to any room. It conceals wiring, reduces
            noise, and improves energy efficiency by creating a thermal barrier.
            Designed with gypsum or POP (Plaster of Paris), this ceiling type
            offers various designs, from simple geometric patterns to intricate,
            layered designs.
            <span
              className={styles.livingRoomReadMoreButton}
              onClick={handleButtonClicked}
            >
              {!clipText ? "Read more" : ""}
            </span>
            {clipText && (
              <>
                <span>
                  LED lighting and hidden light fixtures can be seamlessly
                  integrated to highlight the room’s ambiance, creating a warm
                  and inviting atmosphere. False ceilings are perfect for living
                  rooms, bedrooms, or office spaces, providing a contemporary
                  look while enhancing functionality. Choose from a range of
                  finishes, colors, and textures to complement your interior
                  style and elevate the aesthetic appeal of your space.
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

export default FalseCeiling;
