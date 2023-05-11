import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../utils/projectsdata";
const Projects = () => {
  return (
    <>
      <div>
        <h1 className="font-bold font-mono text-3xl text-center py-6">PROJECTS</h1>
        <div className="py-4 shadow-lg rounded-lg p-10 flex flex-wrap  px-4 ">
          {projectData.map((item) => (
            <ProjectCard
              imageUrl={item.imageUrl}
              projectTitle={item.projectTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
