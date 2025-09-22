import React from "react";

type FilterProps = {
  brands: string[];
  setBrandOption: React.Dispatch<React.SetStateAction<string>>;
  setMinMax: React.Dispatch<React.SetStateAction<string>>;
};

const FilterOption = ({ brands, setBrandOption, setMinMax }: FilterProps) => {
  return (
    <div className="mt-10 flex justify-between">
      <div>
        <h2 className="text-[30px] font-bold text-black">Content Filter</h2>
        <h2 className="text-gray-700 font-semibold">Explore our catalogue</h2>
      </div>
      <div className="mt-3 flex gap-3">
        <select
          defaultValue="Price Range"
          className="select bg-white font-bold text-black"
          onChange={(e) => {
            setMinMax(e.target.value);
          }}
        >
          <option disabled={true}>Price Range</option>
          <option>Lowest</option>
          <option>Highest</option>
        </select>

        <select
          defaultValue="Manufacturer"
          className="select bg-white font-bold text-black w-auto md:block hidden"
          onChange={(e) => {
            setBrandOption(e.target.value);
          }}
        >
          <option disabled={true}>Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOption;
