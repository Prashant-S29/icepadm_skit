"use client";

import MOBILE_MENU from "@/clientComponents/mobileMenu";
import { navLinks } from "@/contant";
import { logo } from "@/public";
import ScrollProgress from "@/utils/scrollProgress";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAVBAR = () => {
  const { xProgress, yProgress } = ScrollProgress();

  return (
    <>
      <div className="block xl:hidden z-[60] ">
        <MOBILE_MENU />
      </div>
      <nav
        className={`w-full sticky h-[70px] bg-white  flex justify-between z-[50] items-center duration-300   top-0 px-[20px] py-4
        ${yProgress < 100 ? "shadow-none" : "shadow-md"}
        `}
      >
        <Link href="/" className="flex gap-[10px] items-center">
          <div>
            <Image src={logo} alt="logo" className="w-[40px]" />
          </div>
          <div>
            <span className="font-bold">ICEPADM | SKIT</span>
          </div>
        </Link>
        <div className="hidden xl:flex gap-2 items-center">
          <div className="text-[15px] font-medium">
            <ul className="flex gap-[20px]">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.herf}>{navLink.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden xl:block">
          <Link href="/contact">
            <button className="text-[13px] px-4 py-2 font-semibold rounded-full bg-[#009688] text-white">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NAVBAR;
