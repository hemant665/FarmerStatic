import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import Gallery1 from "../assets/Images/Gallery1.webp";
import Gallery2 from "../assets/Images/Gallery2.webp";
import Gallery3 from "../assets/Images/Gallery3.webp";
import Gallery4 from "../assets/Images/Gallery4.webp";
import Gallery5 from "../assets/Images/Gallery5.webp";
import Gallery6 from "../assets/Images/Gallery6.webp";
import { LuArrowUpRight } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import Farmer from "../assets/Images/farmer.png";

const Gallery = () => {
  return (
      <div className="max-w-[87rem] mx-auto">
              <div className="flex flex-col mt-20 p-5 items-center ">
      <div className="p-3 flex flex-col gap-5">
        <p className="flex items-center gap-1">
          <BiSolidLeaf className="text-[#9EC63C] text-2xl" /> Our Gallery Image{" "}
        </p>
      </div>
      <h2 className="text-5xl text-green-950 font-semibold">
        Gallery of our Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <img
          src={Gallery1}
          alt={Gallery1}
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src={Gallery2}
          alt={Gallery2}
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src={Gallery3}
          alt={Gallery3}
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src={Gallery4}
          alt={Gallery4}
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src={Gallery5}
          alt={Gallery5}
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src={Gallery6}
          alt={Gallery6}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="relative  w-full  mt-20 h-[27rem] flex items-center justify-center">
        <div className="absolute w-full h-full">
          <img
            src={Gallery5}
            alt={Gallery5}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute bg-[#366335] h-full w-full opacity-90 rounded-2xl p-10 text-white z-10" />

        <div className="relative h-full w-full top-0 opacity-100 rounded-2xl text-white z-40">
          <div className="flex h-full flex-col md:flex-row relative">
            <div className="p-5 sm:p-10">
              <div className="max-w-[50rem] flex flex-col gap-3 sm:gap-6">
                <div className="sm:p-3 flex flex-col gap-5">
                  <p className="flex items-center gap-1">
                    <BiSolidLeaf className="text-[#9EC63C] text-2xl" /> Why
                    Choose Us
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-semibold">
                  Currently We’re Growing and Selling Organic Food
                </h2>
                <p>
                  Sustainable farming avoids toxins, enriches the soil, and
                  respects nature’s rhythm. Organic methods help protect
                  wildlife, and ensure healthy crops for all communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-10 ">
                <div><button className="flex justify-center items-center gap-2 bg-[#EDDD5E] p-4 rounded-full text-white">
                  More About Us <LuArrowUpRight />
                </button></div>
                <div className="flex  items-center gap-4 ">
                  <div className="p-4 bg-[#EDDD5E] rounded-full">
                    <BsTelephone className="text-2xl text-[#5B8C51] " />
                  </div>
                  <div>
                    <h2 className="text-lg">Phone</h2>
                    <p className=" text-xl sm:text-2xl">(704) 555-0127</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[50%] md:w-[30%] h-full ">
              <img src={Farmer} alt={Farmer} className=" scale-y-110 -mt-5 h-full  object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  
  );
};

export default Gallery;




