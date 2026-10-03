import trendingprojects from "../../assets/images/HomePageImages/trendingprojects.webp";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/images/HomePageImages/TrendingProjects/M3M Altitude.webp";
import Image2 from "../../assets/images/HomePageImages/TrendingProjects/M3M Mansion.webp";
import Image3 from "../../assets/images/HomePageImages/TrendingProjects/Smartworld One DXP.webp";
import Image4 from "../../assets/images/HomePageImages/TrendingProjects/Whiteland Urban Resort.webp";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePageTrendingProjects = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const newsItems = [
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image2,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image3,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image4,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
  ];

  const NextArrowTwo = ({ onClick }) => {
    return (
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
  };

  const PrevArrowTwo = ({ onClick }) => {
    return (
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
  };

  const settingsTwo = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrowTwo />,
    prevArrow: <PrevArrowTwo />,
    beforeChange: (current, next) => setItemIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      className=" bg-cover bg-center min-h-screen border-t-4 border-gold flex flex-col justify-center items-center text-center text-white relative"
      style={{ backgroundImage: `url(${trendingprojects})` }}
    >
      <div className="-mb-6">
        <h2 className="text-4xl mb-2 text-gold text-aesthete">Trending</h2>
        <h3 className="text-6xl font-bold mb-4 text-gold text-addington">
          Projects
        </h3>
      </div>

      <div className="Desktop container mx-auto px-4 py-8">
        <Slider {...settingsTwo} className="flex">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className={
                idx === itemIndex
                  ? "opacity-100 rounded-xl transition-opacity duration-300 ease-in-out"
                  : "opacity-75 rounded-xl"
              }
            >
              <div className="w-full border sm:w-[90%] md:w-[85%] mx-auto lg:w-[80%] xl:w-[75%] h-[500px] sm:h-[460px]   rounded-xl text-center bg-white transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between shadow-3xl-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[65%] rounded-t-xl shadow-3xl-white"
                />
                <div className="px-4 md:pb-4">
                  <h3 className="text-sm md:text-xl text-black text-left font-medium leading-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center -ml-1 mt-2 ">
                    <MdLocationOn className="text-2xl text-black" />
                    <h6 className="text-mg text-black ml-1">{item.address}</h6>
                  </div>
                  <div className="flex items-center mt-2 hidden md:flex">
                    <BsCurrencyRupee className="text-xl text-black" />
                    <h6 className="text-mg text-black ml-1">{item.price}</h6>
                  </div>
                  <div className="mt-2 ml-1 flex justify-left">
                    <button className="bg-black text-white py-1 px-2 rounded-lg hover:bg-white hover:text-black hover:border-black hover:border transition duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="rounded-3xl border border-gold py-2 px-4">
        <h3 className="text-xl font-bold text-gold"><Link to="/projects">View All Projects</Link></h3>
      </div>
    </div>
  );
};

export default HomePageTrendingProjects;
