import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contact, socials } from "@/contant";

const CONTACT = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="mt-5 text-center">
          <div className="leading-tight px-2">
            <span className="max-[400px]:text-[22px] text-[24px] sm:text-[28px]  md:text-[30px] lg:text-[32px] font-black">
              Contacts and Community
            </span>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-5 mt-3 px-5">
              {socials.map((contactDetail, index) => (
                <Link
                  key={index}
                  href={contactDetail.link}
                  target="_blank"
                  className="hover:border-gray-300 duration-300 w-full sm:w-fit  border border-white 
          hover:shadow-[0_0px_15px_-10px_rgba(0,0,0,0.3)] rounded-[15px]"
                >
                  <div className="py-4 lg:py-5 px-5 lg:px-6 bg-gray-100  flex items-center gap-3 rounded-[15px] ">
                    <div>
                      <Image
                        src={contactDetail.icon}
                        alt="facebook"
                        className="w-[30px] lg:w-[35px]"
                      />
                    </div>
                    <div>
                      <span className="text-[14px] lg:text-[15px] font-medium">
                        {contactDetail.id}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-warp w-full justify-center flex-wrap gap-x-[30px] gap-y-5 mt-6">
            {contact.map((member, index) => (
              <div
                key={index}
                className=" gap-4 p-[20px] w-[280px] hover:border-gray-300 duration-300 border border-white bg-gray-100 
                hover:shadow-[0_0px_15px_-10px_rgba(0,0,0,0.3)]  rounded-[30px] items-center"
              >
                <div className="flex justify-center">
                  <Image
                    src={member.photo}
                    alt="photo"
                    className="w-[100px] md:w-[120px] aspect-square object-cover object-top rounded-full"
                  />
                </div>
                <div className="text-center">
                  <div className="mt-3">
                    <span className="text-[15px] md:text-[16px] font-bold">{member.name}</span>
                  </div>
                  <div>
                    <span className="text-[13px] md:text-[15px] text-gray-600">
                      {member.phoneNumber}
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

export default CONTACT;
