import React from 'react';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';

const ServicesSection = () => {
return (
<div className="flex justify-center space-x-8 py-12">
{/* Card 1 - Indoor Games */}
<div className="bg-red-500 text-white p-8 rounded relative text-center w-80">
<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 rounded-full p-4">
<FaHome className="text-white text-2xl" />
</div>
<h3 className="mt-8 text-xl font-semibold">Indoor Games</h3>
<p className="mt-4 text-gray-200">
A fun and safe space where kids can enjoy activities like Musical Chairs, Puzzles, and more, all under the supervision of our friendly staff. Perfect for parties, playdates, or just a day of fun, we make sure kids have a great time indoors!

</p>
</div>

{/* Card 2 - Outdoor Games */}
<div className="bg-yellow-500 text-white p-8 rounded relative text-center w-80">
<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full p-4">
<FaUserAlt className="text-white text-2xl" />
</div>
<h3 className="mt-8 text-xl font-semibold">Outdoor Game And Event</h3>
<p className="mt-4 text-gray-200">
Provide exciting activities like Relay Races, Treasure Hunts, and Ball Games, all in a safe, open environment. Ideal for parties or group play, kids can run, explore, and have fun with friends under the supervision of our staff!
</p>
</div>

{/* Card 3 - Camping for Kids */}
<div className="bg-teal-500 text-white p-8 rounded relative text-center w-80">
<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-500 rounded-full p-4">
<FaCog className="text-white text-2xl " />
</div>
<h3 className="mt-8 text-xl font-semibold">Camping for Kids</h3>
<p className="mt-4 text-gray-200">
A safe and fun outdoor adventure with activities like Nature Walks, Campfire Stories, and Tent Building. It's a great way for kids to explore, learn, and enjoy the outdoors under the careful supervision of our team!
</p>
</div>
</div>
);
};

export default ServicesSection;
