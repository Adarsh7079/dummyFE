import { useState } from "react";
import background from "../../assets/images/HomePageImages/ourpresence.webp";
import image1 from "../../assets/images/HomePageImages/Trendingprojectsimage.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DelhiImage from "../../assets/images/HomePageImages/OurPresence/Delhi.webp";
import GurgaonImage from "../../assets/images/HomePageImages/OurPresence/Gurguram.webp";
import DubaiImage from "../../assets/images/HomePageImages/OurPresence/Dubai.webp";
import MumbaiImage from "../../assets/images/HomePageImages/OurPresence/Mumbai.webp";
import BengaluruImage from "../../assets/images/HomePageImages/OurPresence/Bengaluru.webp";
import PuneImage from "../../assets/images/HomePageImages/OurPresence/Pune.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HomePageOurPresence = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const newsItems = [
    {
      title: "Mumbai",
      image: MumbaiImage,
      address: "Sector 77, Gurgaon",
      price: "7 cr* Onwards",
    },
    {
      title: "Bangaluru",
      image: BengaluruImage,
      address: "Sector 28, Gurgaon",
      price: "6.51 cr* Onwards",
    },
    {
      title: "Delhi",
      image: DelhiImage,
      address: "Sector 77, Gurgaon",
      price: "7 cr* Onwards",
    },
    {
      title: "Pune",
      image: PuneImage,
      address: "Sector 63, Gurgaon",
      price: "8 cr* Onwards",
    },
  ];

  const NextArrowTwo = ({ onClick }) => {
    return (
      <div
        className="bg-white bg-opacity-70 absolute cursor-pointer z-10 right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#000000", fontSize: "1.5rem" }}
        />
      </div>
    );
  };

  const PrevArrowTwo = ({ onClick }) => {
    return (
      <div
        className="bg-white bg-opacity-70 absolute cursor-pointer z-10 left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#000000", fontSize: "1.5rem" }}
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
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center text-black relative "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="my-12">
        <h2 className="text-6xl  mb-4 text-addington">Our Presence</h2>
      </div>

      <div className="flex flex-row justify-around w-full max-w-6xl">
        <div
          className="w-[35%] h-[250px] shadow-xl rounded-xl text-center bg-white border-2 border-gold transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${GurgaonImage})` }}
        >
          <div className="bg-black bg-opacity-10 w-full h-full flex items-end justify-center rounded-xl">
            <h3 className="text-white text-2xl  mb-4">Gurugram</h3>
          </div>
        </div>
        <div
          className="w-[35%] shadow-xl rounded-xl text-center bg-white border-2 border-gold transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${DubaiImage})` }}
        >
          <div className="bg-black bg-opacity-10 w-full h-full flex items-end justify-center rounded-xl">
            <h3 className="text-white text-2xl  mb-4">Dubai</h3>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-6xl mb-4 text-addington">
          Coming soon...
        </h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Slider {...settingsTwo} className="flex">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className={
                idx === itemIndex
                  ? "opacity-100 rounded-xl transition-opacity duration-300 ease-in-out  "
                  : "opacity-100 rounded-xl"
              }
            >
              <div
                className="w-full shadow-xl  sm:w-[90%] md:w-[85%] mx-auto lg:w-[80%] xl:w-[75%] h-[180px] rounded-xl text-center bg-white border-2 border-gold transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black bg-opacity-10 w-full h-full flex items-end justify-center rounded-xl">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageOurPresence;
