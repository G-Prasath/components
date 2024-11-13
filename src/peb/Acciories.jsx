import React from "react";

const Acciories = () => {
  return (
    <div className="container mx-auto my-10 w-full">
      {/* Event Item 1 */}
      <div className="mx-auto my-10 max-w-full">
        <div className="flex flex-col md:flex-row">
          {/* Time Block */}
          <div
            className={`flex items-center justify-center text-white py-10 md:w-1/3 border-2 border-[#3d7588]`}
          >
            <div className="text-center">
              <img
                src="https://paramountsteel.in/wp-content/uploads/2024/04/Primary-Frame.jpg"
                alt=""
                className="aspect-video w-full"
              />
            </div>
          </div>

          {/* Event Details */}
          <div
            className={`flex flex-col justify-center md:w-2/3 border-2 border-[#3d7588]`}
          >
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-5 text-md font-semibold uppercase border-b border-gray-200">
                        Attribute
                      </th>
                      <th className="py-3 px-5 text-md font-semibold uppercase border-b border-gray-200">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                        Frame Type
                      </td>
                      <td className="py-3 px-5 border-b border-gray-200">
                        Rigid Frame Clear Span
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                        Span Range
                      </td>
                      <td className="py-3 px-5 border-b border-gray-200">
                        20-40M
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 font-semibold uppercase border-b border-gray-200">
                        Remarks
                      </td>
                      <td className="py-3 px-5 border-b border-gray-200">
                        Suitable for warehouses, goods stores, workshops,
                        industrial buildings with clear span requirements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acciories;
