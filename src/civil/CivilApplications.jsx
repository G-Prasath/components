import React from "react";

const CivilApplications = () => {
  const data = [
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/empty-parking-lot-parking-lane-outdoor-public-park_1127-3309.jpg?t=st=1731567859~exp=1731571459~hmac=b34ee85267563ec866cbd356cde7f4d5c30b62c31ebc756c4dfe45d302f7d77d&w=996",
      title: "Parking Lot",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 md:px-20 px-6 hover:shadow-lg ease-linear duration-300">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-y-5 p-5 group"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 15px -15px" }}
        >
          <img
            key={index}
            className="[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_100%_100%,_75%_100%,_46%_100%,_0_100%)] group-hover:transition-clipPath duration-700 h-[300px]"
            src={`${item.imgUrl}`}
          />
          <p className="text-md font-semibold">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CivilApplications;
