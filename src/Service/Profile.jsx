import React from "react";

const Profile = ({data}) => {
  const data = {
    heading: "Page Heading",
    para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sed, incidunt quis ad est eveniet totam. Reprehenderit, cupiditate nulla esse, itaque distinctio non enim libero vitae veritatis, porro officia nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est optio eligendi assumenda exercitationem aut earum, numquam perferendis voluptatem delectus ipsum, ullam repudiandae fuga distinctio consequuntur perspiciatis quod consectetur quibusdam animi fugiat asperiores, modi tempore. Maiores facilis perferendis nostrum assumenda nobis rerum dolorum ut, quibusdam recusandae reiciendis autem facere dolores natus.",
    image: "https://picsum.photos/200/300"
  }
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-5 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-xl w-full mb-4 font-medium text-[#305764]">
              {data.heading}
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              {data.para}
            </p>
          </div>
          <div className="md:w-1/2 w-ful">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={data.img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;