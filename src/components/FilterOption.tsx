import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { TiDelete } from "react-icons/ti";
import { useLocation } from "../../contexts/LocationContext";

type FilterProps = {
  brands: string[];
  //price: string[];
};

const FilterOption = ({ brands }: FilterProps) => {
  const [brandOption, setBrandOption] = useState<string>("");
  const [minMax, setMinMax] = useState<string>("");

  const { setFilters } = useContext(FilterContext)!;

  useEffect(() => {
    setFilters({
      brand: brandOption,
      price: minMax,
    });
  }, [brandOption, minMax, setFilters]);

  const handleClearFilters = () => {
    setBrandOption("");
    setMinMax("");
  };

  const areFiltersActive =
    (brandOption && brandOption !== "None") || (minMax && minMax !== "None");

  return (
    <div className="mt-10 flex justify-between">
      <div>
        <h2 className="text-[30px] font-bold text-black">Content Filter</h2>
        <h2 className="text-gray-700 font-semibold">Explore our catalogue</h2>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <select
          value={minMax}
          className="select bg-white font-bold text-black md:block hidden"
          onChange={(e) => {
            setMinMax(e.target.value);
          }}
        >
          <option value="" disabled>
            Price Range
          </option>
          <option>None</option>
          <option>Lowest</option>
          <option>Highest</option>
        </select>

        <select
          value={brandOption}
          className="select bg-white font-bold text-black w-auto "
          onChange={(e) => {
            setBrandOption(e.target.value);
          }}
        >
          <option value="" disabled>
            Brand
          </option>
          <option>None</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <button
          onClick={handleClearFilters}
          disabled={!areFiltersActive}
          className={`btn rounded-2xl border-0 bg-primary p-3 transition-all ${
            areFiltersActive ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <TiDelete className="size-5 md:hidden" />
          <div className="md:block hidden">Clear</div>
        </button>
      </div>
    </div>
  );
};

export default FilterOption;
