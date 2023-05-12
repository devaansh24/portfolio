import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../utils/projectsdata";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-200 ">
      <div className="py-4 shadow-lg rounded-lg p-4 flex flex-wrap justify-center  ">
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            imageUrl={item.imageUrl}
            projectTitle={item.projectTitle}
            githubUrl={item.githubUrl}
            liveUrl={item.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
