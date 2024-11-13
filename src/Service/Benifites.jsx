import React from "react";

const Benifites = () => {
  const data = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum nobis deleniti consectetur at quisquam minima cum magnam amet fuga, nam molestias repudiandae vero, quasi laudantium neque voluptatum minus quidem.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni quis in impedit numquam dolorum ea esse placeat modi rerum!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum nobis deleniti consectetur at quisquam minima cum magnam amet fuga, nam molestias repudiandae vero, quasi laudantium neque voluptatum minus quidem.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni quis in impedit numquam dolorum ea esse placeat modi rerum!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum nobis deleniti consectetur at quisquam minima cum magnam amet fuga, nam molestias repudiandae vero, quasi laudantium neque voluptatum minus quidem.",
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-10">
      {data.map((item, index) => (
        <div className="card relative bg-green-700 w-full max-w-[500px] min-h-[200px] rounded-xl p-8 pt-24 text-white">
          <div
            className="index absolute top-0 left-0 w-20 aspect-square bg-lightgreen rounded-br-[35%]"
            style={{ backgroundColor: "lightgreen" }}
            data-index={index}
          >
            <span
              className="flex justify-center items-center text-green-700 text-3xl font-semibold"
              style={{
                position: "absolute",
                inset: 0,
                content: `"${index}"`,
              }}
            >
              {index+1}
            </span>

            {/* Top-right curve */}
            <span
              className="index__curve top-right absolute w-4 aspect-square"
              style={{
                backgroundColor: "lightgreen",
                left: "100%",
                top: 0,
              }}
            >
              <span
                className="absolute w-full h-full rounded-full"
                style={{
                  backgroundColor: "seagreen",
                  borderRadius: "50%",
                  width: "200%",
                  height: "200%",
                }}
              ></span>
            </span>

            {/* Bottom-left curve */}
            <span
              className="index__curve bottom-left absolute w-4 aspect-square"
              style={{
                backgroundColor: "lightgreen",
                left: 0,
                top: "100%",
              }}
            >
              <span
                className="absolute w-full h-full rounded-full"
                style={{
                  backgroundColor: "seagreen",
                  borderRadius: "50%",
                  width: "200%",
                  height: "200%",
                }}
              ></span>
            </span>
          </div>

          <div className="content">
            <p className="text-justify">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benifites;
