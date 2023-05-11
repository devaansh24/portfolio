import React from "react";
import { motion } from "framer-motion";
import bannerp from "../utils/icons-images/bannerp.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-full min-h-screen flex flex-col justify-center items-center  p-20"
     
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="text-lg" variants={textVariants}>
        Hello, My name is
      </motion.p>
      <motion.h1 className="font-mono text-4xl py-2" variants={textVariants}>
        DEVANSH SHARMA.
      </motion.h1>
      <motion.div className="flex items-center" variants={textVariants}>
        <motion.h2 className="py-4 text-4xl">I BUILD THINGS FOR WEB</motion.h2>
        <motion.div
          className="max-w-[72px] flex justify-center items-center ml-auto"
          variants={imageVariants}
        >
          <img src={bannerp} alt="" />
        </motion.div>
      </motion.div>
      <motion.p className="text-lg" variants={textVariants}>
        I am a software engineer, expert in building user-friendly and efficient
        components
      </motion.p>
      <div className="flex justify-between w-64 mt-4 gap-6 py-6 items-center ">
        <Link to="/projects">
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none w-32 h-10 font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            PROJECTS
          </motion.button>
        </Link>
        <div className="w-6"></div>
        <Link to="/contacts">
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none w-32 h-10 font-mono"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            CONTACT
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Banner;
