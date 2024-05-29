import React from "react";
import ProjectItem from "./ProjectItem";
import { projectData } from "../utils/projectData";

const Projects = () => {
  return (
    <>
      <h1
        id="projects"
        className="mx-16 my-10 font-bold text-8xl text-gray-700"
      >
        Personal Projects
      </h1>
      <div className="mx-10 my-12 p-2 flex flex-wrap justify-evenly">
        {projectData.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
