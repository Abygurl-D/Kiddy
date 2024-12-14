import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kiddy. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#"><FaFacebook className="text-2xl hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="text-2xl hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="text-2xl hover:text-gray-300" /></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  


