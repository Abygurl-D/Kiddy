import React from 'react';
import aboutImage from '../assets/images/about-img.jpg'; // Example image path

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 lg:ml-8 mt-8 lg:mt-0">
          <h3 className="text-4xl font-bold mb-4 text-pink-400">About Kiddy</h3>
          <h4 className='text-2xl font-bold text-green-500 mb-5 '>Bring Fun Life To Your Kids</h4>
          <p className="text-lg text-gray-700 mb-4">
            Kiddy is a place where children can explore, learn, and grow. We believe in creating an
            environment that fosters creativity and learning through fun activities.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
