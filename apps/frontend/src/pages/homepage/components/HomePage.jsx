import { Slider } from "./Slider";
import { CategoryGridCarousel } from "./CategoryGridCarousel";
import {
  appliances,
  headphones,
  homeDecor,
  beauty,
} from "./../data/CategoryGridCarousel";
import { MultiCardCarousel } from "./CardCarousel";
import { HeroTextCentered } from "./HeroTextCentered";
import SquaresThemeSearchBar from "./SquaresThemeSearchBar";
import { images } from "../../../assets/images";
import Squares from "./Squares";

// SPLAsh PAge
export const HomePage = () => {
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

    // <div className="min-w-[1000px] mx-auto overflow-clip relative z-[2]">
    //   <Slider />
    //   <CategoryGridCarousel
    //     data1={homeDecor}
    //     data2={appliances}
    //     data3={headphones}
    //     data4={beauty}
    //     label1="Revamp your home in style"
    //     label2="Appliances for your home"
    //     label3="Starting 149 |  HeadPhones"
    //     label4="Beauty & Makeup"
    //   />
    //   <MultiCardCarousel
    //     title="Bestsellers from Beauty"
    //     category="beautyAndMakeup"
    //     query="bestsellers=true"
    //   />
    //   <MultiCardCarousel
    //     title="Headphones at 40% off"
    //     category="headphones"
    //     query="discount=40"
    //   />
    // </div>
  );
};
