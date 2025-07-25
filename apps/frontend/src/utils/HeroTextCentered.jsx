import React from "react";
import DecryptedText from "../pages/homepage/components/DecryptedText";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export function HeroTextCentered() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 max-w-2xl mx-auto gap-6">
      <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold text-white text-center font-anta font-nowrap">
        Welcome to World of
      </h1>
      <div className="text-8xl sm:text-5xl lg:text-[120px] my-6 text-purple-300 font-black tracking-tighter font-anta whitespace-nowrap">
        <DecryptedText
          text="AI Gadgets"
          animateOn="view"
          speed={120}
          maxIterations={8}
          characters="XYZ3DFCTY%^!@"
          revealDirection="start"
          sequential
          useOriginalCharsOnly={false}
          className="whitespace-nowrap"
        />
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center w-full">
        <button
          className="px-5 py-2 rounded-full bg-white text-[#1d1e2c] font-semibold shadow hover:bg-gray-200 transition text-lg"
          aria-label="Get Started"
        >
          <Link to={routes.loginEmail}>Get Started</Link>
        </button>
        <button
          className="px-5 py-2 rounded-full bg-[#262736] border border-[#3b3c51] text-white font-semibold shadow text-lg"
          aria-label="Learn More"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
