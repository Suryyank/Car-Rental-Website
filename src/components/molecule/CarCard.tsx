// import React, { useState } from "react";
// import Image from "next/image";
// import { GiSteeringWheel } from "react-icons/gi";
// import { useModalContext } from "../../../contexts/modal/ModalContext";
// import { BsFuelPump } from "react-icons/bs";

// const CarCard = (props: any) => {
//   const [car, setCar] = useState(props.car);

//   const carmodal = useModalContext();

//   // const openModal = () => {
//   //   carmodal.setIsOpen(true);
//   //   console.log(carmodal.isOpen);
//   // };
//   return (
//     <button
//       onClick={() => {
//         carmodal.setIsOpen(true);
//         carmodal.setSelectedCar(car);
//       }}
//     >
//       <div className="relative rounded-2xl px-8 py-3 hover:scale-102 hover:outline-2 outline-primary border-slate-300 border duration-210 mt-5 grid grid-cols-2 items-center bg-gray-200/20">
//         <div className="col-span-1">
//           <h2 className="text-[25px] font-bold text-black">{car.name}</h2>
//           <h1 className="text-[15px] text-slate-400">{car.location}</h1>
//         </div>
//         <h2 className="text-[22px] font-extrabold text-black font-mono">
//           ₹ {car.price}
//           <span className="text-[18px text-black font-semibold font-mono">
//             {" "}
//             /day
//           </span>
//         </h2>

//         <Image
//           src={car.carImage?.url}
//           alt={car.name}
//           width={220}
//           height={200}
//           className="w-[250px] h-[250px] mb-3 object-contain col-span-2"
//         />

//         <div className="flex justify-between gap-20">
//           <div className="flex flex-col items-center">
//             <GiSteeringWheel className="text-black size-8" color="bg-primary" />
//             <h2 className="text-black font-medium">{car.carType}</h2>
//           </div>
//           <div className="flex flex-col items-center">
//             <BsFuelPump className="text-black size-8" />
//             <h2 className="text-black font-medium">{car.carAvg}/kmpl</h2>
//           </div>
//         </div>
//         {/* <div className="mt-8 mb-1.5">
//           <Button
//             title={"Rent"}
//             className="hover:scale-110 w-[150px] font-bold"
//             onClick={() => {}}
//           />
//         </div> */}
//       </div>
//     </button>
//   );
// };

// export default CarCard;

import React from "react";
import Image from "next/image";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { useModalContext } from "../../../contexts/modal/ModalContext";
import { BiHeart } from "react-icons/bi";
import { LuBookmark, LuHeart } from "react-icons/lu";
import { motion } from "motion/react";

interface CarCardProps {
  car: any;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const carmodal = useModalContext();

  const handleClick = () => {
    carmodal.setSelectedCar(car);
    carmodal.setIsOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={handleClick}
      className="
        group cursor-pointer
        rounded-2xl bg-white
        shadow-sm hover:outline-2 hover:outline-primary
        transition-outline duration-150
        p-4
      "
    >
      {/* Image */}
      <div className="relative w-full h-[180px] mb-3">
        <Image
          src={car.carImage?.url}
          alt={car.name}
          fill
          className="object-contain"
        />
        <div className="absolute right-1">
          <div className="flex items-center border border-primary rounded-full p-2 hover:bg-slate-200">
            <LuBookmark color="#155dfc" fill="#155dfc" size={20} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{car.name}</h2>
          <p className="text-sm text-gray-500">{car.location}</p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">₹ {car.price}</p>
          <span className="text-xs text-gray-500">/ day</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px bg-gray-200" />

      {/* Specs */}
      <div className="flex justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <GiSteeringWheel className="text-gray-700" size={18} />
            <span>{car.carType}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsFuelPump className="text-gray-700" size={18} />
            <span>{car.carAvg} kmpl</span>
          </div>
        </div>

        <div className="bg-primary px-4 rounded-full py-1">
          <span className="font-bold text-white">View</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
