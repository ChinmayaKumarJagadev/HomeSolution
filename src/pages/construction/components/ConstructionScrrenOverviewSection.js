import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/designAndPlanning.module.css";
import Site1 from "../../../assets/Images/site1.jpg";
import Site2 from "../../../assets/Images/site2.jpg";
import Site3 from "../../../assets/Images/site3.jpg";
import Site5 from "../../../assets/Images/site5.jpg";
import Site6 from "../../../assets/Images/real-home.jpg";

function DesignScreenOverviewSection() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <div className={styles.designScreenOverviewSection}>
      <div className="pt-[20px] mr-auto ml-[20px] md:ml-[200px]">
        <ul className="flex gap-[10px]">
          <li>
            <Link href="/">
              <span
                className={isActive("/") ? "text-blue-500 md:text-[16px] text-[12px]" : "text-customRed md:text-[16px] text-[12px]"}
              >
                Home /
              </span>
            </Link>
          </li>
          <li>
            <Link href="/architecture">
              <span
                className={
                  isActive("/architecture") ? "text-black md:text-[16px] text-[12px]" : "text-black md:text-[16px] text-[12px]"
                }
              >
                Construction and Building
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.designScreenTopContent}>
        <div className={styles.overviewDesignTitle}>
          Our Construction and Building Process
        </div>
        <div className={styles.overviewDesignDesc}>
          Our step-by-step approach ensures quality, precision, and timely
          project completion.
        </div>
      </div>

      <div className="mt-[50px]">
        <div className={styles.designStepsContainer}>
          <div className="flex flex-col">
            <div>
              <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
                1. Site Clearing and Preparation{" "}
              </div>
              <div className="text-textColor text-[12px] md:text-[16px] text-justify">
                This is the first step in the construction process, where we
                clear the land of any vegetation, debris, or existing structures
                to make room for the new build. We carefully grade and level the
                ground to ensure it is stable and ready for construction. Proper
                drainage is also established to prevent water accumulation
                during the building phase. This stage involves marking out the
                building site and setting boundaries based on the architectural
                plans. By ensuring the land is prepared correctly, we create a
                solid foundation for the construction process, minimizing any
                potential issues later on. This essential step sets the stage
                for a smooth and efficient build.
              </div>
            </div>
          </div>

          <Image
            src={Site1}
            alt="err"
            width={350}
            className={styles.siteInfoImages}
          />
        </div>

        <div className={styles.designStepsContainer} style={{marginTop: "30px"}}>
          <Image
            src={Site2}
            alt="err"
            width={450}
            className={styles.siteInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
            2. Establishing a Solid Foundation
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              The foundation is the most crucial part of any construction
              project, as it supports the entire structure. We begin by digging
              trenches or creating space for footings based on the architectural
              design. After that, reinforced concrete is poured to form a
              strong, stable base. This process ensures that the building can
              bear the weight of the walls, roof, and other structural elements.
              Proper foundation work helps prevent shifting or settling,
              ensuring the long-term durability of the home. We also install
              moisture barriers and insulation where necessary, creating a
              secure and stable base for the rest of the construction process.
            </div>
          </div>
        </div>

        <div className={styles.designStepsContainer} style={{marginTop: "30px"}}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              {" "}
              3. Structural Framework Construction{" "}
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              In this stage, the skeleton of the home is constructed, providing
              the overall shape and structural support for the building. The
              framework consists of the walls, floors, and roof structure, all
              built with precision to ensure durability and strength. This step
              involves the installation of load-bearing walls and support beams,
              which are crucial for the stability of the entire house. Accurate
              measurements and quality materials are used to ensure that the
              framework aligns with the architectural plans. Once the frame is
              completed, the house begins to take shape, setting the foundation
              for the addition of exterior and interior elements.
            </div>
          </div>

          <Image
            src={Site3}
            alt="err"
            width={450}
            className={styles.siteInfoImages}
          />
        </div>


        <div className={styles.designStepsContainer} style={{marginTop: "30px"}}>
          <Image
            src={Site5}
            alt="err"
            width={400}
            className={styles.siteInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              4. Utility Installation
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              In this stage, we focus on installing essential systems that make
              your home functional and comfortable. This includes laying out and
              connecting plumbing pipes for water supply and drainage,
              electrical wiring for power and lighting, and HVAC (heating,
              ventilation, and air conditioning) ducts for climate control. We
              carefully integrate these systems within the walls and ceilings to
              ensure everything is correctly set up before the final interior
              finishes. Proper installation of these utilities is crucial for
              the home’s performance and efficiency, ensuring a reliable and
              comfortable living environment for you and your family.
            </div>
          </div>
        </div>
        <div className={styles.designStepsContainer} style={{marginTop: "30px"}}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
             5. Building the Exterior Shell
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              In this phase, we focus on creating the outer structure of the
              home, which includes erecting exterior walls and installing
              windows and doors. This step defines the home's shape and ensures
              it is protected from weather elements. We use durable materials
              and precise techniques to build walls that provide both strength
              and insulation. The installation of windows and doors adds
              functionality and completes the home’s exterior look. This phase
              not only provides structural integrity but also enhances the
              building’s curb appeal. Proper construction at this stage is
              crucial for the overall durability and energy efficiency of the
              home.
            </div>
          </div>

          <Image
            src={Site6}
            alt="err"
            width={400}
            className={styles.siteInfoImages}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignScreenOverviewSection;
