import { advisoryBoard } from "@/contant";
import React from "react";

const ADVISORS = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center text-center pb-5">
        <div className="w-full mt-5">
          <div className="leading-tight">
            <span className="text-[32px] font-black">Advisory Committee</span>
          </div>
          {advisoryBoard.map((advisoryDetail, index) => (
            <div key={index} className="mt-[30px] w-full">
              <div>
                <span className="text-[32px] font-black">
                  {advisoryDetail.category}
                </span>
              </div>
              <div className="flex flex-wrap px-[20px]  gap-[20px] justify-center mt-6">
                {advisoryDetail.members.map((memberDetail, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 hover:border-gray-300 duration-300 border border-white 
                  hover:shadow-[0_0px_15px_-10px_rgba(0,0,0,0.3)] px-[20px] py-[20px] rounded-[15px] w-[300px]"
                  >
                    <div className="mt-3">
                      <span className="text-[16px] font-bold">
                        {memberDetail.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-[15px] text-gray-500">
                        {memberDetail.post}
                      </span>
                    </div>
                    <div>
                      <span className="text-[15px] text-gray-500">
                        {memberDetail.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ADVISORS;
