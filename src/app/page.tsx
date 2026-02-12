"use client";
import FilterOption from "@/components/molecule/FilterOption";
import Hero from "@/components/molecule/Hero";

import { getCarsList, getCarBrands, getLocationList } from "../../service";
import { Car } from "../../service/types";
import { FilterContext } from "../../contexts/FilterContext";

import { useEffect, useState, useContext } from "react";
import CarList from "@/components/organism/CarList";

import CarModal from "@/components/molecule/CarModal";
import { useModalContext } from "../../contexts/modal/ModalContext";
import { toast, ToastContainer, Bounce } from "react-toastify";

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

  const successToast = () => {
    toast("Enquiry Sent");
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />

      {/* <SearchInput /> */}
      <FilterOption brands={brandList} />

      <CarList carList={carsList} />
      <ToastContainer />
      <CarModal />
    </div>
  );
}
