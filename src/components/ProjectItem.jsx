import React from "react";
import { SocialIcon } from "react-social-icons";

const ProjectItem = ({ data }) => {
  const { name, img, desc, stack, link, git } = data;
  return (
    <div className="w-[100%] md:w-[25%] m-8 ">
      <a href={link} target="_blank">
        <img
          className="rounded-2xl hover:scale-110 duration-300"
          alt={name}
          src={img}
        />
      </a>
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
      <SocialIcon
        className="m-2 p-2"
        bgColor="white"
        fgColor="gray"
        target="_blank"
        url={link}
      />
      <SocialIcon
        className="m-2 p-2"
        bgColor="white"
        fgColor="gray"
        target="_blank"
        url={git}
      />
    </div>
  );
};

export default ProjectItem;
