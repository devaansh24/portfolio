import React from "react";

const ProjectCard = ({ projectTitle, imageUrl }) => {
  return (
    <div className="max-w-md shadow-lg px-4 py-4 m-4">
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-center px-2 py-2 m-3">{projectTitle}</h3>
        <p>Project description</p>
      </div>
      <div className="flex justify-around px-4 py-4">
        <button className="hover:bg-slate-200 p-2  rounded-md">LIVE</button>
        <button className="hover:bg-slate-200 p-4  rounded-md">
          GITHUB
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
