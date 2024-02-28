import React from "react";

import Image from "next/image";
import { socials } from "@/contant";
import Link from "next/link";

const COMMUNITY = () => {
  return (
    <>
      <div className="p-5 md:p-7">
        {/* <div>
          <span className="text-[16px] text-gray-600">
            Follow us to get latest updates
          </span>
        </div> */}
        <div className="leading-tight text-center">
          <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px]  font-black">Community</span>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mt-3">
          {socials.map((contactDetail, index) => (
            <Link
              key={index}
              href={contactDetail.link}
              target="_blank"
              className="hover:border-gray-300 duration-300 w-full sm:w-fit  border border-white 
          hover:shadow-[0_0px_15px_-10px_rgba(0,0,0,0.3)] rounded-[15px]"
            >
              <div className="py-4 lg:py-5 px-5 lg:px-6 bg-gray-100  flex items-center gap-3 rounded-[15px] ">
                <div>
                  <Image
                    src={contactDetail.icon}
                    alt="facebook"
                    className="w-[30px] lg:w-[35px]"
                  />
                </div>
                <div>
                  <span className="text-[14px] lg:text-[15px] font-medium">
                    {contactDetail.id}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default COMMUNITY;
