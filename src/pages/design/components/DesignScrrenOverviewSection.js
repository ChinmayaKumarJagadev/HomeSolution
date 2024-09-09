import React from "react";
import styles from "../../../styles/designAndPlanning.module.css";
import Consult from "../../../assets/Images/personal-consultation.png";
import Concept from "../../../assets/Images/concept3.jpg";
// import model3D from "../../../assets/Images/3d.png";
import Site from "../../../assets/Images/site-visit.jpg";
import Budget from "../../../assets/Images/budget.png";
import Approve from "../../../assets/Images/approve.png";
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
                Design and Planning
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.designScreenTopContent}>
        <div className={styles.overviewDesignTitle}>
          Our Design and Planning Process
        </div>
        <div className={styles.overviewDesignDesc}>
          Turning Your Vision into Reality with Expert Planning
        </div>
      </div>

      <div className="mt-[50px]">
        <div className={styles.designStepsContainer}>
          <div className="flex flex-col">
            <div>
              <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">1. Consultation </div>
              <div className="text-textColor text-[12px] md:text-[16px] text-justify">
                During the initial consultation, we take the time to understand
                your needs, vision, and style preferences. Our team will listen
                carefully to your ideas, discuss your project goals, and assess
                the scope of work. This meeting serves as the foundation for the
                entire project, allowing us to align with your expectations and
                gather all the necessary information to create a design that
                reflects your personality and meets your functional
                requirements.
              </div>
            </div>
          </div>

          <Image
            src={Consult}
            alt="err"
            width={350}
            className={styles.designInfoImages}
          />
        </div>

        <div className={styles.designStepsContainer}>
          <Image
            src={Concept}
            alt="err"
            width={450}
            className={styles.designInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              2. Concept Development{" "}
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              After gathering insights from the consultation, we begin crafting
              the concept for your project. This phase focuses on brainstorming
              and transforming your ideas into a creative design plan. Our team
              will explore various layout options, styles, and materials to
              present you with the most suitable design concepts that align with
              your needs, ensuring an aesthetic and functional solution tailored
              to your space.
            </div>
          </div>
        </div>

        <div className={styles.designStepsContainer}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]"> 3. Site Visit </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              The site visit is a crucial step where our team assesses the
              physical space and existing conditions of the project location.
              During this visit, we evaluate important factors such as site
              dimensions, accessibility, and structural considerations. This
              hands-on assessment allows us to better understand the
              environment, ensuring that the design concepts align with the
              actual space. Additionally, it helps in identifying any potential
              challenges early in the process, allowing us to plan more
              efficiently and provide accurate recommendations for a smooth
              execution of the project.
            </div>
          </div>

          <Image
            src={Site}
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
            src={Budget}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">4. Budget Planning </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Our team prepares a detailed budget plan, breaking down the costs
              for each phase of the project. We work closely with you to ensure
              the project stays within your budget while maintaining the highest
              quality of materials and workmanship. This step provides
              transparency and helps avoid unexpected costs, allowing you to
              confidently move forward with the project.
            </div>
          </div>
        </div>

        <div className={styles.designStepsContainer}>
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">5. Final Approval </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Once all designs, layouts, and budgets have been reviewed and
              approved, we proceed with finalizing the plans. This stage
              involves getting your approval for the final design and timeline.
              It ensures that every detail is aligned with your expectations
              before the construction or installation phase begins. After this
              step, we are ready to bring your vision to life.
            </div>
          </div>

          <Image
            src={Approve}
            alt="err"
            width={400}
            className={styles.designInfoImages}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignScreenOverviewSection;
