import React from 'react';

const SignupSection = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg relative px-10 py-10 md:py-20 md:px-20 rounded-lg overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <img
                src="https://i.ibb.co/bRJVsq5/contact-us-box-bg.png"
                alt="signup"
                className="w-full"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Sign Up</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Error rem architecto commodi aut omnis officiis.
                </p>
                <form className="space-y-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      placeholder="Your Name"
                      className="w-full py-3 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full py-3 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="relative form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full py-3 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <a href="#0" className="absolute top-3 right-4 text-gray-500">
                      <i className="fas fa-eye"></i>
                    </a>
                  </div>
                  <div className="relative form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Re-enter Password"
                      className="w-full py-3 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <a href="#0" className="absolute top-3 right-4 text-gray-500">
                      <i className="fas fa-eye"></i>
                    </a>
                  </div>
                  <div className="form-group text-left">
                    <span className="text-gray-600">
                      Already registered? <a href="#" className="text-red-500">Sign in</a>
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="bg-red-500 text-white font-semibold uppercase py-3 px-8 rounded-md cursor-pointer hover:bg-red-600 transition"
                    />
                  </div>
                </form>
              </div>
              <div className="space-y-6 md:pl-10 text-white">
                <h2 className="text-3xl font-semibold">Welcome To Lorem</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem architecto commodi aut omnis officiis. Aut est recusandae minima explicabo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
