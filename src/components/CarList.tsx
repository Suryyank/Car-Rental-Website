import React from "react";
import CarCard from "./CarCard";
import { Car } from "../../service/types";

type CarListProps = {
  carList: Car[];
};

const CarList = ({ carList }: CarListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {carList.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
