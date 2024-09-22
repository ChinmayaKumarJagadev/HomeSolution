// components/Modal/Modal.js
import React from "react";
import styles from "../../../styles/livingRoom.module.css"; // Import modal styles

const LivingRoomModal = ({
  show,
  onClose,
  title,
  description,
  buttonText,
  children,
}) => {
  console.log(children);

  if (!show) return null;

  return (
    <div className={styles.livingRoomModalOverlay}>
      
      <div className={styles.livingRoomModalContent}>
        {/* <div className={styles.modalHeader}>
          <h2 className={styles.livingRoomModalTitle}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div> */}

        <div className={styles.livingRoomfullModalContentContainer}>
        <button className={styles.closeButtonModalLivingRoom} onClick={onClose}>
          &times;
        </button>
        <div className={styles.livingRoomModalRightContainer}>{children}</div>

        <div className={styles.livigRoomModalLeftContainer}>
          <div className={styles.livingRoomModalTitle}>{title}</div>
          <div className={styles.livingRoomModalDesc}>{description}</div>
          <button className={styles.livingRoomModalButton}>{buttonText}</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LivingRoomModal;
