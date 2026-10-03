import React, { useState } from "react";
import Image1 from "../../pages/BuilderPages/Images/m3m1.jpg";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const DeveloperPageListings = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const Residentialitems = [
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
  ];

  const Commercialitems = [
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
  ];

  const NewLaunchitems = [
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Alltitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      title: "M3M Mansion",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "DLF The Arbour",
      image: Image1,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      title: "Whiteland Urban Resort",
      image: Image1,
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
    nextArrow: <NextArrowTwo />,
    prevArrow: <PrevArrowTwo />,
    beforeChange: (current, next) => setItemIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full my-10 text-white">
      <div className="text-center">
        <h2 className="text-5xl text-aesthete text-gold">New Launch</h2>
        <br />
        {/* <h2 className="text-4xl text-gold  text-addington"> Projects</h2> */}
      </div>

      <div className="container mx-auto px-4  rounded-xl">
        <Slider {...settingsTwo}>
          {NewLaunchitems.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[580px] border border-gold rounded-xl text-center bg-white transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[65%] rounded-t-xl object-cover"
              />
              <div className="px-4">
                <div className="mt-5">
                  <h3 className="text-3xl text-black text-left font-medium leading-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    <MdLocationOn className="text-2xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.address}</h6>
                  </div>
                  <div className="flex items-center mt-2">
                    <BsCurrencyRupee className="text-xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.price}</h6>
                  </div>
                  <div className="mt-2  flex justify-start">
                    <button className="w-[40%] text-xl bg-black text-white py-1 px-2 rounded-lg hover:bg-white hover:text-black hover:border-black hover:border transition duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <hr className="border-gold -mt-10" />

      <div className="text-center mt-10">
        <h2 className="text-5xl text-aesthete text-gold">Residentail</h2>
        <br />
        <h2 className="text-4xl text-gold  text-addington"> Projects</h2>
      </div>

      <div className="container mx-auto px-4  rounded-xl">
        <Slider {...settingsTwo}>
          {Residentialitems.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[580px] border border-gold rounded-xl text-center bg-white transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[65%] rounded-t-xl object-cover"
              />
              <div className="px-4">
                <div className="mt-5">
                  <h3 className="text-3xl text-black text-left font-medium leading-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    <MdLocationOn className="text-2xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.address}</h6>
                  </div>
                  <div className="flex items-center mt-2">
                    <BsCurrencyRupee className="text-xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.price}</h6>
                  </div>
                  <div className="mt-2  flex justify-start">
                    <button className="w-[40%] text-xl bg-black text-white py-1 px-2 rounded-lg hover:bg-white hover:text-black hover:border-black hover:border transition duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <hr className="border-gold -mt-10" />

      <div className="text-center  mt-10 ">
        <h2 className="text-5xl text-aesthete text-gold">Commercial</h2>
        <br />
        <h2 className="text-4xl text-gold  text-addington"> Projects</h2>
      </div>

      <div className="container mx-auto px-4  rounded-xl">
        <Slider {...settingsTwo}>
          {Commercialitems.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[580px] border border-gold rounded-xl text-center bg-white transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[65%] rounded-t-xl object-cover"
              />
              <div className="px-4">
                <div className="mt-5">
                  <h3 className="text-3xl text-black text-left font-medium leading-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    <MdLocationOn className="text-2xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.address}</h6>
                  </div>
                  <div className="flex items-center mt-2">
                    <BsCurrencyRupee className="text-xl text-black" />
                    <h6 className="text-2xl text-black ml-1">{item.price}</h6>
                  </div>
                  <div className="mt-2  flex justify-start">
                    <button className="w-[40%] text-xl bg-black text-white py-1 px-2 rounded-lg hover:bg-white hover:text-black hover:border-black hover:border transition duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeveloperPageListings;
