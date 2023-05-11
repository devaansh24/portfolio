import React from "react";
import gmail from "../utils/icons-images/gmail.png";
import { LinkedinIcon, TwitterIcon } from "react-share";
import { Link } from "react-router-dom";
import github from "../utils/icons-images/github.png";
import instagram from "../utils/icons-images/instagram.png";
const Contact = () => {
  return (
    <div className=" flex flex-row max-w-full mx-20  h-screen font-mono m-2 p-2">
      <div className=" flex flex-col  justify-center  p-4 m-4  ">
        <h1 className="text-4xl py-4">Let's Chat.</h1>
        <h1 className="text-2xl py-2 ">Tell me about your project</h1>
        <h4 className="text-lg py-2">Let's create something together</h4>
        <img src={gmail} className="max-w-[20px]" alt="" />
        <h4>Mail me at:sharmaadevaansh@gmail.com</h4>
      </div>

      <div className="p-4 m-4 ml-auto flex flex-col justify-center">
        <h1>Social Media</h1>

        <Link className="py-2 " to="https://linkedin.com">
          <LinkedinIcon size={32} round={true} />
        </Link>
        <Link className="py-2" to="https://twitter.com">
          <TwitterIcon size={32} round={true} />
        </Link>
        <Link className="py-2" to="https://github.com/devaansh24">
          <img className="max-w-[32px]" src={github} alt="" />
        </Link>
        <Link className="py-2" to="https://instagram.com/devaansharmaa">
          <img className="max-w-[32px]" src={instagram} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
