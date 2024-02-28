import Link from "next/link";
import React from "react";

const PAPER_SUBMISSION = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="text-center mt-5">
          <div className="leading-tight">
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              Paper Submission Guidelines
            </span>
          </div>
        </div>
        <div className="w-full p-[20px] flex justify-center flex-wrap gap-y-[20px] gap-x-[50px] mt-5">
          <div
            className="px-[40px] lg:px-[50px] py-[30px] w-full lg:w-[40%] 
          bg-gray-100 rounded-[35px] md:rounded-[40px]"
          >
            <div className="leading-tight">
              <span className="text-[18px] md:text-[20px] font-extrabold">
                Oral Presentation Guidelines
              </span>
            </div>
            <div className="mt-3">
              <ul className="list-disc text-[15px] md:text-[16px] ">
                <li>
                  <span className="font-semibold">Presentation slots</span>:
                  Limited to 15 minutes.
                </li>
                <li>
                  <span className="font-semibold">Breakdown</span>: 12 minutes
                  for presentation, 3 minutes for questions and speaker change.
                </li>
                <li>
                  <span className="font-semibold">Format preference</span>:
                  Widescreen (16:9), other options acceptable.
                </li>
                <li>
                  <span className="font-semibold">Deadline</span>: Upload
                  presentation file by March 23, 2024, via full paper submission
                  link.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="px-[40px] lg:px-[50px] py-[30px] w-full lg:w-[40%] 
          bg-gray-100 rounded-[35px] md:rounded-[40px]"
          >
            <div className="leading-tight">
              <span className="text-[18px] md:text-[20px] font-extrabold">
                Poster Presentation Guidelines
              </span>
            </div>
            <div className="mt-3">
            <ul className="list-disc text-[15px] md:text-[16px] ">
                <li>
                  <span className="font-semibold">Poster format</span>: 1-page
                  PDF in landscape orientation.
                </li>
                <li>
                  <span className="font-semibold">Size</span>: 65.0 cm width x
                  36.5 cm height (16:9 aspect ratio).
                </li>
                <li>
                  <span className="font-semibold">Resolution</span>: Preferred
                  to be 8k (7680 x 4320 pixels).
                </li>
                <li>
                  <span className="font-semibold">Font size</span>: Not smaller
                  than 18.
                </li>
                <li>
                  <span className="font-semibold">Poster format</span>:
                  Submission the poster file; email attachments not accepted.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PAPER_SUBMISSION;
