import React, { useState } from "react";
import styles from "../../../styles/services.module.css";
import Customer1 from "../../../assets/Images/customer1.png";
import PlayIcon from "../../../assets/Images/video.png";
import Image from "next/image";
import VideoModal from "@/components/videoModal";

function Review() {
  const [openVideo, setOpenVideo] = useState(false);

  const details = [
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
    {
      thumbnailImage: Customer1,
      videoIcon: PlayIcon,
    },
  ];

  const handleVideoPlay = () => {
    setOpenVideo(true);
  };

  const handleCloseModal = () => {
    setOpenVideo(false);
  };

  return (
    <div className={styles.reviewService}>
      <div className={styles.reviewServiceTitle}>
        Dream Home By Homesolutionsstudio
      </div>

      <div className={styles.CustomerReviewImageContainer}>
        {details?.map((item, index) => {
          return (
            <div className={styles.serviceCard} key={index}>
              <Image
                src={item?.thumbnailImage}
                alt="error"
                className={styles.customerThumbnailImage}
              />
              <Image
                src={item?.videoIcon}
                alt="error"
                className={styles.VideoIcon}
                onClick={handleVideoPlay}
              />

              <div className={styles.serviceCustomerContainer}>
                <div className="flex gap-[10px]">
                  <div className={styles.quotesServices}>“ </div>
                  <div className={styles.ServiceDescption}>
                    We wanted a home where every room has it's own identity to
                    reflect each one of us living here. We needed lots of
                    storage, was spacious and warm because we entertain a lot.
                    DesignCafe did a wonderful job giving us exactly what we
                    needed. We are happy with the results.
                  </div>
                </div>

                <div className={styles.servciceCustomerName}>Chinmaya Kumar Jagadev</div>
                <div className={styles.servciceCustomerLocation}>3BHK, Mahindra Vivante, Mumbai</div>
              </div>
            </div>
          );
        })}
      </div>


      <VideoModal isOpen={openVideo} onClose={handleCloseModal}>
        <iframe
          width="1060"
          height="415"
          src="https://www.youtube.com/embed/eBoRQlwD0Cc?si=kzCOR8IP3sLp-SWP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </VideoModal>
    </div>
  );
}

export default Review;
