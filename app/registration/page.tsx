import CONFERENCE_REG_CARD from "@/components/conferenceRegCard";
import PAPER_SUB_CARD from "@/components/paperSubCard";
import { paperSubmissionDetails, registrationDetails } from "@/contant";
import React from "react";

const REGISTRATION = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div>
          <div className="leading-tight text-center my-5">
            <span className="text-[32px] font-black">ICEPADM Registration</span>
          </div>
          <div className="flex justify-center gap-[30px] px-5">
            {registrationDetails.map((details, index) => (
              <CONFERENCE_REG_CARD
                details={details}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="leading-tight text-center my-5">
            <span className="text-[32px] font-black">Paper Submissions</span>
          </div>
          <div className="flex justify-center gap-[30px] px-5">
            {paperSubmissionDetails.map((details, index) => (
              <PAPER_SUB_CARD
                details={details}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>

        {/* <div>
          <div className="leading-tight text-center my-5">
            <span className="text-[32px] font-black">Important Dates</span>
          </div>
          <div className="flex justify-center gap-[30px] px-5">
            <div className="min-w-[300px] bg-gray-100 px-5 py-3 rounded-[20px] text-center">
              <div>
                <span className="text-[14px]">
                  Abstract submission last date
                </span>
              </div>
              <div className="leading-tight">
                <span className="text-[16px] font-semibold">
                  15th March, 2024
                </span>
              </div>
            </div>
            <div className="min-w-[300px] bg-gray-100 px-5 py-3 rounded-[20px] text-center">
              <div>
                <span className="text-[14px]">Acceptance of Abstract</span>
              </div>
              <div className="leading-tight">
                <span className="text-[16px] font-semibold">
                  17th March, 2024
                </span>
              </div>
            </div>
            <div className="min-w-[300px] bg-gray-100 px-5 py-3 rounded-[20px] text-center">
              <div>
                <span className="text-[14px]">Full paper Submission</span>
              </div>
              <div className="leading-tight">
                <span className="text-[16px] font-semibold">
                  20th March, 2024
                </span>
              </div>
            </div>
            <div className="min-w-[300px] bg-gray-100 px-5 py-3 rounded-[20px] text-center">
              <div>
                <span className="text-[14px]">Last date of registration</span>
              </div>
              <div className="leading-tight">
                <span className="text-[16px] font-semibold">
                  23rd March, 2024
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default REGISTRATION;
