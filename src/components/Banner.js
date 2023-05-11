import React from "react";
import bannerp from "../utils/icons-images/bannerp.png"
const Banner = () => {
    return (
      
        <div className="shadow-lg rounded-lg max-w-full justify-center align-center p-20">
          <p className="text-lg">Hello,My name is </p>
          <h1 className="font-mono text-4xl py-2">DEVANSH SHARMA.</h1>
          <h2 className="py-4 text-4xl">I BUILD THINGS FOR WEB</h2>
          <p className="text-lg">
            I am a software engineer,expert in building user friendly and
            efficient components
            </p>
            <div className="max-w-[72px] flex justify-center items-center">
                <img src={bannerp} alt="" />
            </div>
        </div>
      
    );
};

export default Banner;
