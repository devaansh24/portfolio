import React from "react";

const ProjectCard = () => {
  return (
    <div className="max-w-md shadow-lg px-4 py-4 m-4">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="project-pic"
        />
      </div>
      <div>
        <h3 className="font-bold text-center px-2 py-2 m-3">Project Title</h3>
        <p>Project description</p>
      </div>
      <div className="flex justify-around px-4 py-4">
        <button className="hover:bg-slate-200 p-2 m-2 rounded-md">Live</button>
        <button className="hover:bg-slate-200 p-2 m-2 rounded-md">
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
