import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";

const CivilTechSpec = () => {
  const data = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  ];
  return (
    <div className="max-w-screen-xl mx-auto border my-10">
      <div className="mt-3 text-gray-600 px-5">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div>
              <IoCheckboxOutline className="text-xl text-gray-500" />
            </div>
            <div>
              <p key={index} className="text-justify my-3">
                {item}
              </p>
            </div>
          </div>
        ))}

        <br />
      </div>
    </div>
  );
};

export default CivilTechSpec;
