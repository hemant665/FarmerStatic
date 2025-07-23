import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../assets/Images/Gallery6.webp";
import { LuArrowUpRight } from "react-icons/lu";
import { BiLeaf } from "react-icons/bi";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
  };

  return (
    <div className="p-10">
      <Slider {...settings}>
        <div className="max-h-[55rem] w-full relative flex items-center justify-center mt-3 overflow-hidden rounded-2xl bg-amber-500">
          <div className="relative w-full">
             <div className="absolute bg-[#5C8C51]/30 h-full w-full z-20"></div>
            <div className="absolute w-full h-full flex flex-col items-center  z-50 font-bold text-white top-50 ">
              <p className="text-xl md:text-2xl font-normal flex items-center gap-2"> <BiLeaf /> We’re Distributors of Quality 100%</p>
              <h1 className="text-4xl sm:text-5xl md:text-8xl xl:text-[16rem]">
                Harvest
              </h1>
              <h3 className="text-7xl ">Pure Orgnic Food</h3>
              <div className="flex mt-7 gap-5">
                <button className="flex items-center gap-3 rounded-full py-3 px-6 text-[#5C8C51] bg-[#ecdd5d] hover:text-[#ecdd5d] hover:bg-[#5C8C51]">
                  View Our Products <LuArrowUpRight />{" "}
                </button>
                <button className="flex items-center gap-3 rounded-full py-3 px-6 bg-transparent border text-white hover:text-[#5C8C51] hover:bg-white">
                  Our Services <LuArrowUpRight />
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden z-0">
              <img
                src={Img}
                alt={Img}
                className="h-full w-full object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>

        <div className="max-h-[55rem] w-full relative flex items-center justify-center mt-3 overflow-hidden rounded-2xl">
          <div className="relative w-full">
             <div className="absolute bg-[#5C8C51]/30 h-full w-full z-20"></div>
            <div className="absolute w-full h-full flex flex-col items-center z-50 font-bold text-white top-50 ">
              <p className="text-xl md:text-2xl font-normal flex items-center gap-2"> <BiLeaf /> Sustainable Agriculture Experts</p>
              <h1 className="text-4xl sm:text-5xl md:text-8xl xl:text-[16rem]">
                Growing
              </h1>
              <h3 className="text-7xl">Fresh From Nature</h3>
              <div className="flex mt-7 gap-5">
                <button className="flex items-center gap-3 rounded-full py-3 px-6 text-[#5C8C51] bg-[#ecdd5d] hover:text-[#ecdd5d] hover:bg-[#5C8C51]">
                  View Our Products <LuArrowUpRight />{" "}
                </button>
                <button className="flex items-center gap-3 rounded-full py-3 px-6 bg-transparent border text-white hover:text-[#5C8C51] hover:bg-white">
                  Our Services <LuArrowUpRight />
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden z-0">
              <img
                src={Img}
                alt={Img}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="max-h-[55rem] w-full relative flex items-center justify-center mt-3 overflow-hidden rounded-2xl">
          <div className="relative w-full">

            <div className="absolute bg-[#5C8C51]/30 h-full w-full z-20"></div>

            <div className="absolute w-full h-full flex flex-col items-center  z-50 font-bold text-white top-50 ">
              <p className="text-xl md:text-2xl font-normal flex items-center gap-2"> <BiLeaf /> Trusted by Farmers Worldwide</p>
              <h1 className="text-4xl sm:text-5xl md:text-8xl xl:text-[16rem]">
                Farming
              </h1>
              <h3 className="text-7xl">Pure Agricultural </h3>
              <div className="flex mt-7 gap-5">
                <button className="flex items-center gap-3 rounded-full py-3 px-6 text-[#5C8C51] bg-[#ecdd5d] hover:text-[#ecdd5d] hover:bg-[#5C8C51]">
                  View Our Products <LuArrowUpRight />{" "}
                </button>
                <button className="flex items-center gap-3 rounded-full py-3 px-6 bg-transparent border text-white hover:text-[#5C8C51] hover:bg-white">
                  Our Services <LuArrowUpRight />
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden z-0">
              <img
                src={Img}
                alt={Img}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
