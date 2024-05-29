import React from "react";
import SocialMedia from "./SocialMedia";

const Intro = () => {
  return (
    <div id="bio" className="flex flex-wrap mt-11 mx-1 md:mx-5 lg:mx-32">
      <section className="w-[100%] md:w-[80%] md:m-2 p-10">
        <h1 className="text-gray-900 text-5xl md:text-7xl leading-tight ">
          Hey,👋 <br />
          I'm Akshay Bhardwaj - a full stack developer and amateur enterprenuer
        </h1>
        <p className="my-7 text-gray-700 tracking-wider">
          I am a full stack developer with expertise in front-end technologies
          mainly React Js. I have experience in building scalable, secure and
          reliable web applications using various frameworks and technologies. I
          enjoy solving complex problems and learning new skills. I've also used
          Node.Js, MongoDB, MSSQLServer to create backend systems. I am always
          looking for new challenges and opportunities to grow as a developer.
          <br />
          <br />
          I've also worked with various small businesses and influencers helping
          them in setting up their websites ad stores.
        </p>
        <SocialMedia />
      </section>
      {/* <section>
        <img
          className="rounded-3xl"
          alt="profile image"
          src="../src/assets/WhatsApp Image 2024-02-13 at 1.24.04 PM.jpeg"
        />
      </section> */}
    </div>
  );
};

export default Intro;
