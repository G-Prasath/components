import React from "react";


const WhyChoose = () => {
  return (
    <div className="y-us-section py-20">
      <div className="container mx-auto">
        <div className="row flex justify-center">
          <div className="md:w-2/3 sm:w-full text-center mb-12">
            <div className="y-us-head">
              <div className="y-us-title">
                <h2 className="text-black text-2xl uppercase mb-2">
                  Why choose us
                </h2>
                <p className="text-gray-600 leading-6 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim
                </p>
                <span className="y-us-title-border h-1 w-12 inline-block rounded"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap">
          {/* Left Column */}
          <div className="md:w-1/3 sm:w-full px-4">
            <div className="flex flex-col gap-y-10">
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Safety First
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Clean Surface
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Professional
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:w-1/3 sm:w-full px-4 flex justify-center items-center mb-6">
            <img
              src="https://img.freepik.com/free-photo/car-park_1203-3450.jpg?t=st=1731498168~exp=1731501768~hmac=60bb0ee9438a3b72a1747c6db30290735f4e81a9c02fcc53782a5eb86f2e1f54&w=360"
              alt="Why Choose Us"
              className="w-full object-cover rounded"
            />
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 sm:w-full px-4">
            <div className="flex flex-col gap-y-10">
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Sustainability
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Modern Painting
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Home Decor
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
