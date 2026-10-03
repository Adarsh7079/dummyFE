import dlflogo from "../../assets/images/HomePageImages/TopDevelopers/DLF.webp";
import m3mlogo from "../../assets/images/HomePageImages/TopDevelopers/M3M.webp";
import mahindralogo from "../../assets/images/HomePageImages/TopDevelopers/Mahindra Lifespaces.webp";
import smartworldlogo from "../../assets/images/HomePageImages/TopDevelopers/Smartworld.webp";
import { motion } from "framer-motion";

const HomePageTopDeveloper = () => {
  const upperMarquee = [
    dlflogo,
    m3mlogo,
    mahindralogo,
    smartworldlogo,
    dlflogo,
    m3mlogo,
    mahindralogo,
    smartworldlogo
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-200 text-black py-8 border-t-4 border-gold">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl mb-4 text-addington">
            Top Developers
          </h2>
        </div>
        <div className=" mx-auto flex flex-wrap justify-between">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {upperMarquee.map((image, index) => (
              <img
                className="h-16 sm:h-24 w-45 sm:w-62 pr-10 sm:pr-20"
                src={image}
                key={index}
                alt={`Developer ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="text-black py-2 px-6 border border-black rounded-full shadow-md hover:bg-black hover:text-white transition duration-300">
            <h3 className="text-xl font-bold">View More</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageTopDeveloper;
