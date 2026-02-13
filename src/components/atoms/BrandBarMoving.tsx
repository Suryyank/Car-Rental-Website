"use client";

import React from "react";
import { motion } from "motion/react";
import {
  SiFerrari,
  SiFord,
  SiHonda,
  SiHyundai,
  SiJeep,
  SiMahindra,
  SiMercedes,
  SiToyota,
} from "react-icons/si";
import { IconType } from "react-icons";

const brands: IconType[] = [
  SiHyundai,
  SiHonda,
  SiJeep,
  SiMercedes,
  SiFerrari,
  SiFord,
  SiToyota,
  SiMahindra,
];

const BrandBarMoving = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Render twice for seamless loop */}
        {[...brands, ...brands].map((Brand, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              text-gray-500
              hover:text-black
              transition-colors duration-200
            "
          >
            <Brand size={45} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandBarMoving;
