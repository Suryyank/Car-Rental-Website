import React, { useState } from "react";
import Image from "next/image";
import { GiSteeringWheel } from "react-icons/gi";
import { useModalContext } from "../../../contexts/modal/ModalContext";
import { BsFuelPump } from "react-icons/bs";

const CarCard = (props: any) => {
  const [car, setCar] = useState(props.car);
  console.log("from car card");

  const carmodal = useModalContext();

  // const openModal = () => {
  //   carmodal.setIsOpen(true);
  //   console.log(carmodal.isOpen);
  // };
  return (
    <button
      onClick={() => {
        carmodal.setIsOpen(true);
        carmodal.setSelectedCar(car);
      }}
    >
      <div className="relative  rounded-2xl px-8 py-3 hover:scale-102 hover:outline-2 outline-primary border-slate-300 border duration-210 mt-5 flex flex-col items-center bg-gray-200/20">
        <h2 className="text-[25px] font-bold text-black mb-2 font-mono">
          {car.name}
        </h2>
        <h2 className="text-[22px] font-extrabold text-black font-mono">
          ₹ {car.price}
          <span className="text-[18px text-black font-semibold font-mono">
            {" "}
            /day
          </span>
        </h2>

        <Image
          src={car.carImage?.url}
          alt={car.name}
          width={220}
          height={200}
          className="w-[250px] h-[250px] mb-3 object-contain "
        />

        <div className="flex justify-between gap-20">
          <div className="flex flex-col items-center">
            <GiSteeringWheel className="text-black size-8" color="bg-primary" />
            <h2 className="text-black font-medium">{car.carType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <BsFuelPump className="text-black size-8" />
            <h2 className="text-black font-medium">{car.carAvg}/kmpl</h2>
          </div>
        </div>
        {/* <div className="mt-8 mb-1.5">
          <Button
            title={"Rent"}
            className="hover:scale-110 w-[150px] font-bold"
            onClick={() => {}}
          />
        </div> */}
      </div>
    </button>
  );
};

export default CarCard;
