import React from "react";

const Applications = () => {
  const App = [
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/08/70/41/360_F_8704131_EAX3f4YOAhDQDLzRMLxOuCKtQdGM9jLE.jpg",
      title: " Tailwind card",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 w-full items-center justify-center sm:px-20 mt-20">
      {App.map((item, index) => (
        <div key={index} className="group relative my-10 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg border-2 border-[#3d7588]">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {item.title}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applications;
