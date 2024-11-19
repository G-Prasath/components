import React from "react";

const Orders = () => {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      {/* Images and Background */}
      <div className="w-full relative flex items-center justify-center">
        <img
          src="https://i.ibb.co/4sYZ8gC/img-2.png"
          alt="dining"
          className="w-full h-full absolute z-0 hidden xl:block"
        />
        <img
          src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
          alt="dining"
          className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
        />
        <img
          src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
          alt="dining"
          className="w-full h-full absolute z-0 sm:hidden"
        />

        {/* Content Section */}
        <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-4xl font-semibold leading-9 text-white text-center">
            Don't miss out!
          </h1>

          {/* Subscription Form */}

          <div className="flex flex-col items-center lg:w-8/12 w-full mt-12 space-y-4">
            {/* Name Input */}
            <div className="flex md:flex-row flex-col w-full gap-5">
              <input
                className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                placeholder="Name"
                type="text"
              />

              {/* Email Input */}
              <input
                className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                placeholder="Email Address"
                type="email"
              />
            </div>

            <div className="flex md:flex-row flex-col w-full gap-5">
              {/* Phone Input */}
              <input
                className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
                placeholder="Phone Number"
                type="tel"
              />

              {/* Roles Dropdown */}
              <select className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md bg-white placeholder-gray-500">
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Message Box */}
            <textarea
              className="border border-gray-300 text-base w-full font-medium leading-none text-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md placeholder-gray-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <button className="focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-blue-500 w-full bg-blue-600 text-white py-4 px-6 rounded-md hover:bg-blue-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
