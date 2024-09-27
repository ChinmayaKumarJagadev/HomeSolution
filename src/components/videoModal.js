import React from "react";
import styles from "../styles/services.module.css"; // Add styles for the modal

const VideoModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.videoModalOverlay}>
      <div className={styles.videoModalContent}>
        <button className={styles.videoModalCloseButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default VideoModal;
