import React from "react";

const Content = () => {
  return (
    <section id= "faq" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            FAQ
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Hack OMSCS is a 24-hour virtual hackathon. This event aims to join OMSCS students from around the world to solve novel challenges, win exciting prizes, and meet loads of new friends! This event is open to everyone and is an opportunity for students of all backgrounds, skill levels, and experiences to innovate and showcase their ideas. Whether you are a first-time hacker or a seasoned veteran, we encourage you to enter hackOMSCS with enthusiasm and curiosity. Our hope is that you challenge yourself with a fun project, learn something new along the way, and feel proud of what you accomplished at the end of it all.
          </p>
        </div>

        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default Content;
