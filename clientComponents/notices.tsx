"use client";

import { importantDates } from "@/contant";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const INSIDER_BOT = () => {
  const [showBot, setShowBot] = useState(false);
  const [showBotContent, setShowBotContent] = useState(false);
  const [showLoaderCard, setShowLoaderCard] = useState(true);

  const handleShowBot = () => {
    if (showBot) {
      setShowBotContent(false);
      const timeout = setTimeout(() => {
        setShowBot(false);
      }, 100);
      setShowLoaderCard(true);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setShowBot(true);
      const timeout = setTimeout(() => {
        setShowBotContent(true);
      }, 100);
      handleShowLoaderCard();
      return () => {
        clearTimeout(timeout);
      };
    }
  };

  const handleShowLoaderCard = () => {
    const timeout = setTimeout(() => {
      setShowLoaderCard(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full min-h-screen duration-200  z-[75] ${
          showBotContent
            ? "bg-[#00000069] cursor-pointer"
            : "bg-[#00000000] pointer-events-none"
        }`}
        onClick={handleShowBot}
      />
      <div
        className={`fixed z-[80] overflow-hidden right-0 bottom-0 m-3   duration-200
        backdrop-blur-[10px]   ${
          showBot
            ? "w-[300px] rounded-[20px] bg-gray-100  px-5 py-4"
            : "w-[95px] rounded-[10px] bg-[#009688]  px-3 py-2 cursor-pointer"
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
                  showBotContent
                    ? "font-semibold text-black"
                    : "font-medium text-white"
                }`}
              >
                Notices
              </span>
            </div>
          </div>
          <div>
            <AiFillCloseCircle className="text-[24px] cursor-pointer" />
          </div>
        </div>
        <div
          className={`${
            showBotContent ? "h-[385px]" : "h-0"
          } overflow-hidden duration-200 rounded-[10px] `}
        >
          <div className="leading-tight mt-3">
            <span className="text-[13px] sm:text-[14px] ">
              <span className="font-semibold">Welcome to the Notice Board</span>
              . <br />
              Get all the latest updates regarding ICEPADM Conferences and all
              the activities.
            </span>
          </div>
          <div className="mt-3 mb-1">
            <span className="text-[13px] sm:text-[14px] font-semibold">
              Important Dates
            </span>
          </div>
          <div className="max-h-[250px] w-full overflow-y-scroll ">
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
