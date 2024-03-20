"use client";

import { importantDates } from "@/contant";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const INSIDER_BOT = () => {
  const [showBot, setShowBot] = useState(false);
  const [showBotContent, setShowBotContent] = useState(false);

  const handleShowBot = () => {
    if (showBot) {
      setShowBotContent(false);
      const timeout = setTimeout(() => {
        setShowBot(false);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setShowBot(true);
      const timeout = setTimeout(() => {
        setShowBotContent(true);
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full min-h-screen duration-200  z-[65] ${
          showBotContent ? "bg-[#0000003f] cursor-pointer" : "bg-[#00000000] pointer-events-none"
        }`}
        onClick={handleShowBot}
      />
      <div
        className={`fixed z-[70] overflow-hidden right-0 bottom-0 m-3   duration-200
        backdrop-blur-[10px]   ${
          showBot
            ? "w-[300px] rounded-[20px] bg-gray-100  px-5 py-4"
            : "w-[95px] rounded-[10px] bg-[#000000]  px-3 py-2 cursor-pointer"
        }`}
        onClick={handleShowBot}
      >
        <div className="w-full flex gap-5  justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`${
                showBotContent ? "bg-black" : "bg-white"
              } w-[10px]  rounded-full aspect-square`}
            />
            <div className="leading-none">
              <span
                className={`text-[13px] sm:text-[14px]  ${
                  showBotContent ? "font-semibold text-black" : "font-medium text-white"
                }`}
              >
                Insider
              </span>
            </div>
          </div>
          <div>
            <AiFillCloseCircle className="text-[24px] cursor-pointer" />
          </div>
        </div>
        <div
          className={`${
            showBotContent ? "h-[420px]" : "h-0"
          } overflow-hidden duration-200 rounded-[10px] `}
        >
          <div className="leading-tight mt-3">
            <span className="text-[13px] sm:text-[14px] font-medium ">
              Hi, I am Insider, an automated bot to provide you the latest
              happenings about ICEPADM Conferences.
            </span>
          </div>
          <div className="mt-3  max-h-[350px] overflow-y-scroll pb-5 ">
            <div>
              <span className="text-[13px] sm:text-[14px] font-semibold">
                Important Dates
              </span>
            </div>
            {importantDates.map((dates, index) => (
              <div
                key={index}
                className=" w-full rounded-[10px] p-3 bg-gray-200 duration-300 mt-2"
              >
                <div className="leading-none">
                  <div>
                    <span className=" text-[11px] sm:text-[12px] ">
                      Category
                    </span>
                  </div>
                  <div className="leading-none">
                    <span className=" font-semibold text-[13px] sm:text-[14px]">
                      {dates.category}
                    </span>
                  </div>
                </div>
                <div className="mt-2 leading-tight">
                  <div>
                    <span className=" text-[11px] sm:text-[12px] ">
                      Last Date
                    </span>
                  </div>
                  <div className="leading-none">
                    <span className=" font-semibold text-[13px] sm:text-[14px]">
                      {dates.lastDate}
                    </span>
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

export default INSIDER_BOT;
