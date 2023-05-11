import React from "react";
import { motion } from "framer-motion";
import bannerp from "../utils/icons-images/bannerp.png";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="max-w-full h-screen flex flex-col justify-center items-center p-20"
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
    </motion.div>
  );
};

export default Banner;
