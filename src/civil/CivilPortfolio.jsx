import React from "react";

const CivilPortfolio = () => {
  const data = [
    {
      title: "Delhi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/961/859/615/newdelhi-redfort-landmark-sky-wallpaper-preview.jpg",
    },
    {
      title: "Agra",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg",
    },
    {
      title: "Delhi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/961/859/615/newdelhi-redfort-landmark-sky-wallpaper-preview.jpg",
    },
    {
      title: "Agra",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg",
    },
    {
      title: "Delhi",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/961/859/615/newdelhi-redfort-landmark-sky-wallpaper-preview.jpg",
    },
    {
      title: "Agra",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 overflow-hidden p-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="group relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <img
            className="w-full h-full object-cover"
            src={item.imageUrl}
            alt={item.title}
          />

          <div className="absolute inset-0 hover:bg-black hover:bg-opacity-70 text-white flex flex-col items-center justify-center transition-all duration-300 transform group-hover:bottom-0 bottom-[-200%]">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-center p-3 text-[16px]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CivilPortfolio;
