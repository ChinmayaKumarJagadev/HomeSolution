import React from "react";
import styles from "../../../styles/designAndPlanning.module.css";
import Consult from "../../../assets/Images/consultation2.jpg";
import Concept from "../../../assets/Images/concept3.jpg";
// import model3D from "../../../assets/Images/3d.png";
import Site from "../../../assets/Images/site-visit.jpg";
import Approve from "../../../assets/Images/approve2.jpg";
import Architecture from '../../../assets/Images/architecture.jpg'
import Structure from '../../../assets/Images/structure1.jpg'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
                className={
                  isActive("/")
                    ? "text-blue-500 md:text-[16px] text-[12px]"
                    : "text-customRed md:text-[16px] text-[12px]"
                }
              >
                Home  /
              </span>
            </Link>
          </li>
          <li>
            <Link href="/architecture">
              <span
                className={
                  isActive("/architecture")
                    ? "text-black md:text-[16px] text-[12px]"
                    : "text-black md:text-[16px] text-[12px]"
                }
              >
              Architecture Services
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.designScreenTopContent}>
        <div className={styles.overviewDesignTitle}>
          Our Architectural Services and Planning Process
        </div>
        <div className={styles.overviewDesignDesc}>
          Creative architectural solutions with detailed, client-focused
          planning.
        </div>
      </div>

      <div className="mt-[50px]">
        <div className={styles.designStepsContainer}>
          <div className="flex flex-col">
            <div>
              <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
                1. Consultation
              </div>
              <div className="text-textColor text-[12px] md:text-[16px] text-justify">
                We begin with a one-on-one consultation to understand your
                vision for the project. During this phase, we discuss your
                goals, design preferences, and specific requirements, ensuring
                the plan reflects your personal style. Whether it’s a full home
                construction or interior design project, we take the time to
                listen and provide professional guidance to shape the project’s
                scope. Our goal is to ensure your needs are clearly understood
                and integrated into every aspect of the design.
              </div>
            </div>
          </div>

          <Image
            src={Consult}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
        </div>

        <div className={styles.designStepsContainer}>
          <Image
            src={Site}
            alt="err"
            width={450}
            className={styles.designInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              2. Site Evaluation and Feasibility Study
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Our team conducts a thorough on-site evaluation to understand the
              unique characteristics of your property. This includes assessing
              the terrain, access points, and environmental factors that could
              affect the construction process. Additionally, we conduct a
              feasibility study to determine the project’s viability, ensuring
              that all design concepts comply with local regulations and zoning
              laws. This helps mitigate potential challenges, saving time and
              costs in later stages.
            </div>
          </div>
        </div>

        <div className={styles.designStepsContainer}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
             3.  Concept Design and Space Planning{" "}
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Based on your input, we create initial sketches and layouts that
              focus on optimizing the available space. During this phase, we
              explore various design concepts, keeping both functionality and
              aesthetics in mind. Whether it’s a modern open-plan design or a
              more traditional layout, we ensure that the space is maximized to
              suit your lifestyle. This stage includes interactive revisions, so
              your feedback is integrated into the evolving design.
            </div>
          </div>

          <Image
            src={Concept}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
        </div>

        {/* <div className={styles.designStepsContainer}>
          <div>
            <div className="font-bold text-2xl mb-[12px]"> 3D Modeling and Layouts </div>
             <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              In this step, we bring the concepts to life through detailed 3D
              modeling and layouts. You'll get a realistic visualization of how
              your space will look once the project is completed. These
              renderings allow you to make informed decisions on design elements
              like materials, colors, and finishes before construction begins,
              ensuring every aspect of the project is exactly as you envisioned.
            </div>
          </div>

          <Image src={model3D} alt="err" width={400} className={styles.designInfoImages}/>
        </div> */}

        <div className={styles.designStepsContainer}>
          <Image
            src={Architecture}
            alt="err"
            width={500}
            className={styles.designInfoImages}
            // style={{ height: "350px", width: "400px"}}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
             4. Detailed Architectural Design
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              After the concept is finalized, we dive into the detailed
              architectural design, which includes floor plans, elevations, and
              3D visualizations. This allows you to fully visualize the space
              and make adjustments as needed before construction begins. Our
              detailed design also includes material specifications, finishes,
              and other technical aspects, ensuring that every element of your
              project is precisely planned for construction.
            </div>
          </div>
        </div>

        <div className={styles.designStepsContainer}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              5. Structural Planning and Engineering
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Structural integrity is key to the longevity and safety of your
              project. Our engineers work closely with the architectural team to
              ensure that the design is not only beautiful but also structurally
              sound. From foundation planning to load-bearing walls and roofing
              structures, we address all technical details, ensuring compliance
              with industry standards and local regulations. We also focus on
              sustainable design practices to minimize environmental impact.
            </div>
          </div>

          <Image
            src={Structure}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
        </div>

        <div className={styles.designStepsContainer}>
          <Image
            src={Approve}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
             6. Permitting and Approvals
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Navigating the permitting process can be complex, but we take care
              of all necessary paperwork and submissions to local authorities.
              This ensures your project meets all zoning regulations, building
              codes, and environmental standards. By managing the approvals
              process on your behalf, we eliminate potential delays and ensure
              that construction can proceed smoothly and on schedule.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignScreenOverviewSection;
