import React from "react";

const ProjectItem = ({ data }) => {
  const { name, img, desc, stack, link } = data;
  return (
    <div className="w-[25%] m-8 ">
      <img
        className="rounded-2xl hover:scale-110 duration-300"
        alt={name}
        src={img}
      />
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <span
            key={item}
            className="bg-pink-300 mt-6 mx-1 p-2 rounded-lg text-white"
          >
            {item}
          </span>
        ))}
      </div>
      <h2 className="font-bold mt-5 py-2 text-3xl text-gray-800">{name}</h2>
      <p className="text-gray-700 mt-5 text-sm leading-relaxed tracking-wider">
        {desc}
      </p>
    </div>
  );
};

export default ProjectItem;
