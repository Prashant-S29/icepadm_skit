import Link from "next/link";
import React from "react";

const FOOTER = () => {
  return (
    <>
      <div className=" text-center w-full px-2  py-[2px] mt-4 leading-none">
        <span className="text-[12px] sm:text-[14px] md:text-[15px]">
          All Rights are Reserved under &copy; 2021
          <br className="block sm:hidden" />
          SKIT M&G, Jaipur
        </span>
      </div>
      <div className="text-center leading-none my-1">
        <span className="text-[12px] sm:text-[14px] md:text-[15px] font-semibold">
          Made with <span className="text-red-500">❤</span> by{" "}
          <br className="max-[400px]:block hidden" />
          <Link
            href="https://code-prashant.vercel.app"
            target="_blank"
            className="text-blue-500"
          >
            Code-Prashant
          </Link>
        </span>
      </div>
    </>
  );
};

export default FOOTER;
