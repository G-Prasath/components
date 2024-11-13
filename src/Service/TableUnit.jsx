import React from "react";

const TableUnit = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap">
        {/* First section with text and image */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
           First <span className="text-purple-500">Here</span>
          </h1>
          <p className="text-gray-600 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
            Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit,
            odit quod!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-0 text-center" data-aos="fade-left" data-aos-duration="1500">
          <img
            src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="w-full"
            alt="About us"
          />
        </div>

        {/* Second section with image and text */}
        <div className="w-full md:w-1/2 max-md:order-2 p-0 text-center" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
          <img
            src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="w-full"
            alt="About us"
          />
        </div>
        <div className="w-full md:w-1/2 max-md:order-1 p-4 sm:p-5 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1500">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            Second <span className="text-purple-500">Here!</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
            Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit,
            odit quod!
          </p>
        </div>

        {/* Thired section with text and image */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            Thired <span className="text-purple-500">Here</span>
          </h1>
          <p className="text-gray-600 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
            Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit,
            odit quod!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-0 text-center" data-aos="fade-left" data-aos-duration="1500">
          <img
            src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="w-full"
            alt="About us"
          />
        </div>
      </div>
    </div>
  );
};

export default TableUnit;
