import Link from "next/link";
import React from "react";

const PAPER_SUB_CARD = ({
  details,
  index,
}: {
  details: {
    category: string;
    teamplateLink: string;
    submissionLink: string;
  };
  index: number;
}) => {
  return (
    <>
      <div className="p-[30px] bg-gray-100 min-w-[300px] rounded-[30px] border-white hover:border-gray-300 border duration-300">
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
            <span className=" text-[14px]">Teamplate for Reference</span>
          </div>
          <div className="leading-tight">
            <Link
              href={details.teamplateLink}
              target="_blank"
              className=" font-semibold text-[16px]"
            >
              Download here
            </Link>
          </div>
        </div>
        <div className="mt-5 ">
          <Link
            href={details.submissionLink}
            target="_blank"
            className="px-4 py-2  bg-black text-white text-[12px] rounded-full font-medium"
          >
            Submit your {index === 0 ? "Abstract" : "Paper"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PAPER_SUB_CARD;
