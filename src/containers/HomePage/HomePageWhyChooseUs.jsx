import { useState } from "react";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/images/HomePageImages/WhyChooseUs/Financial Assistance.webp";
import icon2 from "../../assets/images/HomePageImages/WhyChooseUs/Continual Support .webp";
import icon3 from "../../assets/images/HomePageImages/WhyChooseUs/Transparent Transaction.webp";
import icon4 from "../../assets/images/HomePageImages/WhyChooseUs/Expert Guidance.webp";
import icon5 from "../../assets/images/HomePageImages/WhyChooseUs/Customised Solutions.webp";
import icon6 from "../../assets/images/HomePageImages/WhyChooseUs/Effortless Consultancy.webp";

import newsImage1 from "../../assets/images/HomePageImages/NewsAndUpdates/1.webp";
import newsImage2 from "../../assets/images/HomePageImages/NewsAndUpdates/2.webp";
import newsImage3 from "../../assets/images/HomePageImages/NewsAndUpdates/3.webp";

import TestimonialIcon from "../../assets/images/HomePageImages/Icons/Testimonial Icon.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HomePageWhyChooseUs = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const chooseUSItems = [
    {
      title: "Financial Assistance",
      icon: icon1,
      description:
        "We offer loan advisory services, facilitate home loans, evaluate mortgage options, and provide legal assistance for both long and short-term taxations.",
    },
    {
      title: "Continual Support Assistance",
      icon: icon2,
      description:
        "We are committed to delivering top-notch services to our customers, ensuring that our support extends beyond the completion of their purchase to encompass after-sale services.",
    },
    {
      title: "Transparent Transactions",
      icon: icon3,
      description:
        "Our process is transparent and straightforward, providing clear and concise information to our clients to build trust and ensure a smooth transaction.",
    },
    {
      title: "Expert Guidance",
      icon: icon4,
      description:
        "Our team of experts offers valuable guidance and insights at every step, helping clients make informed decisions and navigate the complexities of property investments.",
    },
    {
      title: "Customized Solutions",
      icon: icon5,
      description:
        "We provide tailored solutions to meet the unique needs of each client, ensuring personalized service and a satisfactory experience.",
    },
    {
      title: "Effortless Consultancy",
      icon: icon6,
      description:
        "We assist buyers throughout the entire process of purchasing a home by comprehending their needs and providing them with optimal investment prospects.",
    },
  ];

  const NextArrow = ({ onClick }) => {
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

  const PrevArrow = ({ onClick }) => {
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

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const newsItems = [
    {
      title: "Ganga Realty invests Rs 1,200 crore",
      image: newsImage1,
      description:
        "Ganga Realty is set to fund its ambitious project through a combination of internal accruals and customer advances."
    },
    {
      title: "Birla Estates acquire land in sector 71",
      image: newsImage2,
      description:
        "Birla Estates, a fully-owned subsidiary of Century Textiles and Industries, has recently acquired a five-acre land.",
    },
    {
      title: "Alphacorp to invest Rs 350 crore",
      image: newsImage3,
      description:
        "Investment of Rs 350 crore for a luxurious project, signaling a expansion in response to consumer's demand.",
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
    <div className="bg-white h-auto flex flex-col justify-center items-center text-center text-black border-t-4 border-gold ">
      <div className="bg-white h-auto w-full">
        <div className="WhyChooseUsHeading h-auto mt-5">
          <h2 className="text-4xl mb-4 text-black text-aesthete">Why</h2>
          <h3 className="text-6xl font-bold mb-4 text-black text-addington">
            Choose Us
          </h3>
        </div>

        <div className="container mx-auto px-4 py-8 rounded-xl">
          <Slider {...settings}>
            {chooseUSItems.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx === itemIndex
                    ? "border-2 border-darkgold transform scale-110 opacity-100 rounded-xl shadow-xl transition-transform duration-300"
                    : "bg-grey text-white opacity-75 rounded-xl shadow-xl transition-opacity duration-300"
                }
              >
                <div className="w-full p-6 flex flex-col mx-auto rounded-xl text-center">
                  <div className="flex flex-row text-center">
                    <img src={item.icon} alt={item.title} className="w-12" />
                    <h3 className="ml-6 text-left text-xl font-semibold place-self-center">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="mt-2 text-justify">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="Testimonials text-center my-10">
          <h2 className="text-6xl font-bold text-addington">Testimonials</h2>
        </div>

        <div className="TestimonialsTiles h-auto my-10 flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8 relative z-20">
          <div className="w-full md:w-[29%] flex flex-col items-center text-center md:text-left bg-white border-2 border-gold p-6 rounded-3xl shadow-xl">
            <div className="mb-4">
              <img src={TestimonialIcon} alt="" />
            </div>
            <div className="flex-grow">
              <h3 className="text-addington text-2xl text-center tracking-5 mb-6 mt-2">
                Casey Taylor
              </h3>
              <p className="2xl:text-2xl xl:text-xl text-gray-700 text-justify overflow-hidden">
                The team at Cedarstone Realty helped me find the perfect home in
                no time. Their professionalism and dedication made the entire
                process smooth and stress-free. Highly recommend their services.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[29%] flex flex-col items-center text-center md:text-left bg-white border-2 border-gold p-6 rounded-3xl shadow-xl">
            <div className="mb-4">
              <img src={TestimonialIcon} alt="" />
            </div>
            <div className="flex-grow">
              <h3 className="text-addington text-2xl text-center tracking-5 mb-6 mt-2">
                Jamie Parker
              </h3>
              <p className="2xl:text-2xl xl:text-xl text-gray-700 text-justify overflow-hidden">
                I was impressed by the depth of knowledge and the personalized
                approach of the consultants at Cedarstone Realty. They guided me
                through every step to got the best deal possible.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[29%] flex flex-col items-center text-center md:text-left bg-white border-2 border-gold p-6 rounded-3xl shadow-xl">
            <div className="mb-4">
              <img src={TestimonialIcon} alt="" />
            </div>
            <div className="flex-grow">
              <h3 className="text-addington text-2xl text-center tracking-5 mb-6 mt-2">
                Riley Jordan
              </h3>
              <p className="2xl:text-2xl xl:text-xl text-gray-700 text-justify overflow-hidden">
                Cedarstone Realty's market analysis was spot on. Their insights
                helped me make informed investment decisions and maximize my
                returns. Their expertise is unparalleled in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-auto w-full">
        <div className="text-center mt-28 mb-10">
          <h2 className="NewsAndUpdates text-6xl font-bold text-gold text-addington">
            News & Updates
          </h2>
        </div>

        <div className="container mx-auto px-4 py-8 rounded-xl">
          <Slider {...settingsTwo}>
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx === itemIndex
                    ? "opacity-100 w-full rounded-23xl transition-opacity duration-300 ease-in-out"
                    : "opacity-100 rounded-3xl transition-opacity duration-300 ease-in-out"
                }
              >
                <div className="w-full h-[650px] rounded-3xl text-center bg-white transition-colors duration-300 ease-in-out shadow-lg flex flex-col justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[70%] rounded-t-3xl object-cover border-2 border-gold"
                  />
                  <div className="px-6 py-4 flex-grow flex flex-col justify-around">
                    <h3 className="mt-2 text-xl text-black text-left font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-xl text-grey text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageWhyChooseUs;
