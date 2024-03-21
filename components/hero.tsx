import React from "react";
import {
  bgOne,
  bgTwo,
  bgThree,
  bgFour,
  bgFive,
  bgSix,
  bgSeven,
  bgEight,
  bgNine,
  bgTen,
} from "@/public";
import IMAGESLIDER from "@/clientComponents/imageSlider";
import Link from "next/link";

const HERO = () => {
  return (
    <>
      <div
        className=" lg:flex relative  snap-center mt-[20px] sm:mt-[50px] lg:mt-0  justify-center items-center 
      min-h-[calc(100vh-70px)] w-full"
      >
        <div className="lg:mt-0 mt-[50px] w-full lg:w-[50%] h-fit lg:h-full hidden lg:flex justify-center items-center">
          <IMAGESLIDER
            images={[
              bgOne,
              bgTwo,
              bgThree,
              bgFour,
              bgFive,
              bgSix,
              bgSeven,
              bgEight,
              bgNine,
              bgTen,
            ]}
          />
        </div>
        <div className=" w-full lg:w-[50%] h-fit text-center lg:text-left lg:h-full p-3 flex items-center lg:pl-6">
          <div className="text">
            <div className="leading-tight lg:leading-none mt-1">
              <span className=" text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] font-black">
                2<sup>nd</sup> International Conference on Environmental
                Pollution Abatement &amp; Disaster Management
                <br className="block sm:hidden" /> (ICEPADM-2024)
              </span>
            </div>

            <div className="mt-2 leading-tight">
              <span className="font-medium text-[14px] md:text-[15px]">
                <span className="text-gray-500 ">Organized by</span>{" "}
                <br className="block sm:hidden" />
                Department of Chemistry, SKIT Jaipur, Rajsthan India
              </span>
            </div>
            <div className=" leading-tight mt-2">
              <span className="font-medium text-[14px] md:text-[15px]">
                <span className="text-gray-500 ">In association with</span>
                <br />
                Royal Society of Chemistry (RSC)
                <br /> Green Chemistry Research Center (GCRC), Bikaner
                <br />
                Society for Promotion and Education of Sciences (SPES)
              </span>
            </div>

            <div className="mt-5  flex justify-center flex-wrap sm:flex-nowrap lg:block xl:flex xl:justify-start ">
              <Link href="/registration">
                <div className="text-[12px] md:text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold rounded-full bg-[#009688] text-white">
                  <span>Register for Conference{"'"}24</span>
                </div>
              </Link>
              <Link href="#aboutConfrence">
                <div className="text-[12px] md:text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold rounded-full">
                  <span>More about Conference{"'"}24 &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 sm:mt-[50px] w-full lg:w-[50%] hifit lg:h-full flex lg:hidden justify-center items-center">
          <IMAGESLIDER
            images={[
              bgOne,
              bgTwo,
              bgThree,
              bgFour,
              bgFive,
              bgSix,
              bgSeven,
              bgEight,
              bgNine,
              bgTen,
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default HERO;
