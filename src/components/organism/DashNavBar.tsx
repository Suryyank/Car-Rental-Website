import React from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuLogIn, LuUserPlus } from "react-icons/lu";
import { BiLogIn } from "react-icons/bi";

const DashNavBar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between w-full relative bg-amber-300/0">
      <div /*className="absolute left-0 pl-4 flex items-center"*/ className="">
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
      </div>

      <div className="hidden md:flex md:justify-center md:gap-4">
        <Button
          title="Log-In"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer font-extralight flex items-center justify-center gap-3 "
          icon={<LuLogIn />}
        />
        <Button
          title="Sign-Up"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer font-extralight flex items-center justify-center gap-3 "
          icon={<LuUserPlus />}
        />
      </div>
    </div>
  );
};

export default DashNavBar;
