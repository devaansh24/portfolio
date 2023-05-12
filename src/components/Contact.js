import React from "react";
import gmail from "../utils/icons-images/gmail.png";
import { LinkedinIcon, TwitterIcon } from "react-share";

import github from "../utils/icons-images/github.png";
import instagram from "../utils/icons-images/instagram.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row max-w-full   h-screen font-mono  bg-gradient-to-r from-slate-200 to-blue-200 ">
      <div className="flex flex-col justify-center p-4 m-4">
        <h1 className="text-4xl py-4">Let's Chat.</h1>
        <h1 className="text-2xl py-2">Tell me about your project</h1>
        <h4 className="text-lg py-2">Let's create something together</h4>
        <div className="flex items-center">
          <img src={gmail} className="max-w-[20px] mr-2" alt="" />
          <h4>Mail me at: sharmaadevaansh@gmail.com</h4>
        </div>
      </div>

      <div className="p-4 m-4 ml-auto flex flex-col justify-center items-center">
        <h1 className="flex items-center justify-center">Social Media</h1>

        <div className="flex space-x-2 py-2">
          <a
            className="py-2"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={32} round={true} />
          </a>
          <a
            className="py-2"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={32} round={true} />
          </a>
          <a
            className="py-2"
            href="https://github.com/devaansh24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="max-w-[32px]" src={github} alt="" />
          </a>
          <a
            className="py-2"
            href="https://instagram.com/devaansharmaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="max-w-[32px]" src={instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
