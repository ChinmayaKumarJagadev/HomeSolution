import React from "react";
import Image from "next/image";
import styles from "../../styles/construction.module.css";
import work1 from "../../assets/Images/work-1 (2).jpg";
import work2 from "../../assets/Images/work-1 (1).jpg";
import work3 from "../../assets/Images/work-1 (4).jpg";
import work4 from "../../assets/Images/work-1 (5).jpg";
import { useRouter } from "next/router";

function Construction() {
  const router = useRouter();
  const data = [
    {
      title: "Design & Planning",
      desc: "Crafting tailored plans for your vision",
      image: work1,
    },
    {
      title: "Architectural Services",
      desc: "Detailed designs ensuring structural integrity",
      image: work2,
    },
    {
      title: "Construction & Building",
      desc: "Managing builds with precision and quality",
      image: work3,
    },
    {
      title: "Finishing & Handover",
      desc: "Perfecting details and delivering excellence",
      image: work4,
    },
  ];

  const handleClickedConstructionCard = (card) => {
    if (card === 0) {
      router.push("/design");
    }
    if (card === 1) {
      router.push("/architecture");
    }
    if (card === 2) {
      router.push("/construction");
    }
    if (card === 3) {
      router.push("/finishing");
    }
  };

  return (
    <div className={styles.construction_container}>
      <div className={styles.construction_title}>
        Your All-in-One Partner for Complete Construction
      </div>
      <div className={styles.construction_description}>
        From custom design and detailed planning to expert construction and
        flawless finishing, we handle every step of your building journey.
      </div>

      <div className={styles.maincardContainerConstruction}>
        {data.map((item, index) => {
          return (
            <div className={styles.constructionCard}>
              <Image
                src={item.image}
                alt="error"
                className={styles.constructionCardImage}
                width={500}
                onClick={() => handleClickedConstructionCard(index)}
              />
              <div className="h-[50px] md:h-[100px]">
                <div className={styles.cardTitleConstruction}>{item.title}</div>
                <div className={styles.cardDescConstruction}>{item.desc}</div>

                <button
                  className={styles.seeMoreConstructionText}
                  onClick={() => handleClickedConstructionCard(index)}
                >
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Construction;
