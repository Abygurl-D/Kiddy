import React from "react";
import HeroNav from "../components/HeroNav";
import myImage from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <>
      <div
        // className="bg-cover bg-center h-screen flex items-center justify-between px-24"
        style={{
          backgroundColor: "#B2B2B2", 
          backgroundSize: "contain",  
          backgroundRepeat: "no-repeat", 
        }}
      >
        <div className=" flex w-4/5 mx-auto">
          <div className="absolute w-4/5">
            <HeroNav />
          </div>

          {/* Left Content */}
          <div className="max-w-lg mr-10 mt-[250px]">
            {" "}
            {/* Margin right to create space */}
            <h2 className="font-[Indie Flower] text-[20px] font-light leading-[24px] text-[rgb(253,77,64)] mb-4">
              Welcome To Our Website
            </h2>
            <h1 className="text-[48px] font-bold leading-[48px] text-white mb-6">
              Bring Fun Life To Your Kids
            </h1>
            <p className="text-[18px] font-light leading-[30.6px] text-white mb-8">
              Amazing Playground for your kids
            </p>
            <button className="bg-[#dc3545] text-white text-[12.8px] leading-[19.2px] uppercase tracking-[3.2px] py-3 px-6 rounded-md">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="max-w-md ml-10">
            {" "}
            {/* Margin left to create space */}
            <img
              src={myImage} 
              alt="Playground"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
