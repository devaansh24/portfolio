import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../utils/projectsdata";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold font-mono text-3xl text-center py-6">
        PROJECTS
      </h1>
      <div className="py-4 shadow-lg rounded-lg p-4 flex flex-wrap justify-center">
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            imageUrl={item.imageUrl}
            projectTitle={item.projectTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
