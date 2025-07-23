import React, { useEffect, useRef, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { BiSolidLeaf } from "react-icons/bi";
import AboutImg from "../assets/Images/AboutImg.webp";

const About: React.FC = () => {
  const [count, setCount] = useState(1286000);
  const target = 1286644;
  const counterRef = useRef<HTMLHeadingElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 1286000;
          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) clearInterval(interval);
          }, 10);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="max-w-[87rem] mx-auto">
      <div className="grid md:grid-cols-2 mt-20 p-5">
        {/* Left Section */}
        <div className="p-3 flex flex-col gap-5">
          <p className="flex items-center gap-1">
            <BiSolidLeaf className="text-[#9EC63C] text-2xl" />
            About the Company
          </p>
          <h2 className="text-5xl text-green-950 font-semibold">
            Agron is the Largest Global Organic Farm Since 2011.
          </h2>
          <p className="leading-8 text-lg text-zinc-600">
            Organic farming nurtures healthy soil, where farmers grow crops
            without harmful chemicals, ensuring clean food and a balanced
            ecosystem. Natural methods improve soil fertility, reduce pollution,
            and deliver fresh produce that supports both people and the planet
          </p>

          <div className="grid grid-cols-2 gap-4">
            <p className="flex items-center gap-2">
              <GiCheckMark className="text-green-600" /> Real-Time Tracking
            </p>
            <p className="flex items-center gap-2">
              <GiCheckMark className="text-green-600" /> Customizable Fruits
              Solutions
            </p>
            <p className="flex items-center gap-2">
              <GiCheckMark className="text-green-600" /> On-Time Delivery
            </p>
            <p className="flex items-center gap-2">
              <GiCheckMark className="text-green-600" /> 24/7 Customer Support
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-3">
            <button className="flex justify-center items-center gap-2 bg-[#5B8C51] p-4 rounded-full text-white">
              More About Us <LuArrowUpRight />
            </button>
            <div className="flex items-center gap-4 ">
              <div className="p-4 bg-[#EDDD5E] rounded-full">
                <BsTelephone className="text-2xl text-[#5B8C51]" />
              </div>
              <div>
                <h2 className="text-zinc-500 text-lg">Phone</h2>
                <p className="text-[#5B8C51] text-xl sm:text-2xl">
                  (704) 555-0127
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-end items-end">
          <div className="p-6 md:p-8 bg-[#ECDD5D] flex flex-col gap-3 rounded-2xl max-w-[30rem] -mb-1 sm:-mb-10 z-10">
            <p>Trust By Clients</p>
            <h2
              ref={counterRef}
              className="text-3xl md:text-5xl font-semibold"
            >
              {count.toLocaleString()}+
            </h2>
            <hr className="line-" />
            <p>
              Organic farms grow natural crops, using eco-friendly methods that
              protect the soil, water.
            </p>
          </div>
          <div className="bg-red-200 rounded-2xl overflow-hidden">
            <img src={AboutImg} alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
