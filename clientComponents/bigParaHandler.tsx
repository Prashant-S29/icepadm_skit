"use client";

import React, { useState } from "react";

const BIG_PARA_HANDLER = ({ children }: { children: string }) => {
  const [showFullPara, setShowFullPara] = useState(false);
  return (
    <>
      <span
        className={`duration-200 text-[14px] sm:text-[15px] lg:text-[16px]  ${
          showFullPara
            ? "line-clamp-none"
            : "line-clamp-6 md:line-clamp-5 lg:line-clamp-none"
        }`}
      >
        {children}
      </span>
      <span
        className="underline px-3 lg:hidden text-[14px] sm:text-[15px] lg:text-[16px]"
        onClick={() => {
          setShowFullPara(!showFullPara);
        }}
      >
        read {showFullPara ? "less" : "more"}
      </span>
    </>
  );
};

export default BIG_PARA_HANDLER;
