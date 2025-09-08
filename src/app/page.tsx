"use client";
import FilterOption from "@/components/FilterOption";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getCarsList, getCarBrands } from "../../service";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [carList, setCarList] = useState<any[]>([]);
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    getCarsList_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
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

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <FilterOption brands={brandList} />
    </div>
  );
}
