"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const IMAGESLIDER = ({ images }: { images: StaticImageData[] }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImage >= images.length - 1) {
        setActiveImage(0);
      } else {
        setActiveImage((activeImage) => activeImage + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeImage, setActiveImage, images.length]);

  return (
    <>
      <div className="relative ">
        <div className="h-fit">
          <Marquee autoFill speed={30}>
            {images.slice(0, images.length / 2).map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`image_${index}`}
                  className="w-[250px] sm:w-[320px] lg:w-[400px]  p-1 lg:p-2 rounded-[45px] sm:rounded-[50px] lg:rounded-[60px]"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="h-fit">
          <Marquee autoFill speed={30} direction="right">
            {images
              .slice(images.length / 2, images.length)
              .map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`image_${index}`}
                    className="w-[250px] sm:w-[320px] lg:w-[400px] p-1 lg:p-2 rounded-[45px] sm:rounded-[50px] lg:rounded-[60px]"
                  />
                </div>
              ))}
          </Marquee>
        </div>
        <div className="absolute hidden md:block  w-[100px] sm:w-[200px] h-full top-0 left-0 -ml-[2px] bg-gradient-to-r from-white to-[#ffffff00] z-10" />
        <div className="absolute hidden md:block  w-[100px] sm:w-[200px] h-full top-0 right-0 -mr-[2px] bg-gradient-to-l from-white to-[#ffffff00] z-10" />
      </div>
    </>
  );
};

export default IMAGESLIDER;
