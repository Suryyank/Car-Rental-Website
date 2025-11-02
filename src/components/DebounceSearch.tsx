import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "../../contexts/LocationContext";
import { Car } from "../../service/types";
import { GiButtonFinger } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";

type DebounceSearchProps = {
  Headings?: React.ComponentType<{ title: string }>;
  carList: Car[];
  locationListArr: string[];
};

const DebounceSearch = ({ Headings, locationListArr }: DebounceSearchProps) => {
  const [locationFilter, setLocationFilter] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setLocation } = useLocation();

  //--------------------------------------
  const handleClearFilters = () => {
    setLocationFilter("");
  };

  const locationFilterStatus = locationFilter !== "None";

  //--------------------------------------
  // update context when value changes
  useEffect(() => {
    setLocation({ location: locationFilter });
  }, [locationFilter, setLocation]);

  // filter results
  useEffect(() => {
    if (locationFilter.trim() === "") {
      setFilteredLocations([]);
    } else {
      const results = locationListArr.filter((loc) =>
        loc.toLowerCase().includes(locationFilter.toLowerCase())
      );
      setFilteredLocations(results);
    }
  }, [locationFilter, locationListArr]);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 space-y-4">
      {Headings && <Headings title="Find Near You" />}

      {/* Search Wrapper */}
      <div className="relative w-full max-w-sm" ref={wrapperRef}>
        {/* Search Bar */}
        <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Location"
            value={locationFilter}
            onFocus={() => setShowResults(true)}
            onChange={(e) => {
              setLocationFilter(e.target.value);
              setShowResults(true);
            }}
            className="p-2 outline-none text-gray-700 bg-transparent w-full"
          />

          <button
            onClick={handleClearFilters}
            disabled={!locationFilterStatus}
            className={`transition-all ${
              locationFilterStatus
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <TiDelete className="size-7 text-black hover:text-red-600" />
          </button>
        </div>

        {/* Dropdown */}
        {showResults && filteredLocations.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
            {filteredLocations.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocationFilter(loc);
                  setShowResults(false);
                }}
                className="block w-full px-4 py-2 text-gray-800 text-left hover:bg-gray-100"
              >
                {loc}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DebounceSearch;
