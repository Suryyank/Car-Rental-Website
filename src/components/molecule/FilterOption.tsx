import { useState, useEffect, useContext } from "react";
import { useFilters } from "../../../contexts/FilterContext";
import { TiDelete } from "react-icons/ti";
import { getLocationList } from "../../../service";
import Headings from "../atoms/Headings";
import { useLocation } from "../../../contexts/LocationContext";
import SearchInput from "./SearchInput";
import BrandPillBar from "./BrandPillBar";
import DebounceSearch from "./DebounceSearch";

type FilterProps = {
  brands: string[];
  //price: string[];
};

const FilterOption = ({ brands }: FilterProps) => {
  const [brandOption, setBrandOption] = useState<string>("");
  const [minMax, setMinMax] = useState<string>("");
  const [locationList, SetLocationList] = useState<string[]>([]);

  const getLocationList_ = async () => {
    const location = await getLocationList();
    SetLocationList(location);
    console.log("Locations are ", location);
  };

  useEffect(() => {
    getLocationList_();
  }, []);

  const { isActive, setFilters, clearFilters, filters } = useFilters();

  useEffect(() => {
    setFilters({
      brand: brandOption,
      price: minMax,
    });
  }, [brandOption, minMax, setFilters]);

  return (
    <div>
      <div className="mt-10 flex items-center justify-between">
        <div>
          <h2 className="text-[25px] font-semibold text-black">Filters</h2>
        </div>
        <div className="w-full hidden">
          <DebounceSearch locationListArr={locationList} Headings={Headings} />
        </div>

        <div className="mt-3 flex items-center gap-3 ">
          {/* <select
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
        </select> */}

          <select
            value={filters.brand}
            className="select bg-white font-bold text-black w-[100px] truncate"
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
            onClick={clearFilters}
            className={`btn rounded-2xl border-0 bg-primary p-3 transition-all ${
              isActive ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {isActive && <TiDelete className="size-5 md:hidden" />}
            <div className="md:block hidden">Clear</div>
          </button>
        </div>
      </div>
      <div className="max-sm:hidden">
        <BrandPillBar brands={brands} />
      </div>
    </div>
  );
};

export default FilterOption;
