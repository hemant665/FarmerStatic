import React from "react";
import OrganicImg from "../assets/Images/OrganicCrop.webp";
import OrganicImg1 from "../assets/Images/OrganicCrop2.webp";
import OrganicLogo from "../assets/Images/OrganicLogo.png";
import { GiLaurelCrown } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";

const OrganicFood = () => {
  return (
    <div className="max-w-[87rem] mx-auto">
      <div className="w-full grid md:grid-cols-2 md:gap-20 mt-20 px-10 mx-auto">
        
        <div className="w-full relative flex flex-col text-3xl ">
          
          <div className="relative w-full ">
            <div className="absolute p-5 bg-[#ECDD5D] text-[#0A2803] -left-7  md:-left-10 top-5  z-10">
              <h2 className="flex items-center gap-3 text-xl md:text-sm">
                <GiLaurelCrown /> We’re a award wining company
              </h2>
            </div>
            <div className="flex items-center w-[17rem] md:w-[19rem] max-w-[36rem] rounded-2xl">
              <img
                src={OrganicImg}
                alt={OrganicImg}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex sm:gap-10 w-full">
            <div className="relative w-[18rem] sm:w-[9rem] rounded-2xl ">
              <img
                src={OrganicLogo}
                alt={OrganicLogo}
                className="w-full object-cover"
              />
            </div>
            <div className="relative max-h-[14rem] sm:w-[20rem] -top-10 rounded-2xl overflow-hidden  z-10">
              <img
                src={OrganicImg1}
                alt={OrganicImg1}
                className="w-full object-cover"
              />
            </div>
          </div>

        </div>


        <div className="w-full flex flex-col gap-5 justify-center">
          <div className="p-1 flex flex-col gap-5">
            <p className="flex items-center gap-1">
              <BiSolidLeaf className="text-[#9EC63C] text-2xl" /> Why Choose Us
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl  lg:text-5xl text-green-950 font-semibold">
            Currently We’re Growing and Selling Organic Food
          </h2>
          <p className="leading-6  lg:text-lg text-zinc-600">
            Farmers grow organic food with care for nature. No toxic chemicals,
            just clean soil, fresh crops, and natural cycles that protect
            health, wildlife, and Earth’s future.
          </p>
          <p className="leading-6 lg:text-lg text-zinc-600">
            At Capital Gardens we believe that we have a duty to adhere to good
            environmental practice, and operate in a sustainable manner. As
            lovers of plants and the environment it is only natural for us to
            want to reduce man’s impact.
          </p>

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <div className="w-full h-2 bg-[#E1EBDF] rounded-2xl overflow-hidden">
                <div className="w-[98%] h-2 bg-[#529049]"></div>
              </div>
              <div className="flex justify-between items-center">
                <h2>Organic Products</h2>
                <h2>99%</h2>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full h-2 bg-[#FBF9E4] rounded-2xl overflow-hidden">
                <div className="w-[90%] h-2 bg-[#ECDD5D]"></div>
              </div>
              <div className="flex justify-between items-center">
                <h2>Absolute Quality</h2>
                <h2>90%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFood;
