import Image from "next/image";
import React from "react";

const THRUST_AREAS = () => {
  const thustAreas = [
    "Environmental Aspects and Impact of Climate Change in Water Sector",
    "Advanced and economically feasible methods for removal of pollutants in air, water and soil",
    "Natural resource management",
    "Environmental education and awareness",
    "Disaster management",
    "Environmental innovations",
    "Environmental laws and policies",
    "Desalination and Water Conservation Schemes for Rural and Remote Areas",
    "Environmental protection measures",
    "Global warming and Climate Change",
    "Health and Environment",
    "Industrial waste issues and management",
    "Water Resource Management",
    "Environment Pollution Abatement / Mitigation",
    "Other related topics",
  ];

  return (
    <>
      <div className="w-full cursor-default p-3 sm:p-7">
        <div className="w-full bg-gray-100 px-[20px] py-[30px] sm:p-[50px] rounded-[40px]">
          <div>
            {/* <div>
              <span className="text-[16px] text-gray-600">
                Working domains of ICEPADM SKIT
              </span>
            </div> */}
            <div className="leading-tight text-center xl:text-left ">
              <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-black">Thrust Areas</span>
            </div>
          </div>
          <div className="flex  flex-wrap justify-center xl:justify-start gap-x-[15px]  ">
            {thustAreas.map((topic, index) => (
              <div
                key={index}
                className="w-full sm:w-fit  leading-tight p-5 md:p-7 hover:border-gray-300 duration-300 border border-white bg-white 
                hover:shadow-[0_0px_15px_-10px_rgba(0,0,0,0.3)] rounded-[15px] text-center mt-3  md:mt-3"
              >
                <span className="text-[14px] md:text-[15px] font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default THRUST_AREAS;
