import React from "react";
import Img from "../assets/Images/plant-svgrepo-com.svg";
import Img1 from '../assets/Images/seeds-fertilizer-svgrepo-com.svg'
import Img2 from '../assets/Images/sprout-svgrepo-com.svg'
import Img3 from '../assets/Images/vegetables-pumpkin-svgrepo-com.svg'
const vegesArray = [
  {
    img: Img,
    title: "100% Organic Products",
    desc: "Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.",
  },
  {
    img: Img1,
    title: "Clean Vegetables",
    desc: "Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.",
  },
  {
    img: Img2,
    title: "Fertilizer Products",
    desc: "Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.",
  },
  {
    img: Img3,
    title: "Awesome Harvest",
    desc: "Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive.",
  },
];

const ProductSection = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {vegesArray.map((veg, index) => (
        <div key={index} className="flex flex-col gap-2 group p-2">
          <div className="relative">
            <div className="relative h-15 w-15 bg-zinc-200 rounded-full z-0"></div>
            <img
              src={veg.img}
              alt={veg.img}
              className="absolute w-[3.5rem] transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 z-0 top-3 left-4"
            />
          </div>
          <h2 className="text-xl mt-7 text-zinc-800 transition-all duration-500  group-hover:underline">
            <span className="relative inline-block group-hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-zinc-800 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-500">
              {veg.title}
            </span>
          </h2>
          <p className="text-zinc-600">{veg.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
