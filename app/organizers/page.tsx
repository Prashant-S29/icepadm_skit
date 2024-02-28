import { organizers } from "@/contant";
import Image from "next/image";
import React from "react";

const ORGANIZERS = () => {
  return (
    <>
      <div className="w-full flex justify-center text-center pb-5 px-5">
        <div>
          <div className="leading-tight">
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              ICEPADM Organizers
            </span>
          </div>
          <div className="mt-[50px]">
            {organizers.map((organizerDetail, index) => (
              <div key={index} className="w-full mt-[30px]">
                <div>
                  <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
                    {organizerDetail.category}
                  </span>
                </div>
                <div className="flex flex-wrap w-full justify-center  gap-x-[50px] lg:gap-x-[70px] gap-y-[40px] mt-6">
                  {organizerDetail.members.map((memberDetail, index) => (
                    <>
                      <div key={index} className="w-full sm:w-[280px]">
                        {/* <div className="w-[150px] aspect-square rounded-full bg-gray-200" /> */}
                        <div className="flex justify-center  items-center">
                          <Image
                            src={memberDetail.photo}
                            alt="photo"
                            className="w-[120px] md:w-[160px] lg:w-[180px] aspect-square object-cover object-top rounded-full"
                          />
                        </div>
                        <div className="mt-3">
                          <span className="text-[15px] md:text-[16px] font-bold">
                            {memberDetail.name}
                          </span>
                        </div>
                        <div className="leading-tight">
                          <span className="text-[13px] md:text-[15px] text-gray-500">
                            {memberDetail.post}
                          </span>
                        </div>
                        <div className="leading-tight">
                          <span className="text-[13px] md:text-[15px] text-gray-500">
                            {memberDetail.department}
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ORGANIZERS;
