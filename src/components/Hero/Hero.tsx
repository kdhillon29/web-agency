import Image from "next/image";
import React from "react";
import img from "../../assets/hero.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" min-h-[70vh] bg-white/30 container flex flex-col justify-center md:flex-row lg:justify-between items-center">
      {/* hero content section  */}
      <div className=" space-y-4 md:space-y-8 w-full md:w-3/4">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className=" text-5xl w-full md:w-3/4 font-bold leading-tight"
        >
          Grow Your Business With Us
          <BsArrowRightCircle className=" inline ml-5" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className=" w-full md:w-3/4">
          Goal oriented websites. Sell more, get more leads, and present
          yourself to the whole world as you only imagined until now. We care
          about.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          className=" bg-primary px-6 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] rounded-md cursor-pointer"
        >
          Get Started
        </button>
      </div>

      {/* hero img section  */}
      <div
        data-aos="zoom-in"
        className=" w-full md:w-3/4 mt-6 md:mt-0 ring-8 md:ring-[10px] ring-[#123C69] border-2 border-black rounded-md"
      >
        <Image src={img} alt="img" className=" rounded-md" />
      </div>
    </div>
  );
};

export default Hero;
