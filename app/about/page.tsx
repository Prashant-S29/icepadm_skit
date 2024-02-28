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
  indaLogo,
  skit_logo,
  docOne,
  docTwo,
  docThree,
  docFour,
  docFive,
  docSix,
  docSeven,
  docEight,
} from "@/public";
import Image from "next/image";

import Marquee from "react-fast-marquee";

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
        <div className="my-5 min-h-screen   rounded-[40px] ">
          <div className="flex px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className=" flex justify-center my-3">
                <Image src={skit_logo} alt="skit_logo" className="w-[100px]" />
              </div>
              <div className="leading-tight">
                <span className="text-[32px] text-[#000] font-black">
                  SKIT, Jaipur
                </span>
              </div>
              <div className="text-[16px] font-medium mt-3">
                <span>
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
                </span>
              </div>
              <div className="text-[16px] font-medium my-6 flex justify-center">
                <Link
                  href="https://skit.ac.in"
                  className="text-[14px] px-7 py-4 font-semibold flex gap-2 items-center rounded-full bg-[#009688] text-white"
                >
                  <div>
                    <span>visit skit.ac.in</span>
                  </div>
                  <div>
                    <TbWorld className="text-[22px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Marquee autoFill speed={30}>
              {skitImages.map((image, index) => (
                <div key={index} className=" mx-5 rounded-[40px]">
                  <Image
                    src={image}
                    alt={`$image-${index}`}
                    className="w-[300px] h-[350px] object-cover rounded-[40px]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="my-[50px] min-h-screen flex items-center bg-gray-100  ">
          <div className="flex px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className=" flex justify-center my-3">
                <Image src={indaLogo} alt="indalogo" className="w-[100px]" />
              </div>
              <div className="leading-tight">
                <span className="text-[32px] text-[#000] font-black">
                  Indian Desalination Association (InDA)
                </span>
              </div>
              <div className="text-[16px] font-medium mt-3">
                <span>
                  InDA was established in the year 1991 with the main goal for
                  the development and promotion of the appropriate use of
                  desalination and water treatment technologies. Being a neutral
                  association without any commercial bias, InDA is active in
                  spreading awareness and providing an interface for enhanced
                  interaction amongst the stakeholders namely the user sectors,
                  industries, academicians, policy makers and program
                  implementation agencies. InDA is an affiliate of International
                  Desalination Association (IDA) and Asia Pacific Desalination
                  Association (APDA) for policy advocacy and adopting world best
                  practices. Each year InDA conducts an international conference
                  to enhance the skills as well to interact with small & medium
                  industries to enable them to mitigate the problems related to
                  wastewater & water management in addition to pollution
                  control.
                </span>
              </div>
              <div className="text-[16px] font-medium my-6 flex justify-center">
                <Link
                  href="https://skit.ac.in"
                  className="text-[14px] px-7 py-4 font-semibold flex gap-2 items-center rounded-full bg-[#009688] text-white"
                >
                  <div>
                    <span>visit indaindia.org.in</span>
                  </div>
                  <div>
                    <TbWorld className="text-[22px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 min-h-screen  rounded-[40px] ">
          <div className="flex px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className="leading-tight">
                <span className="text-[32px] text-[#000] font-black">
                  Department of Chemistry, SKIT
                </span>
              </div>
              <div className="text-[16px] font-medium mt-3">
                <span>
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
                </span>
              </div>
              <div className="text-[16px] font-medium my-6 flex justify-center">
                <Link
                  href="https://skit.ac.in"
                  className="text-[14px] px-7 py-4 font-semibold flex gap-2 items-center rounded-full bg-[#009688] text-white"
                >
                  <div>
                    <span>Learn More</span>
                  </div>
                  <div>
                    <TbWorld className="text-[22px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Marquee autoFill speed={30} className="mt-[20px]">
            {docImages.map((image, index) => (
              <div key={index} className="w-[300px] mx-5  rounded-[40px]">
                <Image
                  src={image}
                  alt={`$image-${index}`}
                  className="w-[300px] h-[350px] object-cover rounded-[40px]"
                />
              </div>
              // <div
              //   key={index}
              //   className="w-[300px] h-[350px] bg-gray-100 rounded-[40px] mx-5"
              // />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ABOUT_US;
