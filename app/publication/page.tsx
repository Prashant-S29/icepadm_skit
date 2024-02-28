import { srj } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PUBLICATION = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="text-center mt-5">
          {/* <div>
            <span className="text-[16px] text-gray-600">
              ICEPADM Publications
            </span>
          </div> */}
          <div className="leading-tight">
            <span className="text-[32px] font-black">
              SKIT Research Journal
            </span>
          </div>
        </div>
        <div className="mt-5  w-full">
          <div className="w-full">
            <div className="flex justify-center">
              <Image src={srj} alt="srj" className="w-[350px]" />
            </div>
            <div className="w-full text-center mt-3">
              <span>
                ISSN (PRINT) 2278-2508 ISSN (ONLINE) 2454-9673
              </span>
            </div>
            <div className="w-full text-center">
              <span className="text-gray-600 text-[15px]">
                For more info{" "}
                <Link href="https://ijskit.org/" target="_blank" className="font-semibold">
                  Click here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PUBLICATION;
