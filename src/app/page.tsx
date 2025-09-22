"use client";
import FilterOption from "@/components/FilterOption";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getCarsList, getCarBrands } from "../../service";
import { Car } from "../../service/types";

import Image from "next/image";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import CarList from "@/components/CarList";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [brandList, setBrandList] = useState<string[]>([]);
  const [brandOption, setBrandOption] = useState<string>("");
  const [minMax, setMinMax] = useState<string>("");

  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result);
    console.log(result);
  };
  //
  const getCarBrands_ = async () => {
    const brands = await getCarBrands();
    setBrandList(brands);
    console.log("Fetched Brands:", brands);
  };

  useEffect(() => {
    getCarBrands_();
  }, []);

  ///////

  useEffect(() => {
    console.log("Brand changed:", brandOption);
  }, [brandOption]);

  useEffect(() => {
    console.log("Filter changed:", minMax);
  }, [minMax]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <FilterOption
        brands={brandList}
        setBrandOption={setBrandOption}
        setMinMax={setMinMax}
      />

      <CarList carList={carsList} />
    </div>
  );
}
