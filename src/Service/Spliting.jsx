import React from "react";

const Spliting = () => {
  return (
    <div>
      <div className="flex items-center md:flex-row flex-col justify-center bg-[#e5f6eb]">
        <div
          className={`bg-[#53d181] w-full md:clip-custom-polygon inline-flex items-center p-10`}
        >
          <ul>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
          </ul>
        </div>
        <div className="bg-[#e5f6eb] w-full inline-flex items-center p-10">
          <ul>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
            <li>List Of Diffrents</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spliting;
