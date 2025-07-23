import React from "react";
export function HeroTextCentered() {
  return (
    <div className="mx-auto px-6 w-full max-w-2xl">
      <h1 className="text-white text-3xl sm:text-5xl font-extrabold mb-6 text-center">
        Customizable Squares
        <br className="hidden sm:block" />
        Moving Around Smoothly
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full bg-white text-[#1d1e2c] font-semibold shadow hover:bg-gray-200 transition">
          Get Started
        </button>
        <button className="px-4 py-2 rounded-full bg-[#262736] border border-[#3b3c51] text-white font-semibold shadow">
          Learn More
        </button>
      </div>
    </div>
  );
}
