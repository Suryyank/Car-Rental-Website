import React from "react";
import { useFilters } from "../../../contexts/FilterContext";

type Props = {
  brands: string[];
};

const BrandPillBar = ({ brands }: Props) => {
  const filterContext = useFilters();

  const { filters, setFilters } = filterContext;

  const handleBrandClick = (brand: string) => {
    setFilters((prev) => ({
      ...prev,
      brand,
    }));
  };

  return (
    <div className="flex items-center justify-start my-4 gap-3">
      {brands.map((brand) => {
        const isActive = filters.brand === brand;

        return (
          <button
            key={brand}
            onClick={() => handleBrandClick(brand)}
            className={`
              rounded-full px-5 py-2 font-semibold transition text-black
              ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-slate-200/50 hover:bg-primary hover:text-white"
              }
            `}
          >
            {brand}
          </button>
        );
      })}
    </div>
  );
};

export default BrandPillBar;
