import React from "react";
import Link from "next/link";

import { FaDownload } from "react-icons/fa";
import PREVIOUS_CONFERENCES from "./previousConferences";
import BIG_PARA_HANDLER from "@/clientComponents/bigParaHandler";

const ABOUT = () => {
  return (
    <>
      <div
        id="aboutConfrence"
        className=" flex relative mt-5 scroll-m-[150px]  p-5 justify-center items-center w-full"
      >
        <div className="text-center h-full flex items-center ">
          <div>
            <div className="leading-tight">
              <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px]  font-black">
                About ICEPADM-2024
              </span>
            </div>
            <div className="lg:pr-4 flex justify-center">
              <div className="mt-2 w-full leading-tight sm:leading-normal lg:w-[69%]">
                <span className="text-[15px] lg:text-[16px] font-medium">
                  <BIG_PARA_HANDLER>
                    Our goal is to provide a platform for researchers addressing
                    pressing environmental issues, facilitating the exchange of
                    ideas and information. Through scheduled sessions, the
                    conference seeks to raise awareness among all stakeholders
                    about current and emerging environmental challenges. Topics
                    covered will include environmental disasters, mitigation
                    measures, and innovative approaches to environmental
                    remediation and restoration.
                  </BIG_PARA_HANDLER>
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-center flex-wrap gap-x-5 gap-y-0">
              <div>
                <Link
                  href="https://res.cloudinary.com/dzfsxpblt/image/upload/v1710782283/icepadm/zi5kebfxavaixgcv4txx.pdf"
                  target="_blank"
                  className="text-[12px] md:text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold flex gap-3 items-center rounded-full bg-[#009688] text-white"
                >
                  Conference Plan of Execution <FaDownload />
                </Link>
              </div>
              <div>
                <Link href="/about/#associations">
                  <div className="text-[12px] md:text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold rounded-full">
                    <span>Our Associations &rarr;</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-[50px]">
              <PREVIOUS_CONFERENCES />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT;
