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
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              ICEPADM Registration
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-5 px-5">
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
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              Paper Submissions
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-5 px-5">
            {paperSubmissionDetails.map((details, index) => (
              <PAPER_SUB_CARD details={details} index={index} key={index} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default REGISTRATION;
