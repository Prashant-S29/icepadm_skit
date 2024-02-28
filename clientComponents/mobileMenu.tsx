"use client";

import { navLinks } from "@/contant";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MOBILE_MENU = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenuActive = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <>
      <div
        className={`w-[50px] fixed aspect-square z-[70] duration-200  flex  justify-center items-center  cursor-pointer
        right-0 mx-5 my-[10px] rounded-full  ${
          mobileMenuActive ? " bg-white" : " bg-[#009688]"
        }`}
        onClick={handleMobileMenuActive}
      >
        <div className="-mt-[2px]">
          <div
            className={`w-[15px]  rounded-full duration-200 ${
              mobileMenuActive
                ? "-rotate-[45deg]  h-[1.5px]   bg-black"
                : "rotate-0 bg-white  h-[1px] "
            }`}
          />
          <div
            className={`w-[15px] rounded-full duration-200  ${
              mobileMenuActive
                ? "rotate-[45deg]   h-[1.5px] -mt-[1px] bg-black"
                : "rotate-0 bg-white mt-1  h-[1px] "
            }`}
          />
        </div>
      </div>

      <div
        className={`w-[300px] bg-[#009688] h-[calc(100vh+10px)] duration-200 flex p-3 items-center 
        shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-[65] fixed ease-in-out  top-0 ${
          mobileMenuActive ? "right-0" : "-right-[100%]"
        }`}
      >
        <div onClick={handleMobileMenuActive}>
          {navLinks.map((navLink, index) => (
            <Link key={index} href={navLink.herf}>
              <div className="p-3 hover:pl-6 duration-100">
                <span className="text-[16px] text-white font-medium">
                  {navLink.text}
                </span>
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <div className="p-3 hover:pl-6 duration-100">
              <span className="text-[16px] text-white font-medium">
                Contact
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="flex absolute bottom-0 left-0 m-5 gap-[10px] items-center"
          >
            <div>
              <Image src={logo} alt="logo" className="w-[40px]" />
            </div>
            <div>
              <span className="font-bold text-white">ICEPADM | SKIT</span>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full z-[60]  min-h-screen duration-200 ${
          mobileMenuActive
            ? "pointer-events-auto bg-[#00000028] "
            : "pointer-events-none bg-[#00000000]"
        }`}
        onClick={handleMobileMenuActive}
      />
    </>
  );
};

export default MOBILE_MENU;
