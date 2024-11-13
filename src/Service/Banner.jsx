import React from "react";

const Banner = ({imgUrl, title}) => {
  return (
    <div>
      <div className="relative lg:h-screen w-full aspect-video">
        <img
          src="https://img.freepik.com/free-photo/top-view-electric-cars-parking-lot_23-2148972403.jpg?t=st=1731494257~exp=1731497857~hmac=9655371f74be8680cd5df19325d78e684f83ed7eced52731c42604a2eb8f7ac4&w=1060"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center p-20 w-full">
          <h1 className="text-4xl text-white font-bold my-3 w-1/2">About Us</h1>
          <div className="w-1/2 h-auto">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, autem sunt? Esse molestias dicta reiciendis, non excepturi quos dolores voluptatibus deserunt vitae recusandae animi tempore provident aliquid, nostrum est repellat?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
