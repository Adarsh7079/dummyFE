import { FaLinkedin } from "react-icons/fa";

const teamMemberImage = "/team-member-placeholder.svg";

import React, { useState } from "react"; // Import useState
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Team members data
const teamMembers = [
  {
    imageSrc: teamMemberImage,
    name: "Alex Morgan",
    title: "Passionate Leadership, Remarkable Impact",
    description:
      "Alex helps clients make informed property decisions through clear guidance, local market knowledge, and a focus on practical solutions.",
  },
  {
    imageSrc: teamMemberImage,
    name: "Casey Taylor",
    title: "Driving Success through Expertise",
    description:
      "Casey supports clients with property research, clear comparisons, and guidance throughout the buying process.",
  },
  {
    imageSrc: teamMemberImage,
    name: "Jamie Parker",
    title: "Expertise You Can Trust, Results You Can See",
    description:
      "Jamie works with buyers to understand their needs and identify residential and commercial property options.",
  },
];

// Arrow components for the slider
const NextArrowTwo = ({ onClick }) => (
  <div
    className="bg-black bg-opacity-70 absolute cursor-pointer z-10 right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon={faChevronRight}
      style={{ color: "#ffffff", fontSize: "1.5rem" }}
    />
  </div>
);

const PrevArrowTwo = ({ onClick }) => (
  <div
    className="bg-black bg-opacity-70 absolute cursor-pointer z-10 left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
    onClick={onClick}
  >
    <FontAwesomeIcon
      icon={faChevronLeft}
      style={{ color: "#ffffff", fontSize: "1.5rem" }}
    />
  </div>
);

// Slider settings
const settingsTwo = {
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrowTwo />,
  prevArrow: <PrevArrowTwo />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const AboutUsPageMembersinfo = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  
  const toggleDescription = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  return (
    <>
      <div className="hidden sm:flex">
        <div className="">
          <div className="Mainsection h-[70vh] bg-white text-white pt-[1%] px-28  border-t-4 border-gold flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-3/4 flex flex-col justify-center mt-6  space-y-6 ">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Passionate Leadership, Remarkable Impact
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Alex helps clients make informed property decisions through
                  clear guidance, local market knowledge, and practical
                  solutions.
                </div>
                <div className="text-4xl font-medium text-addington text-gold">
                  Alex Morgan
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Founder & CEO -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-[35%] flex flex-col justify-center items-center px-4  ">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[120%] -mt-[23%] max-w-sm rounded-lg  "
                />
              </div>
            </div>
          </div>
          <div className="Mainsection h-[70vh] bg-white text-white  px-28  flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-[35%] flex flex-col justify-center items-center px-4 ">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[140%] -mt-[40%] max-w-sm rounded-lg "
                />
              </div>
              <div className="w-3/4 flex flex-col space-y-6 pt-2">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Driving Success through Expertise
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Casey supports clients with property research, clear
                  comparisons, and guidance throughout the buying process.
                </div>
                <div className=" text-4xl font-medium text-addington text-gold">
                  Casey Taylor
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Co-Founder -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Mainsection h-[70vh] bg-white text-white  px-28   flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-3/4 flex flex-col space-y-6 pr-8">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Expertise You Can Trust, Results You Can See
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Jamie works with buyers to understand their needs and identify
                  residential and commercial property options.
                </div>
                <div className="text-4xl font-medium text-addington text-gold">
                  Jamie Parker
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Managing Partner -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-[35%] flex justify-center md:justify-end ">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[120%] -mt-[30%] max-w-sm rounded-lg  "
                />
              </div>
            </div>
          </div>
          <div className="Mainsection h-[70vh] bg-white text-white  px-28  flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-[35%] flex justify-center md:justify-end pl-24">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[140%] -mt-[45%] max-w-sm rounded-lg  "
                />
              </div>
              <div className="w-3/4 flex flex-col space-y-6 ">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Leading with Vision and Determination
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Morgan helps clients compare property options and understand
                  each step of the purchase process.
                </div>
                <div className="text-4xl font-medium text-addington text-gold">
                  Morgan Ellis
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Managing Partner -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Mainsection h-[70vh] bg-white text-white  px-28   flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-3/4 flex flex-col space-y-6 pr-8">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Deep Market Insights for Your Real Estate Success
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Riley provides practical support with residential and
                  commercial property searches.
                </div>
                <div className="text-4xl font-medium text-addington text-gold">
                  Riley Jordan
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Managing Partner -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-[35%] flex justify-center md:justify-end ">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[120%] -mt-[32%] max-w-sm rounded-lg  "
                />
              </div>
            </div>
          </div>
          <div className="Mainsection h-[70vh] bg-white text-white  px-28   flex flex-col justify-center items-center">
            <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-8 rounded-3xl border-4 border-gold shadow-2xl">
              <div className="w-[35%] flex justify-center md:justify-end pl-24">
                <img
                  src={teamMemberImage}
                  alt="Director's Image"
                  className="w-[140%] -mt-[40%] max-w-sm rounded-lg  "
                />
              </div>
              <div className="w-3/4 flex flex-col space-y-6 ">
                <div className="text-3xl font-semibold text-addington text-gold">
                  Delivering Excellence in Every Transaction
                </div>
                <div className="text-xl  text-justify text-gray-300">
                  Avery helps clients review listings, compare features, and
                  make decisions that fit their needs.
                </div>
                <div className="text-4xl font-medium text-addington text-gold">
                  Avery Quinn
                </div>
                <div className="flex  text-lg  font-medium text-addington text-gold">
                  <p className="-mt-4 self-end text-xl">Managing Partner -</p>
                  <div className="flex self-start ml-2 -mt-[1.8%] ">
                    <FaLinkedin className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
      <Slider {...settingsTwo}>
        {teamMembers.map((member, index) => {
          const isExpanded = expandedIndexes.includes(index);
          return (
            <div
              key={index}
              className="h- p-4 flex flex-col items-center bg-grey text-white rounded-[2%] shadow-lg sm:p-6 md:p-8 lg:p-10"
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-full -mt-[25%]  object-cover rounded-full mx-auto"
              />
              <h1 className="text-3xl text-gold text-center font-bold mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                {member.name}
              </h1>
              <p
                className={`text-lg mt-2 sm:text-base md:text-lg lg:text-xl text-justify overflow-hidden ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {member.description}
              </p>
              <button
                onClick={() => toggleDescription(index)}
                className="text-gold mt-2"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
    </>
  );
};

export default AboutUsPageMembersinfo;
