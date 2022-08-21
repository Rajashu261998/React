import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-5">
         Hi there, I'm <span style={{color:"tomato"}}>Ashutosh Raj </span> - a full stack web developer (<span style={{color:"tomato"}}>MERN </span>stack). I develop beautiful and user-friendly websites. I like what I’m currently doing (Web Development!…) and very much interested in Data Science & Machine Learning.
        </p>

        <br />

        <p className="text-xl">
        Talking about my personality, I describe myself as a <span style={{color:"teal"}}>result-oriented </span> person; great <span style={{color:"teal"}}> team player </span> yet competent solo worker and an <span style={{color:"teal"}}>efficient </span> individual. You can image me as a <span style={{color:"teal"}}>diligent</span> and <span style={{color:"teal"}}>easygoing</span> person with a good sense of humour.<br /> <br />

        I enjoy designing new stuff and learning new Technologies. If I'm not on my computer, am travelling, capturing moments and watching cricket.
        </p>
      </div>
    </div>
  );
};

export default About;