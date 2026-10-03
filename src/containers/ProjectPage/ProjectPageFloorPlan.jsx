import React, { useState } from "react";
import F1 from "../../pages/ProjectPages/M3M/images/FloorPanel1.webp";
import F2 from "../../pages/ProjectPages/M3M/images/FloorPanel2.webp";
import F3 from "../../pages/ProjectPages/M3M/images/FloorPanel3.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sitePlanimage from "../../pages/ProjectPages/M3M/images/sitePlan.webp";
import masterPlanimage from "../../pages/ProjectPages/M3M/images/masterPlan.webp";
import Modal from "./Modal";

const FloorPlan = () => {
  const [selectedType, setSelectedType] = useState("floorPlan");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const floorPlanImages = {
    floorPlan: [F1, F2, F3],
    sitePlan: [masterPlanimage],
    masterPlan: [masterPlanimage],
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? floorPlanImages[selectedType].length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === floorPlanImages[selectedType].length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="floorPlan p-4 md:p-6 border bg-grey text-white shadow-md rounded-lg">
        <h3 className="text-4xl font-bold mb-4">Floor Plan</h3>
        <hr className="gradient-hr mb-3 w-16 md:w-20" />

        <div className="w-full md:w-[37%] flex justify-around items-center bg-white text-black rounded p-1">
          <div
            className={`p-2 text-center cursor-pointer ${
              selectedType === "floorPlan"
                ? "bg-black text-white font-bold"
                : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedType("floorPlan");
              setCurrentImageIndex(0);
            }}
          >
            Floor Plan
          </div>
          <div
            className={`p-2 text-center cursor-pointer ${
              selectedType === "sitePlan"
                ? "bg-black text-white font-bold"
                : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedType("sitePlan");
              setCurrentImageIndex(0);
            }}
          >
            Site Plan
          </div>
          <div
            className={`p-2 text-center cursor-pointer ${
              selectedType === "masterPlan"
                ? "bg-black text-white font-bold"
                : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedType("masterPlan");
              setCurrentImageIndex(0);
            }}
          >
            Master Plan
          </div>
        </div>

        <div className="relative w-full md:w-[70%] flex justify-center items-center mt-6 mb-10 md:mb-20">
          <img
            src={floorPlanImages[selectedType][currentImageIndex]}
            alt="Plan"
            className="w-full h-auto rounded-lg shadow-md"
          />

          {selectedType === "floorPlan" && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none ml-2"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none mr-2"
              >
                <FaArrowRight />
              </button>
            </>
          )}
        </div>

        <Modal isVisible={isModalVisible} onClose={toggleModal} />
      </div>
    </>
  );
};

export default FloorPlan;
