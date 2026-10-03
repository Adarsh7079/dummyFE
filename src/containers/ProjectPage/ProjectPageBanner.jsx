import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel relative flex justify-center items-center border-2 border-gold rounded-lg overflow-hidden">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="arrow absolute left-4 text-white w-6 h-6 md:w-8 md:h-8 filter drop-shadow-md cursor-pointer"
      />

      {images.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`slide rounded-md shadow-md w-full h-auto ${
            slide === idx ? "block" : "hidden"
          }`}
        />
      ))}

      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow absolute right-4 text-white w-6 h-6 md:w-8 md:h-8 filter drop-shadow-md cursor-pointer"
      />

      <div className="indicators absolute bottom-4 flex justify-center w-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`indicator w-2 h-2 bg-white rounded-full border-none outline-none shadow-md mx-1 cursor-pointer ${
              slide === idx ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Banner = ({ images }) => {
  return (
    <div className="h-auto overview text-center font-sans">
      <Carousel images={images} />
    </div>
  );
};

export default Banner;
