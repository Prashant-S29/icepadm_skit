import React from "react";

import HERO from "@/components/hero";
import ABOUT from "@/components/about";
import THRUST_AREAS from "@/components/thrustAreas";
import COMMUNITY from "@/components/community";

const HOME = () => {
  return (
    <>
      <HERO />
      <ABOUT />
      <THRUST_AREAS />
      <COMMUNITY />
    </>
  );
};

export default HOME;
