import Link from "next/link";
import React from "react";

const CONFERENCE_REG_CARD = ({
  details,
  index,
}: {
  details: {
    category: string;
    feeIndians: string;
    feeNonIndians: string;
    registrationLink: string;
  };
  index: number;
}) => {
  return (
    <>
      <div className="p-[30px] bg-gray-100 min-w-[300px] relative rounded-[30px] border-white hover:border-gray-300 border duration-300">
        <div className="leading-none absolute bottom-0 right-0 mx-4 my-2">
          <span className="font-black text-[80px] text-gray-200">
            #{index + 1}
          </span>
        </div>
        <div>
          <div>
            <span className=" text-[14px]">Category</span>
          </div>
          <div className="leading-tight">
            <span className=" font-semibold text-[16px]">
              {details.category}
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <span className=" text-[14px]">Fees - Inidans</span>
          </div>
          <div className="leading-tight">
            <span className=" font-semibold text-[16px]">
              ₹{details.feeIndians}
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <span className=" text-[14px]">Fees - Non Indians</span>
          </div>
          <div className="leading-tight">
            <span className=" font-semibold text-[16px]">
              ${details.feeNonIndians}
            </span>
          </div>
        </div>
        <div className="mt-5 ">
          <Link
            href={details.registrationLink}
            className="px-4 py-2  bg-black text-white text-[12px] rounded-full font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default CONFERENCE_REG_CARD;
