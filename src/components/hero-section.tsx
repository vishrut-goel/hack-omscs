import React from "react";

const HeroSection = () => {
  return (
    <section id = "#main" className="text-gray-600 body-font"
      style={{
        minHeight: "100vh",  // Set minimum height to cover the viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hack OMSCS 2024
          </h1>
          <p className="mb-8 leading-relaxed">
            Georgia Tech's OMSCS's 1st Virtual Hackathon
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Apply Now
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
