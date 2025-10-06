"use client";
import { createContext, use, useState } from "react";
import {
  FilterState,
  FilterContextTypes,
  FilterContextProviderProps,
} from "./types/FilterTypes";

export const FilterContext = createContext<FilterContextTypes | undefined>(
  undefined
);

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: "",
    price: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
