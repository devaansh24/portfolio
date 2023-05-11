import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
const Projects = () => {
  return (
    <>
     
      <div>
        <h1 className="font-bold text-3xl text-center py-6">PROJECTS</h1>
        <div className="py-4 shadow-lg rounded-lg p-10 bg-slate-100 flex flex-wrap  px-4 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
