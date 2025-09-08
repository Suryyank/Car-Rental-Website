"use client";
import FilterOption from "@/components/FilterOption";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <FilterOption />
    </div>
  );
}
