"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import CarModal from "@/components/molecule/CarModal";
import DashNavBar from "@/components/organism/DashNavBar";
import { getCarBrands, getCarsList } from "../../../service";
import { Car } from "../../../service/types";
import FilterOption from "@/components/molecule/FilterOption";
import CarList from "@/components/organism/CarList";
const page = () => {
  const [brandList, setBrandList] = useState<string[]>([]);
  const [carsList, setCarsList] = useState<Car[]>([]);

  const getCarBrands_ = async () => {
    const brands = await getCarBrands();
    setBrandList(brands);
    console.log("Fetched Brands:", brands);
  };

  useEffect(() => {
    getCarBrands_();
  }, []);

  const getCarsList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result);
    console.log(result);
  };

  useEffect(() => {
    getCarsList_();
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full  px-5 py-4">
        <DashNavBar />
      </div>
      <div className="p-5 sm:px-10 md:px-20">
        <FilterOption brands={brandList} />
        <CarList carList={carsList} />
        <ToastContainer />
        <CarModal />
      </div>
    </>
  );
};

export default page;
