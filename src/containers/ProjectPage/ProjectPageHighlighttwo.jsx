
import React from "react";
import icon from "../../assets/images/Icon.webp";
import highlightimage from "../../assets/images/highlight.webp";

const ProjectPageHighlighttwo = () => {
  const locations = [
    "Perimeter Security & CCTV Surveillance along with smart card access.",
    "Unmatched views of Delhi Reserve Greens & Central Greens.",
    "Best Practices Adopted From World’s 12 Most Recognized Urban Developments.",
    "Located On The Dwarka Expressway, Well Connected To The Airport.",
    "Strategically placed at the Border of Delhi and Gurgaon.",
    "Perimeter Security & CCTV Surveillance along with smart card access.",
  ];

  return (
    <>
      <div className=" border bg-grey text-white p-6 shadow-md rounded-lg">
        <div>
          <h3 className="text-4xl font-bold mb-4">Highlights</h3>
          <hr className="gradient-hr mb-3 w-20" />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-4 pt-4 pb-4">
            <img
              src={highlightimage}
              alt="Project Location"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start">
                  <img src={icon} alt="icon" className="mr-2 w-5 h-5 mt-1" />
                  <span className="text-lg">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPageHighlighttwo;


