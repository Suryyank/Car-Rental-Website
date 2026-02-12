"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { usePathname } from "next/navigation";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

const forbiddenPathname = ["/home"];

const NavBar = () => {
  const pathName = usePathname();
  if (forbiddenPathname.includes(pathName)) {
    return null;
  }
  return (
    <div className="flex items-center justify-between w-full relative ">
      <div /*className="absolute left-0 pl-4 flex items-center"*/>
        <Image src="/logo.png" alt="wheelie" height={60} width={150} />
      </div>

      <div className="hidden md:flex md:justify-center md:gap-4">
        <Button
          title="Home"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer"
        />
        <Button
          title="History"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer"
        />
        <Button
          title="Contact"
          type="button"
          className="hover:bg-secondary hover:cursor-pointer"
        />
      </div>
      <div className=""></div>
      {/* <div>
        <SignedOut>
          <SignInButton>
            <button className="px-3 py-2 md:px-4 rounded-2xl bg-primary text-white font-mono shadow-md transition duration-200 hover:bg-blue-800 hover:cursor-pointer mx-1 md:mx-2">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-3 py-2 md:px-4 rounded-2xl bg-primary text-white font-mono shadow-md transition duration-200 hover:bg-blue-800 hover:cursor-pointer mx-1 md:mx-2">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div> */}
    </div>
  );
};

export default NavBar;
