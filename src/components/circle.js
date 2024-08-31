import React from "react";
import { motion } from "framer-motion";

function Cicle() {
  return (
    <div>
      <motion.div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "#ff6347",
          clipPath: "circle(50% at 50% 50%)",
        }}
        animate={{
          opacity: [1, 0, 1], // Sequence of opacity changes
        }}
        transition={{
          repeat: Infinity, // Repeat the animation indefinitely
          duration: 1, // Duration of one blink cycle (in seconds)
        }}
        className="mt-[20px] ml-5 md:mt-[25px]"
      />
    </div>
  );
}

export default Cicle;
