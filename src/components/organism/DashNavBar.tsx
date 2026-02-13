import React from "react";

import Button from "../atoms/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuLogIn, LuUserPlus } from "react-icons/lu";
import { BiLogIn } from "react-icons/bi";
import DebounceSearch from "../molecule/DebounceSearch";
import Headings from "../atoms/Headings";
import { getLocationList } from "../../../service";
import { useState, useEffect } from "react";

const DashNavBar = () => {
  const router = useRouter();
  const [locationList, SetLocationList] = useState<string[]>([]);

  const getLocationList_ = async () => {
    const location = await getLocationList();
    SetLocationList(location);
    console.log("Locations are ", location);
  };

  useEffect(() => {
    getLocationList_();
  }, []);

  return (
    <div className="flex items-center justify-between w-full relative bg-amber-300/0">
      <div
        /*className="absolute left-0 pl-4 flex items-center"*/ className="flex items-center justify-start gap-5 w-full bg-amber-400/0"
      >
        <Image
          src="/logo.png"
          alt="wheelie"
          height={60}
          width={150}
          priority
          onClick={() => {
            router.push("/home");
          }}
        />
        <DebounceSearch locationListArr={locationList} Headings={Headings} />
      </div>

      <div className="flex items-center gap-1 md:flex md:justify-center md:gap-4 mx-2">
        <Button
          title="Log-In"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer font-extralight w-[130px] px-2 flex items-center justify-center gap-3 "
          icon={<LuLogIn />}
        />
        <Button
          title="Sign-Up"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer font-extralight w-[140px] px-2 flex items-center justify-center gap-3 "
          icon={<LuUserPlus />}
        />
      </div>
    </div>
  );
};

export default DashNavBar;
