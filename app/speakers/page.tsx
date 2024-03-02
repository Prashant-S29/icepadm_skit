import { speakers } from "@/contant";
import Image from "next/image";
import React from "react";

const SPEAKERS = () => {
  return (
    <>
      <div className="w-full flex justify-center text-center pb-5">
        <div className="mt-5">
          <div className="leading-tight">
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              Eminent Speakers
            </span>
          </div>
          <div className=" flex flex-wrap  gap-x-[50px]  justify-center">
            {speakers.map((speakerDetail, index) => (
              <div key={index} className=" w-[250px]">
                <div className=" w-full justify-center  mt-6">
                  <div key={index}>
                    <div className="flex justify-center">
                      <Image
                        src={speakerDetail.photo}
                        alt="photo"
                        className="w-[130px] md:w-[140px] lg:w-[150px] aspect-square object-cover object-top rounded-full"
                      />
                      {/* <div className="w-[150px] aspect-square bg-gray-100 rounded-full" /> */}
                    </div>
                    <div className="mt-3">
                      <span className="text-[15px] md:text-[16px] font-bold">
                        {speakerDetail.name}
                      </span>
                    </div>
                    <div className="leading-tight">
                      <span className="text-[13px] md:text-[15px] text-gray-500">
                        {speakerDetail.post}
                      </span>
                    </div>
                    <div className="leading-tight">
                      <span className="text-[13px] md:text-[15px] text-gray-500">
                        {speakerDetail.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SPEAKERS;
