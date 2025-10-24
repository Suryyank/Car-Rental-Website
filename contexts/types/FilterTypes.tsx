import { ReactNode, SetStateAction } from "react";

export type FilterState = {
  brand: string;
  price: string;
};

export type FilterContextTypes = {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
};

export type FilterContextProviderProps = {
  children: ReactNode;
};
