import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-5">
      <div>
        <h2 className="text-black font-bold text-[40px]">
          Rent Out Cars with Wheelie in Minutes
        </h2>
        <h2 className="text-gray-700 text-[20px]">
          {" "}
          Book your ride hassle-free in minutes and pay as you go
        </h2>
        <Button
          title="Explore Now"
          type="button"
          className="my-4 hover:bg-blue-800 hover:cursor-pointer"
        />
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Image
          src="/herocar.png"
          alt="HeroCar"
          width={1200}
          height={800}
          className="h-auto w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] object-contain mx-auto"
          sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 90vw,
           1200px"
        />
      </div>
    </div>
  );
};

export default Hero;
