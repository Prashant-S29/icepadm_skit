import { organizers } from "@/contant";
import Image from "next/image";
import React from "react";

const ORGANIZERS = () => {
  return (
    <>
      <div className="w-full flex justify-center text-center pb-5">
        <div>
          {/* <div>
            <span className="text-[16px] text-gray-600">
              Committee Bench Members
            </span>
          </div> */}
          <div className="leading-tight">
            <span className="text-[32px] font-black">ICEPADM Organizers</span>
          </div>
          {organizers.map((organizerDetail, index) => (
            <div key={index} className="mt-[50px]">
              <div>
                <span className="text-[32px] font-black">
                  {organizerDetail.category}
                </span>
              </div>
              <div className="flex flex-warp w-full justify-center gap-[70px] mt-6">
                {organizerDetail.members.map((memberDetail, index) => (
                  <div key={index}>
                    {/* <div className="w-[150px] aspect-square rounded-full bg-gray-200" /> */}
                    <div className="flex justify-center  items-center">
                      <Image
                        src={memberDetail.photo}
                        alt="photo"
                        className="w-[200px] h-[200px] object-cover object-top rounded-full"
                      />
                    </div>
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
                        {memberDetail.department}
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

export default ORGANIZERS;
