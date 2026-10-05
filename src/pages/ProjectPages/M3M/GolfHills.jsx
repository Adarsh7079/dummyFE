import React from "react";
import ProjectDetailsTemplate from "../ProjectDetailsTemplate";
import img1 from "../../../assets/images/Gallery1.jpg";
import img2 from "../../../assets/images/Gallery2.jpg";

const golfHillsData = {
  galleryImages: [
    { src: img1, alt: "Golf Hills Main View" },
    { src: img2, alt: "Golf Hills Clubhouse" },
  ],
  banner: {
    title: "Smartworld Golf Hills",
    price: "4.56 CR ONWARDS",
    area: "1305 SQ. FT ONWARDS",
    type: "2, 3 & 4 BHK FLOOR",
    status: "UNDER CONSTRUCTION",
  },
  overview: {
    text1: "Smartworld Golf Hills offers ultra-luxury residences situated in Sector 79, Gurgaon...",
    text2: "Designed with modern architectural philosophy and surrounded by lush green golf course views...",
  },
  developer: {
    name: "Smartworld Developers",
    desc: "A leading modern real estate brand in India.",
  },
};

const GolfHills = () => {
  const handleEnquiry = (actionType) => {
    console.log(`Action triggered for Golf Hills: ${actionType}`);
  };

  return <ProjectDetailsTemplate project={golfHillsData} onEnquire={handleEnquiry} />;
};

export default GolfHills;