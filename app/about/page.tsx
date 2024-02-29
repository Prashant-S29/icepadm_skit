import Link from "next/link";
import React from "react";
import { TbWorld } from "react-icons/tb";

import {
  skitOne,
  skitTwo,
  skitThree,
  skitFour,
  skitFive,
  skitSix,
  skit_logo,
  docOne,
  docTwo,
  docThree,
  docFour,
  docFive,
  docSix,
  docSeven,
  docEight,
  naac,
  swamiji,
} from "@/public";
import Image from "next/image";

import Marquee from "react-fast-marquee";
import BIG_PARA_HANDLER from "@/clientComponents/bigParaHandler";

const ABOUT_US = () => {
  const skitImages = [skitThree, skitTwo, skitOne, skitFour, skitFive, skitSix];
  const docImages = [
    docOne,
    docTwo,
    docThree,
    docFour,
    docFive,
    docSix,
    docSeven,
    docEight,
  ];

  return (
    <>
      <div className=" w-full">
        <div className="my-5    rounded-[40px] ">
          <div className="flex px-[20px] md:px-[4%] lg:px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className=" flex justify-center items-center gap-5 my-3">
                <Image
                  src={naac}
                  alt="naac"
                  className="w-[60px] sm:w-[60px] md:w-[70px] lg:w-[80px] aspect-square"
                />
                <Image
                  src={skit_logo}
                  alt="skit_logo"
                  className="w-[60px] sm:w-[50px] md:w-[60px] lg:w-[70px] aspect-square"
                />
                <Image
                  src={swamiji}
                  alt="swamiji"
                  className="w-[60px] sm:w-[50px] md:w-[50px] lg:w-[70px]  aspect-square"
                />
              </div>
              <div className="leading-tight">
                <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
                  SKIT, Jaipur
                </span>
              </div>
              <div className="text-[15px] lg:text-[16px] font-medium mt-3">
                <BIG_PARA_HANDLER>
                  Swami Keshvanand Institute of Technology, Management &
                  Gramothan (SKIT) inspired from the learnings of Swami
                  Keshvanand, was established in the year 2000 by Technocrats
                  and Managers Society for Advanced Learning. Today the
                  institute is recognized as one of the centres of academic
                  excellence in Northern India. The institute is affiliated to
                  Rajasthan Technical University (RTU), Kota for offering Ph.D,
                  Postgraduate and Graduate Courses in Engineering and
                  Management. The institute is approved by All India Council for
                  Technical Education (AICTE), New Delhi. Engineering branches
                  are accredited by National Board of Accreditation (NBA), New
                  Delhi and also by Institute of Engineers, Kolkata.
                </BIG_PARA_HANDLER>
              </div>
              <div className="text-[16px] font-medium my-6 flex justify-center">
                <Link
                  href="https://skit.ac.in"
                  className="text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold  flex gap-2 items-center rounded-full bg-[#009688] text-white"
                >
                  <div>
                    <span>visit skit.ac.in</span>
                  </div>
                  <div>
                    <TbWorld className="text-[20px] md:text-[22px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Marquee autoFill speed={30}>
              {skitImages.map((image, index) => (
                <div key={index} className=" mx-1 rounded-[40px]">
                  <Image
                    src={image}
                    alt={`$image-${index}`}
                    className="w-[220px] md:w-[270px] lg:w-[300px] h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-[40px]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="my-5 min-h-screen mt-[50px]  rounded-[40px] ">
          <div className="flex px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className="leading-tight">
                <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
                  Department of Chemistry, SKIT
                </span>
              </div>
              <div className="text-[15px] lg:text-[16px] font-medium mt-3">
                <BIG_PARA_HANDLER>
                  The Department of Chemistry strives its best for excellence in
                  research and teaching. Faculty of the department is well
                  qualified and motivated with a strong commitment towards
                  teaching, research and mentoring. The commitment towards
                  research is reflected in the research paper publications in
                  reputed national and international journals as well as
                  presentations in conferences/seminars. The department is well
                  equipped to undertake projects sponsored by the Ministry of
                  Human Resources and Development, Department of Science and
                  Technology, and Council of Scientific and Industrial Research.
                  The department also encourages industry sponsored research.
                  The faculty has been active in organizing conferences,
                  seminars, worksops, FDPs and scientific meetings from time to
                  time. Department offers a vibrant and dynamic atmosphere to
                  nurture the spirit of inquisitiveness amongst students and
                  faculty members.
                </BIG_PARA_HANDLER>
              </div>
              <div className="text-[16px] font-medium my-6 flex justify-center">
                <Link
                  href="https://skit.ac.in"
                  className="text-[13px] lg:text-[14px] w-fit px-7 py-4 font-semibold  flex gap-2 items-center rounded-full bg-[#009688] text-white"
                >
                  <div>
                    <span>Learn More</span>
                  </div>
                  <div>
                    <TbWorld className="text-[20px] md:text-[22px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Marquee autoFill direction="right" speed={30}>
              {docImages.map((image, index) => (
                <div key={index} className=" mx-1 rounded-[40px]">
                  <Image
                    src={image}
                    alt={`$image-${index}`}
                    className="w-[220px] md:w-[270px] lg:w-[300px] h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-[40px]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT_US;
