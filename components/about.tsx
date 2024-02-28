import { srj } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaDownload } from "react-icons/fa";

const ABOUT = () => {
  return (
    <>
      <div
        id="aboutConfrence"
        className=" flex relative mt-5 scroll-m-[150px]  p-5 justify-center items-center w-full"
      >
        <div className="text-center h-full flex items-center ">
          <div className="text">
            {/* <div>
              <span className="text-[16px] text-gray-600">
                More about Conference
              </span>
            </div> */}
            <div className="leading-tight">
              <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px]  font-black">
                About ICEPADM-2024
              </span>
            </div>
            <div className="lg:pr-4 flex justify-center">
              <div className="mt-3 w-full leading-tight sm:leading-normal lg:w-[69%]">
                <span className="text-[14px] sm:text-[16px]">
                  <span className="font-semibold">Our goal</span> is to provide
                  a platform for researchers addressing pressing environmental
                  issues, facilitating the exchange of ideas and information.
                  Through scheduled sessions, the conference seeks to raise
                  awareness among all stakeholders about current and emerging
                  environmental challenges. Topics covered will include
                  environmental disasters, mitigation measures, and innovative
                  approaches to environmental remediation and restoration.
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-5">
              <Link
                href="https://res.cloudinary.com/denl2iizs/image/upload/v1708835952/rqz7tttqirokoeyn2vwi.pdf"
                target="_blank"
                className="text-[12px] md:text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold flex gap-3 items-center rounded-full bg-[#009688] text-white"
              >
                Conference Plan of Execution <FaDownload />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT;