"use client";

import React, { useContext, useMemo, useState } from "react";
import CarCard from "../molecule/CarCard";
import { Car } from "../../../service/types";
import { FilterContext } from "../../../contexts/FilterContext";
import { useLocation } from "../../../contexts/LocationContext";

type CarListProps = {
  carList: Car[];
};

const CarList = ({ carList }: CarListProps) => {
  const { filters } = useContext(FilterContext)!;
  const { location } = useLocation();

  const filteredCars = useMemo(() => {
    console.log("Filtering");

    const selectedBrand = filters.brand;
    const selectedLocation = location.location;

    return carList.filter((car) => {
      const brandMatch =
        selectedBrand === "" ||
        selectedBrand === "None" ||
        car.carBrand === selectedBrand;

      const locationMatch =
        selectedLocation === "" || car.location === selectedLocation;

      return brandMatch && locationMatch;
    });
  }, [carList, filters, location]);

  return (
    <>
      <div
        id="carlist"
        className="w-full h-[2px] bg-slate-400/20 mt-5 rounded-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {filteredCars.map((car) => (
          <CarCard key={car.carId} car={car} />
        ))}
      </div>
    </>
  );
};

export default CarList;
