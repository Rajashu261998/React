import React from "react";
import travelocity from "../assets/portfolio/travelocity.png";
import sugarcosmetic from "../assets/portfolio/sugercosmatic.png";




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: travelocity,
      link: 'https://silly-queijadas-a569ac.netlify.app/',
      repo: 'https://github.com/Sunny7079/travelocity',
      name: 'travelocity'
    },
    {
      id: 2,
      src: sugarcosmetic,
      link: 'https://sparkling-speculoos-ccb3e4.netlify.app/',
      repo: 'https://github.com/Aaru1996/Sugar_Cosmetics_clone',
      name: 'SugarCosmetic Clone'
    },
    
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">I have spent a lot of time on different projects. I love doing everything from scratch. Here are some of my favorite ones which sum up my knowledge. I have done many small projects from different courses and challenges to learn the basics. You can check them on my Github.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
              <p style={{textAlign:"center"}}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;