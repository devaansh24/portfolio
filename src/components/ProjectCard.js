import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ projectTitle, imageUrl, projectDescription }) => {
  return (
    <div className="max-w-md shadow-lg px-4 py-4 m-4">
      <div>
        <img
          src={imageUrl}
          alt={projectTitle}
          className="w-full h-42 object-cover"
        />
      </div>
      <div>
        <h3 className="font-bold text-center px-2 py-2 m-3">{projectTitle}</h3>
        <p>{projectDescription}</p>
      </div>
      <div className="flex justify-around px-4 py-4">
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none w-32 h-10 font-mono"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          LIVE
        </motion.button>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none w-32 h-10 font-mono"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          GITHUB
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectCard;
