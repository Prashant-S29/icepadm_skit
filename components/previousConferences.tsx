"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

import { previousConfrences } from "@/contant";

const PREVIOUS_CONFERENCES = () => {
  const [activeConferenceCard, setActiveConferenceCard] = useState(0);

  return (
    <>
      <div className="leading-tight">
        <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px]  font-black">
          Previous Conferences
        </span>
      </div>
      <div className="leading-tight">
        <span className="text-[14px] sm:text-[16px]  font-medium">
          Hosted by Department of Chemistry, SKIT Jaipur
        </span>
      </div>
      <div className="mt-5 flex justify-center flex-wrap text-left px-[3%] gap-3">
        {previousConfrences.map((conferenceDetails, index) => (
          <div
            key={index}
            className={`w-full md:w-[70%] p-5 bg-gray-100 overflow-hidden  rounded-[10px] ${
              index === activeConferenceCard
                ? "cursor-default h-[100%]"
                : "cursor-pointer h-[57px]"
            }`}
            onClick={() => {
              setActiveConferenceCard(index);
            }}
          >
            <div className="leading-tight flex gap-2 justify-between">
              <div
                className={` ${
                  index === activeConferenceCard
                    ? " line-clamp-none font-bold"
                    : "line-clamp-1 font-medium"
                }`}
              >
                <span className="text-[14px] sm:text-[15px] ">
                  {conferenceDetails.confrenceTitle}
                </span>
              </div>
              <div>
                <FaAngleDown
                  className={`${
                    index === activeConferenceCard ? "rotate-180" : "rotate-0"
                  } duration-200`}
                />
              </div>
            </div>
            <div>
              <div className="leading-tight mt-3">
                <div>
                  <span className="text-[13px] sm:text-[14px] text-gray-700">
                    Description
                  </span>
                </div>
                <div>
                  <span className="text-[14px] sm:text-[15px] font-medium ">
                    {conferenceDetails.confrenceDescription}
                  </span>
                </div>
              </div>
              <div className="leading-tight mt-3">
                <div>
                  <span className="text-[13px] sm:text-[14px] text-gray-700">
                    Date
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="text-[14px] sm:text-[15px] font-medium ">
                    {conferenceDetails.confrenceDate}
                  </span>
                </div>
              </div>
              <div className="leading-tight mt-3">
                <div>
                  <span className="text-[13px] sm:text-[14px] text-gray-700">
                    Mode
                  </span>
                </div>
                {conferenceDetails.confrenceMOC.mode === "online" ? (
                  <div className="leading-tight">
                    <span className="text-[14px] sm:text-[15px] font-medium ">
                      {conferenceDetails.confrenceMOC.mode}
                    </span>
                  </div>
                ) : (
                  <div className="leading-tight">
                    <span className="text-[14px] sm:text-[15px] font-medium ">
                      {conferenceDetails.confrenceMOC.mode},at <br />
                      {conferenceDetails.confrenceMOC.venue}
                    </span>
                  </div>
                )}
              </div>
              <div className="leading-tight mt-3">
                {conferenceDetails.partner.type === "associated" ? (
                  <>
                    <div>
                      <span className="text-[13px] sm:text-[14px] text-gray-700">
                        In association with
                      </span>
                    </div>
                    <div className="leading-tight">
                      <span className="text-[14px] sm:text-[15px] font-medium ">
                        {conferenceDetails.partner.bodyName}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <span className="text-[13px] sm:text-[14px] text-gray-700">
                        Sponsored by
                      </span>
                    </div>
                    <div className="leading-tight">
                      <span className="text-[14px] sm:text-[15px] font-medium ">
                        {conferenceDetails.partner.bodyName}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PREVIOUS_CONFERENCES;
