import React, { useContext, useMemo } from "react";
import CarCard from "./CarCard";
import { Car } from "../../service/types";
import { FilterContext } from "../../contexts/FilterContext";

type CarListProps = {
  carList: Car[];
};

const CarList = ({ carList }: CarListProps) => {
  const { filters } = useContext(FilterContext)!;

  const filteredCars = useMemo(() => {
    console.log("Filtering");
    return carList.filter((car) => {
      if (filters.brand === "" || filters.brand === "None") {
        return true;
      } else {
        return car.carBrand === filters.brand;
      }
    });
  }, [carList, filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <CarCard key={car.name} car={car} />
      ))}
    </div>
  );
};

export default CarList;
