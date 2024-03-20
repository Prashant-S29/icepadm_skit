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
        <div className="py-[50px]  bg-gray-100   rounded-[40px] scroll-m-[150px]" id="associations">
          <div className="flex px-[5%]  justify-center items-center ">
            <div className="text-center">
              <div className="leading-tight">
                <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
                  Associations
                </span>
              </div>
              <div className="text-[15px] lg:text-[16px] font-medium mt-5">
                <div>
                  <span className="text-[16px] sm:text-[18px] font-bold">
                    The Royal Society of Chemistry (RSC)
                  </span>
                </div>
                <div className="mt-2">
                  <BIG_PARA_HANDLER>
                    The Royal Society of Chemistry (RSC) is a learned society
                    (professional association) in the United Kingdom with the
                    goal of `advancing the chemical sciences`. It was formed in
                    1980 from the amalgamation of the Chemical Society, the
                    Royal Institute of Chemistry, the Faraday Society, and the
                    Society for Analytical Chemistry with a new Royal Charter
                    and the dual role of learned society and professional body.
                    At its inception, the Society had a combined membership of
                    34,000 in the UK and a further 8,000 abroad. The
                    headquarters of the Society are at Burlington House,
                    Piccadilly, London. The Society has offices in the United
                    States, on the campuses of The University of Pennsylvania
                    and Drexel University, at the University City Science Center
                    in Philadelphia, Pennsylvania, in both Beijing and Shanghai,
                    China and in Bangalore, India
                  </BIG_PARA_HANDLER>
                </div>
              </div>

              <div className="text-[15px] lg:text-[16px] font-medium mt-5">
                <div>
                  <span className="text-[16px] sm:text-[18px] font-bold">
                    Green Chemistry Research Center (GCRC)
                  </span>
                </div>
                <div className="mt-2">
                  <BIG_PARA_HANDLER>
                    Green Chemistry Research Center was established in the
                    Chemistry department of Govt Dungar College, Bikaner in the
                    year 2004 since then the center is working for the
                    development of Green Chemical Technology and also for
                    creating awareness about the Green Chemistry. It is founded
                    by Prof. Narendar Bhojak .The GCRC has initiated a new
                    concept of Interdisciplinary research in the Govt Dungar
                    college Bikaner in terms of BIRC which has not only became
                    the best practice for the institution but a source of
                    inspiration and example for many other initiatives of
                    Rajasthan college education. The contribution towards
                    innovation viz - Science Films, learning by doing project,
                    e-magazine and a multi faculty research journal, Micellar
                    technology for extraction and nanoparticle preparation,
                    Development of low cost Green Microwave Biochemical Reactor
                    (GMBR). Recently the GCRC is also contributing in the field
                    of Green Auditing, NEP and Augmented and Virtual reality.
                  </BIG_PARA_HANDLER>
                </div>
              </div>
              <div className="text-[15px] lg:text-[16px] font-medium mt-5">
                <div>
                  <span className="text-[16px] sm:text-[18px] font-bold">
                    Society for Promotion and Education of Sciences (SPES){" "}
                  </span>
                </div>
                <div className="mt-2">
                  <BIG_PARA_HANDLER>
                    SPES is a society, working in different areas of science and
                    education, social welfare; its prime objective is to spread
                    awareness of science and educational activities among
                    various peoples. It regularly conducts and organizes
                    seminars, symposia, and workshops in different parts of the
                    country.
                  </BIG_PARA_HANDLER>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT_US;
