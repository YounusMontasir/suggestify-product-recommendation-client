import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className=" py-12 px-6 text-center">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-5">
          Making Product Decisions Easier with Community-Powered Recommendations!
        </h2>
        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-blue-600">Suggestify</span> – your go-to platform for product queries and recommendations!
          Whether you're looking for the best gadgets, home essentials, or fashion items, our community is here to help.
        </p>

       
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="border border-gray-200  p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">🛒 Ask a Query</h3>
            <p className="text-gray-500 mt-2">Post a question about any product, and let others share their insights.</p>
          </div>
          <div className="border border-gray-200  p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">💡 Get Recommendations</h3>
            <p className="text-gray-500 mt-2">Receive suggestions from real users based on their experience.</p>
          </div>
          <div className="border border-gray-200  p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700">🔍 Compare & Choose</h3>
            <p className="text-gray-500 mt-2">Find the best option with community-backed insights.</p>
          </div>
        </div>

        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-4 px-4">
            At <span className="font-semibold text-blue-600">Suggestify</span>, we believe that the best product advice comes from real users.
            Our goal is to create a collaborative space where anyone can seek and share product recommendations effortlessly.
          </p>
        </div>

        
        <div className="mt-8">
          <Link to="/" className="px-6 py-3 bg-[#2D86EB] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Start Exploring Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
