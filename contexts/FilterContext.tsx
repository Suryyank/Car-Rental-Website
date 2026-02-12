"use client";
import { createContext, useContext, useState, useMemo } from "react";
import {
  FilterState,
  FilterContextTypes,
  FilterContextProviderProps,
} from "./types/FilterTypes";

export const FilterContext = createContext<FilterContextTypes | undefined>(
  undefined,
);

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: "",
    price: "",
  });
  const isActive = useMemo(() => {
    return Boolean(filters.brand || filters.price);
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      brand: "",
      price: "",
    });
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, isActive, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!FilterContext) {
    throw new Error("Use Withing Provider");
  }
  return ctx;
};
