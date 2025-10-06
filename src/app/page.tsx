"use client";
import FilterOption from "@/components/FilterOption";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getCarsList, getCarBrands, getLocationList } from "../../service";
import { Car } from "../../service/types";
import { FilterContext } from "../../contexts/FilterContext";

import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import CarCard from "@/components/CarCard";
import CarList from "@/components/CarList";
import DebounceSearch from "@/components/DebounceSearch";
import Headings from "@/components/atoms/Headings";

export default function Home() {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [brandList, setBrandList] = useState<string[]>([]);

  const [locationList, SetLocationList] = useState<string[]>([]);

  const filterstate = useContext(FilterContext);
  console.log(filterstate);

  // Full Car List
  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result);
    console.log(result);
  };

  // Fetches all Car Brands

  const getCarBrands_ = async () => {
    const brands = await getCarBrands();
    setBrandList(brands);
    console.log("Fetched Brands:", brands);
  };

  useEffect(() => {
    getCarBrands_();
  }, []);

  /*---------------------------------------------------*/

  // Get location list

  const getLocationList_ = async () => {
    const location = await getLocationList();
    SetLocationList(location);
    console.log("Locations are ", location);
  };

  useEffect(() => {
    getLocationList_();
  }, []);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <DebounceSearch Headings={Headings} carList={carsList} />
      {/* <SearchInput /> */}
      <FilterOption brands={brandList} />

      <CarList carList={carsList} />
    </div>
  );
}
