import React from "react";
import CardDeveloper from "../components/common/CardDeveloper";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

// Image Imports (replace with your actual relative image paths)
import Image1 from "../assets/images/HomePageImages/TrendingProjects/M3M Altitude.webp";
import Image2 from "../assets/images/HomePageImages/TrendingProjects/M3M Mansion.webp";
import Image3 from "../assets/images/HomePageImages/TrendingProjects/M3M Mansion.webp";
import Image4 from "../assets/images/HomePageImages/TrendingProjects/Smartworld One DXP.webp";

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: "M3M Altitude",
      image: Image1,
      address: "Sector 65, Gurgaon",
      price: "On Request",
    },
    {
      id: 2,
      title: "M3M Mansion",
      image: Image2,
      address: "Sector 113, Gurgaon",
      price: "On Request",
    },
    {
      id: 3,
      title: "DLF The Arbour",
      image: Image3,
      address: "Sector 63, Gurgaon",
      price: "On Request",
    },
    {
      id: 4,
      title: "Whiteland Urban Resort",
      image: Image4,
      address: "Sector 103, Gurgaon",
      price: "On Request",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-white">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl text-amber-500 font-serif tracking-wide">
            Trending
          </h2>
          <h3 className="text-5xl sm:text-6xl font-bold text-amber-400 font-serif tracking-tight mt-1">
            Projects
          </h3>
        </div>

        {/* Real Estate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <CardDeveloper key={project.id} item={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;