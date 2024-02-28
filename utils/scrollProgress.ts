import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<{
    xProgress: number;
    yProgress: number;
  }>({
    xProgress: 0,
    yProgress: 0,
  });
  useEffect(() => {
    window.onscroll = () => {
      setScrollProgress({
        xProgress: window.scrollX,
        yProgress: window.scrollY,
      });
    };
    // console.log(scrollProgress.xProgress, scrollProgress.yProgress);
  });

  return scrollProgress;
};

export default ScrollProgress;
