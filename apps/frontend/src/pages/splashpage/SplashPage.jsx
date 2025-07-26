import React, { useEffect } from "react";
import Squares from "../../utils/Squares";
import { HeroTextCentered } from "../../utils/HeroTextCentered";
import { trackEvent } from "../../lib/tracking";

export const SplashPage = () => {
  useEffect(() => {
    trackEvent("Splash page viewed", {
      page: window.location.pathname,
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    });
  }, []);

  return (
    <div className="relative h-screen  bg-[#1d1e2c] font-sans">
      <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal"
        borderColor="#3b3c51" // Grid line color
        hoverFillColor="#02a9f7" // Accent blue for square hover
        className="absolute inset-0 w-full h-full z-0"
      />
      {/* <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-10 w-full px-3 pointer-events-none ">
    <div className="pointer-events-auto max-w-2xl mx-auto">
      <SquaresThemeSearchBar />
    </div>
  </div> */}
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10  pointer-events-none">
        <div className="pointer-events-auto">
          <HeroTextCentered />
        </div>
      </div>
    </div>
  );
};
