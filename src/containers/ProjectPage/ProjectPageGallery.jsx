import { useState, useEffect } from "react";
import image1 from "../../pages/ProjectPages/M3M/images/1.webp";
import image2 from "../../pages/ProjectPages/M3M/images/2.webp";
import image3 from "../../pages/ProjectPages/M3M/images/3.webp";
import image4 from "../../pages/ProjectPages/M3M/images/4.webp";
import image5 from "../../pages/ProjectPages/M3M/images/5.webp";
import image6 from "../../pages/ProjectPages/M3M/images/6.webp";

const images = [image1, image2, image3, image4, image5, image6, image1, image2];

const ProjectPageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  // Effect to add click listener to close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="bg-grey text-white p-6 border-2 shadow-md rounded-lg">
      <div className="w-full p-4">
        <h3 className="text-4xl font-bold mb-4">Gallery</h3>
        <hr className="gradient-hr mb-3 w-20" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="w-full md:h-[210px] h-[140px]">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover border-2 border-gold rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-black bg-gray-200 rounded-full px-2 py-1"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPageGallery;
