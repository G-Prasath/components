import React from "react";

const Spliting = () => {
  const data = {
    lSide: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eligendi!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eligendi!",
    ],
    rSide: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eligendi!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, repellat. Fugit accusamus sunt aliquam ex accusantium est facere iure quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, eligendi!",
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#e5f6eb]">
      <div className="flex flex-col md:flex-row justify-center w-full">
        <div className="bg-[#378754] w-full md:clip-custom-polygon inline-flex items-center p-10">
          <ul>
            {data.lSide.map((lItem, lIndex) => (
              <li key={lIndex} className="text-slate-200 text-md mb-4 list-disc">
                {lItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#e5f6eb] w-full inline-flex items-center p-10">
          <ul>
            {data.rSide.map((rItem, rIndex) => (
              <li key={rIndex} className="text-md mb-4 list-disc">
                {rItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spliting;
