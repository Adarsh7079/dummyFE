import React from "react";
import icon from "../../assets/images/Icon.webp";
import highlightimage from "../../assets/images/location.jpg";

const ProjectPageLocation = ({ data, image, locations: propLocations }) => {
  // Default location points fallback
  const defaultLocations = [
    "Land Area: 53.38 Acres.",
    "Project Rera No.: 1331-2023.",
    "Possession Date: Mar - 2028.",
    "Architecture by Arcop.",
    "Modular Kitchen with chimney & hob.",
    "Perimeter Security & CCTV Surveillance along with smart card access.",
  ];

  const locationList = propLocations || data?.locations || defaultLocations;
  const mapImage = image || data?.image || highlightimage;

  return (
    <div className="bg-[#121214] border border-amber-500/20 text-white p-6 sm:p-8 shadow-xl rounded-2xl">
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-3xl sm:text-4xl font-bold font-serif text-amber-400 mb-2">
          Location & Key Highlights
        </h3>
        <hr className="border-t-2 border-amber-500 w-20" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Map / Image Container */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-zinc-800 shadow-lg h-64 sm:h-80">
          {mapImage ? (
            <img
              src={mapImage}
              alt="Project Location Map"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <iframe
              title="Project Location"
              src="https://maps.google.com/maps?q=Gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
              loading="lazy"
            />
          )}
        </div>

        {/* Highlights List */}
        <div className="w-full lg:w-1/2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {locationList.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-zinc-900/70 border border-zinc-800 rounded-xl hover:border-amber-500/40 transition-colors"
              >
                <img
                  src={icon}
                  alt="check icon"
                  className="w-5 h-5 mt-0.5 object-contain flex-shrink-0"
                />
                <span className="text-sm sm:text-base text-zinc-200 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageLocation;