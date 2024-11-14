const ServiceWhyChoose = () => {
  return (
    <div className="py-24 bg-white">
      <div className="text-center mb-24">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
          SERVICES
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-indigo-600"> Features</span>
        </h3>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 md:gap-8 flex items-center justify-center">
        {/* Left Features List */}
        <div>
          <ul className="grid grid-cols-1 md:gap-10">
            <FeatureItem
              iconPath="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              title="Feature Name"
              subtitle="Sub Headline"
            />
            <FeatureItem
              iconPath="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              title="Feature Name"
              subtitle="Sub Headline"
            />
            <FeatureItem
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
              title="Feature Name"
              subtitle="Sub Headline"
            />
          </ul>
        </div>

        {/* Center Image */}
        <div>
          <div
            className="h-full mx-auto rounded bg-cover bg-right shadow-lg"
            style={{
              minHeight: "450px",
              backgroundImage:
                "url(https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
            }}
          ></div>
        </div>

        {/* Right Features List */}
        <div>
          <ul className="grid grid-cols-1 md:gap-10">
            <FeatureItem
              iconPath="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              title="Feature Name"
              subtitle="Sub Headline"
            />
            <FeatureItem
              iconPath="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              title="Feature Name"
              subtitle="Sub Headline"
            />
            <FeatureItem
              iconPath="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              title="Feature Name"
              subtitle="Sub Headline"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ iconPath, title, subtitle }) => (
  <li className="my-5 md:mt-0">
    <div className="flex justify-center items-center">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg leading-6 font-medium text-gray-900 font-semibold">{title}</h4>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  </li>
);

export default ServiceWhyChoose;
