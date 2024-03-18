import { importantDates } from "@/contant";
import React from "react";

const IMP_DATES = () => {
  return (
    <>
      <div className="leading-tight text-center">
        <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px]  font-black">
          Important Dates
        </span>
      </div>
      <div className="text-left flex justify-center flex-wrap gap-5 mt-5">
        {importantDates.map((dates, index) => (
          <div
            key={index}
            className="bg-gray-100 w-full sm:w-[300px] p-4 rounded-[20px] border border-gray-100 hover:border-gray-300 duration-300"
          >
            <div>
              <div>
                <span className=" text-[14px]">Category</span>
              </div>
              <div className="leading-tight">
                <span className=" font-semibold text-[16px]">
                  {dates.category}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <span className=" text-[14px]">Last Date</span>
              </div>
              <div className="leading-tight">
                <div className="leading-tight">
                  <span className=" font-semibold text-[16px]">
                    {dates.lastDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IMP_DATES;
