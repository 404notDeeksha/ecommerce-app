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

export const HomePage = () => {
  return (
    // <>
    //   <div style={{ width: "100%", height: "100vh", position: "relative" }}>
    //     <Squares
    //       speed={0.5}
    //       squareSize={40}
    //       direction="diagonal" // up, down, left, right, diagonal
    //       borderColor="#fff"
    //       hoverFillColor="#222"
    //     />
    //   </div>
    // </>
    <div className="relative h-screen  bg-[#1d1e2c]  text-white  font-sans">
      <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal"
        borderColor="#3b3c51" // Grid line color
        hoverFillColor="#02a9f7" // Accent blue for square hover
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-10 w-full px-3 flex justify-center">
        <SquaresThemeSearchBar />
      </div>
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10">
        <HeroTextCentered />
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
