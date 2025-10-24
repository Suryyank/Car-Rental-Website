import React, { ReactNode, useEffect, useState, useContext } from "react";
import { useLocation } from "../../contexts/LocationContext";
import { LocationContext } from "../../contexts/LocationContext";
import { Car } from "../../service/types";

//Types
type DebounceSearchProps = {
  Headings?: React.ComponentType<{ title: string }>;
  carList: Car[];
  locationListArr: string[];
};

//

const DebounceSearch = ({ Headings, locationListArr }: DebounceSearchProps) => {
  const [locationFilter, SetLocationFilter] = useState("");
  const [locationList, SetLocationList] = useState<String[]>();

  /*--------------------------------------------------------*/
  const { location, setLocation } = useLocation();

  useEffect(() => {
    setLocation({ location: locationFilter });
    console.log("Location in context Changed");
  }, [locationFilter, setLocation]);

  /*--------------------------------------------------------*/

  //use context

  return (
    <>
      {Headings && <Headings title={"Find Near You"} />}
      <div className="flex justify-center">
        <div className="flex bg-gray-200 rounded-full px-5 w-[300px]">
          <div className="flex items-center">
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
              onChange={(e) => {
                SetLocationFilter(e.target.value);
                console.log(locationFilter);
              }}
              className="p-2 outline-none text-gray-600 bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[300px] items-center bg-gray-200 rounded-full">
        {locationListArr.map((loc) => (
          <h1 key={loc} className="text-black">
            {loc}
          </h1>
        ))}
      </div>
    </>
  );
};

export default DebounceSearch;
