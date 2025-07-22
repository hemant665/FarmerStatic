import React from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

import Img1 from '../assets/Images/plant-svgrepo-com.svg'
import Img from '../assets/Images/AboutImg.webp'

const Service = () => {
  return (
    <div className="max-w-[80rem] mx-auto flex flex-col gap-10 items-center w-full mt-10 py-10 px-5">
      <div className="max-w-[40rem] mx-auto flex flex-col gap-3 mt-10 items-center text-center">
        <p className="flex items-center gap-2"> <BiSolidLeaf className="text-[#9EC63C] text-2xl" />Our Service</p>
        <h2 className="text-5xl text-green-950 font-semibold">Services We Offer</h2>
        <p>
          Organic farming helps the planet thrive. No toxins, no waste, just
          clean food, healthy soil. It’s a better future grown from mindful care
        </p>
      </div>
      
      <div className=" border border-[#C8D7C3] flex flex-col items-center rounded-2xl">
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-5 px-10  md:px-20">
                  <button className="border border-[#C8D7C3] bg-[#EDF2EB] text-[#5B8C51] py-1 px-5 rounded-full">Agriculture Products</button>
                  <button className="border border-[#C8D7C3] bg-[#EDF2EB] text-[#5B8C51] py-1 px-5 rounded-full">Pure Cow's Milk</button>
                  <button className="border border-[#C8D7C3] bg-[#EDF2EB] text-[#5B8C51] py-1 px-5 rounded-full">Tubers And Fruits</button>
                  <button className="border border-[#C8D7C3] bg-[#EDF2EB] text-[#5B8C51] py-1 px-5 rounded-full">Meat Of Cattle</button>
            </div>

            <div className="flex max-w-[90rem] items-center flex-col-reverse md:flex-row gap-10 p-5 sm:p-10">
                  <div className="flex flex-col lg:flex-row gap-4">
                        <div className="px-10 lg:p-0">
                        <img src={Img1} alt={Img1} className="w-[6rem] lg:w-[16rem] bg-white rounded-full p-3"/>
                        </div>
                        <div className="flex flex-col gap-5 sm:px-10">
                              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Agriculture Products</h2>
                              <p className="leading-7">Wendell Berry said it best when he said that “eating is an agricultural act.” Our mission is to change the food system by providing a healthy, fresh alternative to industrial food.</p>
                              <div>
                                    <button className="flex justify-center items-center gap-2 bg-[#5B8C51] p-4 rounded-full text-white hover:bg-white hover:text-[#5B8C51] hover:font-semibold">View Details <LuArrowUpRight /></button>
                              </div>
                        </div>
                  </div>
                  <div>
                        <img src={Img} alt={Img} className="w-full max-w-[90rem] h-[20rem] object-cover rounded-2xl"/>
                  </div>
            </div>
      </div>
    </div>
  );
};

export default Service;
