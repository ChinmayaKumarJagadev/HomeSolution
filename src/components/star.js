import React from 'react';

const Star = ({ filled, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: 'pointer',
        color: filled ? '#FFD700' : '#C0C0C0', // Gold for filled, Silver for unfilled
        fontSize: '24px', // Adjust the size as needed
        zIndex:"2",
        position: "relative"
      }}
    >
      ★
    </span>
  );
};

export default Star;
