import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const HeroNav = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      {/* ----Top nav---- */}
      <div className="top-nav flex justify-between align-middle items-center bg-transparent">
        <h2 className="text-4xl font-bold text-pink-700">
          Kiddy<span className="text-red-500">.</span>
        </h2>

        <div className="flex gap-10 align-middle items-center pl-[20px]">
          <div className="flex w-[40%] items-center space-x-2 text-white">
            <FaMapMarkerAlt className="text-yellow-500 text-4xl " />
            <span>34 Jay Street, Abby City, United States</span>
          </div>

          <div className="flex w-[40%] items-center space-x-2 text-white">
            <FaClock className="text-red-500 text-4xl"/>
            <span>Sunday - Saturday 8:00AM - 4:00PM</span>
            {/* <span className="text-red-500">Saturday CLOSED</span> */}
          </div>
        </div>
      </div>

      {/* ---Nav bar--- */}
      <div className=" flex align-middle items-center justify-between p-4 py-8 nav-bar bg-white rounded-full">
        <nav className="space-x-8 text-gray-600 text-lg">
          <a href="#home" className="hover:text-red-500">
            Home
          </a>
          <a href="#about" className="hover:text-red-500">
            About
          </a>
          <a href="#packages" className="hover:text-red-500">
            Packages
          </a>
          <a href="#gallery" className="hover:text-red-500">
            Gallery
          </a>
          <a href="#pricing" className="hover:text-red-500">
            Pricing
          </a>
          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4">
          <a href="#facebook" className="text-gray-500 hover:text-red-500">
            <FaFacebookF className="text-blue-500"/>
          </a>
          <a href="#twitter" className="text-gray-500 hover:text-red-500">
            <FaTwitter className="text-green-500" />
          </a>
          <a href="#linkedin" className="text-gray-500 hover:text-red-500">
            <FaLinkedinIn className="text-orange-500"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
