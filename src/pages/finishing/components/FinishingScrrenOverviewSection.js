import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/designAndPlanning.module.css";
import Site1 from "../../../assets/Images/finishing1.jpg";
import Site2 from "../../../assets/Images/finishing9.jpg";
import Site3 from "../../../assets/Images/finishing7.jpg";
import Site4 from "../../../assets/Images/finishing4.jpg";
import Site5 from "../../../assets/Images/finishing5.jpg";
import Site6 from "../../../assets/Images/finishing6.jpg";

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
            <Link href="/finishing">
              <span
                className={isActive("/finishing") ? "text-black md:text-[16px] text-[12px]" : "text-black md:text-[16px] text-[12px]"}
              >
                Finishing and Handover
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.designScreenTopContent}>
        <div className={styles.overviewDesignTitle}>
          Our Finishing and Handover Process
        </div>
        <div className={styles.overviewDesignDesc}>
          Seamless transition to your dream home with expert finishing touches.
        </div>
      </div>

      <div className="mt-[50px]">
        <div className={styles.designStepsContainer}>
          <div className="flex flex-col">
            <div>
              <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
                1. Painting and Interior Finishing
              </div>
              <div className="text-textColor text-[12px] md:text-[16px] text-justify">
                This step involves adding the final touches that bring the
                interior of your home to life. We start by painting the walls
                and ceilings with your chosen colors, giving the space a fresh,
                finished look. Flooring is installed, whether it’s hardwood,
                tile, or carpet, according to your preferences. Cabinetry,
                countertops, and other interior features like trim work and
                doors are also added during this phase. Our attention to detail
                ensures that all finishes are smooth, precise, and aligned with
                the overall design. This stage creates a comfortable and
                polished interior, ready for you to enjoy.
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

        <div
          className={styles.designStepsContainer}
          style={{ marginTop: "30px" }}
        >
          <Image
            src={Site2}
            alt="err"
            width={450}
            className={styles.siteInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              2. Installing Final Fixtures and Equipment
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              During this phase, we focus on adding the essential fixtures that
              make your home fully functional. This includes installing light
              fixtures, switches, outlets, and other electrical components.
              Plumbing fixtures such as sinks, faucets, showers, and toilets are
              also put in place. Kitchen and bathroom appliances, like ovens,
              dishwashers, and water heaters, are installed as well. Every
              fixture is checked to ensure it is properly connected and
              operational. This step enhances the practicality of your home,
              ensuring that all systems are ready to use as you prepare for
              occupancy.
            </div>
          </div>
        </div>

        <div
          className={styles.designStepsContainer}
          style={{ marginTop: "30px" }}
        >
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              3. Final Inspection
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              At this stage, we conduct a thorough inspection to ensure
              everything in your home meets our high-quality standards. We
              carefully examine the construction, installations, and finishes to
              identify any issues that need addressing. This includes checking
              plumbing, electrical systems, walls, flooring, and other critical
              elements for defects or incomplete work. Our team ensures that all
              aspects of the project are completed to your satisfaction and
              align with the original plans. By performing this meticulous
              check, we guarantee that your home is move-in ready, free of any
              flaws, and meets our commitment to excellence.
            </div>
          </div>

          <Image
            src={Site3}
            alt="err"
            width={450}
            className={styles.siteInfoImages}
          />
        </div>

        <div
          className={styles.designStepsContainer}
          style={{ marginTop: "30px" }}
        >
          <Image
            src={Site4}
            alt="err"
            width={400}
            className={styles.siteInfoImages}
          />
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              4. Cleaning the Home
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              Once construction is complete, we perform a thorough cleaning of
              the entire site to ensure it's ready for occupancy. This includes
              removing all leftover construction materials, dust, and debris
              from the home’s interior and exterior. We clean every area,
              including floors, windows, and surfaces, leaving the space
              spotless and tidy. Our goal is to deliver a clean, polished home
              that looks fresh and ready for move-in. This final step not only
              enhances the appearance of the property but also ensures that the
              home is safe and comfortable for the client to enter.
            </div>
          </div>
        </div>
        <div
          className={styles.designStepsContainer}
          style={{ marginTop: "30px" }}
        >
          <div>
            <div className="md:text-[24px] font-bold text-[14px] mb-[12px]">
              5. Handover and Client Walkthrough
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              In this final step, we conduct a thorough walkthrough of the home
              with the client. During the walkthrough, we explain how various
              systems and appliances work, ensuring the client understands the
              functionality of the home. We also address any last-minute
              questions or concerns the client may have. This is an opportunity
              to review the completed work, verify that all elements meet the
              agreed-upon specifications, and confirm client satisfaction. Once
              everything is confirmed, we officially hand over the keys, marking
              the completion of the project and the beginning of the client’s
              new journey in their home.
            </div>
          </div>

          <Image
            src={Site5}
            alt="err"
            width={400}
            className={styles.siteInfoImages}
          />
        </div>

        <div
          className={styles.designStepsContainer}
          style={{ marginTop: "30px" }}
        >
          <Image
            src={Site6}
            alt="err"
            width={400}
            className={styles.siteInfoImages}
          />
          <div>
            <div className="md:text-[28px] font-bold text-[14px] mb-[12px]">
              6. Customer Care After Handover
            </div>
            <div className="text-textColor text-[12px] md:text-[16px] text-justify">
              After your home is handed over, we continue to offer support to
              ensure everything functions as expected. Our team is available to
              address any concerns or issues that may arise during the initial
              occupancy period, such as minor adjustments or system tweaks. This
              ensures a seamless transition and complete satisfaction with your
              new home. Whether it’s a question about operating systems or
              fixing small issues, we’re here to help. Our commitment extends
              beyond the construction phase, ensuring you enjoy your new space
              with peace of mind.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignScreenOverviewSection;
