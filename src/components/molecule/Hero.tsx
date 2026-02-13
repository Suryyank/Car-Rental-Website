import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

import { interFont } from "@/fonts/fonts";
import BrandBarMoving from "../atoms/BrandBarMoving";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 mb-0 h-screen">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-black font-extrabold text-[40px] ${interFont.className}`}
          >
            Effortless Car Rentals, Powered by Wheelie
          </h2>
          <h2 className="text-gray-700 text-[20px]">
            {" "}
            Book or rent out vehicles in minutes with secure payments and total
            flexibility.
          </h2>
          <Button
            title="Explore Now"
            type="button"
            className="my-4 hover:bg-blue-800 hover:cursor-pointer"
            onClick={() => {
              router.push("/home");
              // document
              //   .getElementById("carlist")
              //   ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-8 md:px-12 lg:px-20"
        >
          <Image
            src="/herocar.png"
            alt="HeroCar"
            width={1200}
            height={800}
            className="h-auto w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] object-contain mx-auto"
            sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 90vw,
           1200px"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full col-span-full -mt-15"
        >
          <BrandBarMoving />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
