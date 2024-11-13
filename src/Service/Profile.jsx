import React from "react";

const Profile = () => {
  return (
    <div className="sec-padding">
      <div className="">
        {/* Left content section */}
        <h1 className="mb-4 text-4xl sm:text-5xl font-semibold" data-aos="fade-right">
          Your Headline <span className="text-purple-500">Here</span>
        </h1>
        <div
          className="w-full md:h-[70vh] aspect-square bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3782140/pexels-photo-3782140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
          }}
          data-aos="fade-bottom" data-aos-duration="3000"
        ></div>

        {/* Right image section */}
        <div className="w-full p-3 sm:p-5">
          <div className="sm:p-5">
            <p className="text-gray-600 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
              Distinctio voluptatibus dolor quaerat quo omnis illo sequi at
              velit, odit quod! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Fugiat, beatae sunt obcaecati dignissimos autem
              quas iusto omnis expedita facere. Molestias deserunt, similique
              sit exercitationem omnis ullam sint rerum repellendus quibusdam.
              Delectus voluptates consectetur quam. Praesentium facilis odio
              ratione? Nam iste necessitatibus facilis. Sit fugiat ratione
              exercitationem alias optio reprehenderit explicabo?
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              dicta necessitatibus dolorum officiis et molestias quas. Placeat
              eius minima earum, atque laborum dolorem quam. Amet sequi qui odit
              rerum cupiditate. Libero saepe magni eaque, blanditiis provident
              asperiores hic laborum veritatis neque omnis praesentium et facere
              illum, perferendis mollitia nesciunt impedit earum possimus
              tenetur totam! Et quidem maxime, accusamus illum commodi nemo,
              nesciunt, vero minima deserunt autem deleniti tempore? Facere
              asperiores enim modi in. Minima exercitationem est dicta nesciunt
              similique possimus, quis hic nam iure enim cumque amet magnam
              repellendus consequatur eius, tempora cupiditate adipisci?
              Accusamus magnam ratione quidem enim iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
