import React, { useState } from "react";
import CarCard from "./CarCard";
import { LuCircleX, LuUser } from "react-icons/lu";
import { useModalContext } from "../../../contexts/modal/ModalContext";

import EnquiryForm from "./EnquiryForm";

const CarModal = () => {
  const modalstate = useModalContext();
  const car = modalstate.selectedCar;
  if (!modalstate.isOpen || !car) {
    return null;
  }

  return (
    modalstate.isOpen && (
      <div className="fixed flex items-center justify-center inset-0 bg-black/50">
        <div className="absolute bg-white rounded-3xl mx-2">
          <button
            onClick={() => {
              modalstate.setIsOpen(false);
              modalstate.setSelectedCar(null);
            }}
            className="absolute right-2 top-2 p-2"
          >
            <LuCircleX size={30} color="red" />
          </button>
          <div className="flex items-center justify-between sm:p-8 sm:gap-8 py-8">
            <div className="hidden sm:flex">
              <CarCard key={car.carId} car={car} />
            </div>
            <div className="max-sm:py-8 max-sm:px-5">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CarModal;
