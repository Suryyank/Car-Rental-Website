import React from "react";

const FilterOption = () => {
  return (
    <div className="mt-10 flex justify-between">
      <div>
        <h2 className="text-[30px] font-bold text-black">Content Filter</h2>
        <h2 className="text-gray-700 font-semibold">Explore our catalogue</h2>
      </div>
      <div className="mt-3 flex gap-3">
        <select
          defaultValue="Price"
          className="select bg-white font-bold text-black"
        >
          <option disabled={true}>Price Range</option>
          <option>Lowest</option>
          <option>Highest</option>
        </select>

        <select
          defaultValue="Manufacturer"
          className="select bg-white font-bold text-black w-auto md:block hidden"
        >
          <option disabled={true}>Manufacturer</option>
          <option>Honda</option>
          <option>Highest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOption;
