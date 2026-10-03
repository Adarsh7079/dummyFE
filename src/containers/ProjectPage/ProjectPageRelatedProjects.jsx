import React, { useState } from "react";
import image1 from "../../pages/ProjectPages/M3M/images/Relatedprojects.webp";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { BiSolidBuildings } from "react-icons/bi";
import { MdBedroomChild } from "react-icons/md";
import { RxSize } from "react-icons/rx";
import { MdMeetingRoom } from "react-icons/md";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectPageRelatedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
    {
      id: 2,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
    {
      id: 3,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
    {
      id: 4,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
    {
      id: 5,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
    {
      id: 6,
      image: image1,
      title: "M3M Altitude",
      address: "Sector 28",
      price: "6.6 Cr*",
      projectType: "Apartments",
      type: "3 & 4 BHK",
      size: "2332 Sq. Ft.",
      status: "Ready to Move",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative border bg-grey text-white p-6 shadow-md rounded-lg">
      <div className="w-full p-4">
        <h3 className="text-4xl font-bold mb-4">Related Projects</h3>
        <hr className="gradient-hr mb-3 w-20" />
      </div>

      <div className="overflow-hidden relative ml-5 mr-5">
        <div
          className="flex transition-transform gap-4 duration-300 rounded-lg"
          style={{ transform: `translateX(-${(currentSlide * 100) / 3}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none sm:w-[31.6%]  w-[99%] flex flex-col items-center mb-4 rounded-3xl bg-white"
            >
              <div className="w-full h-[270px] overflow-hidden rounded-t-3xl shadow-md">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="mt-3  p-4">
                <h5 className="text-lg text-black font-semibold -mt-3">
                  {project.title}
                </h5>
                <div className="grid grid-cols-2  gap-0 mt-2">
                  <div className="flex items-center -ml-1 mt-1">
                    <MdLocationOn className="text-xl text-black " />
                    <h6 className="text-xs text-black ml-1">
                      {project.address}
                    </h6>
                  </div>
                  <div className="flex items-center  -ml-1 mt-1">
                    <MdBedroomChild className="text-xl text-black " />
                    <h6 className="text-xs text-black  ml-1">{project.type}</h6>
                  </div>
                  <div className="flex items-center -ml-1 mt-1">
                    <BsCurrencyRupee className="text-xl text-black " />
                    <h6 className="text-xs text-black ml-1">{project.price}</h6>
                  </div>
                  <div className="flex items-center -ml-1 mt-1">
                    <RxSize className="text-xl text-black " />
                    <h6 className="text-xs text-black   ml-1 ">
                      {project.size}
                    </h6>
                  </div>
                  <div className="flex items-center  -ml-1 mt-1">
                    <BiSolidBuildings className="text-xl text-black " />
                    <h6 className="text-xs text-black  ml-1 ">
                      {project.projectType}{" "}
                    </h6>
                  </div>
                  <div className="flex items-center  -ml-1 mt-1">
                    <MdMeetingRoom className="text-xl text-black " />
                    <h6 className="text-xs  text-black ml-1 ">
                      {project.status}
                    </h6>
                  </div>
                </div>
                <button className="mt-5 bg-white text-black border border-black px-2 text-sm rounded hover:bg-gold transition-colors duration-300">
                  View more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute right-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none mr-1.5 my-1"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute left-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none ml-1.5 my-1"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProjectPageRelatedProjects;
