import React from "react";
import icon from "../../assets/images/Icon.webp";
import highlightimage from "../../pages/ProjectPages/M3M/images/highlight.webp";

const ProjectPageHighlight = () => {
  const highlights = [
    "Land Area: 53.38 Acres.",
    "Project Rera No.: 1331-2023.",
    "Possession Date: Mar - 2028.",
    "Architecture by Arcop.",
    "Modular Kitchen with chimney & hob.",
    "Perimeter Security & CCTV Surveillance along with smart card access.",
  ];

  return (
    <>
      <div className="flex  bg-grey text-white border-2  shadow-md rounded-lg text-justify">
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-4xl font-bold mb-4">Highlights</h3>
          <hr className="gradient-hr mb-3 w-20" />
          <ul className="space-y-2 mt-10">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <img src={icon} alt="icon" className="mr-2 w-5 h-5 mt-1" />
                <span className="text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[100%] md:w-1/2 border-4 flex items-center justify-center">
          <img src={highlightimage} alt="Highlights" />
        </div>
      </div>
    </>
  );
};

export default ProjectPageHighlight;
