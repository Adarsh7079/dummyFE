import React from "react";
import amenityIcon1 from "../../assets/images/ProjectPageImages/AmenitiesIcons/amphitheater.png";
import amenityIcon2 from "../../assets/images/ProjectPageImages/AmenitiesIcons/cricketpitch.png";
import amenityIcon3 from "../../assets/images/ProjectPageImages/AmenitiesIcons/tenniscourt.png";
import amenityIcon4 from "../../assets/images/ProjectPageImages/AmenitiesIcons/spa.png";
import amenityIcon5 from "../../assets/images/ProjectPageImages/AmenitiesIcons/gazebo.png";
import amenityIcon6 from "../../assets/images/ProjectPageImages/AmenitiesIcons/skatingring.png";
import amenityIcon7 from "../../assets/images/ProjectPageImages/AmenitiesIcons/swimming.png";
import amenityIcon8 from "../../assets/images/ProjectPageImages/AmenitiesIcons/landscaping.png";
import amenityIcon9 from "../../assets/images/ProjectPageImages/AmenitiesIcons/tabletennis.png";
import amenityIcon10 from "../../assets/images/ProjectPageImages/AmenitiesIcons/minitheatre.png";
import amenityIcon11 from "../../assets/images/ProjectPageImages/AmenitiesIcons/fire.png";
import amenityIcon12 from "../../assets/images/ProjectPageImages/AmenitiesIcons/clubhouse.png";

// Add more amenity icons as needed

const amenities = [
  { icon: amenityIcon1, description: "Amphitheater" },
  { icon: amenityIcon2, description: "Cricket Pitch" },
  { icon: amenityIcon3, description: "Tennis Court" },
  { icon: amenityIcon4, description: "Spa" },
  { icon: amenityIcon5, description: "Gazebo" },
  { icon: amenityIcon6, description: "Skating Ring" },
  { icon: amenityIcon7, description: "Swimming Pool" },
  { icon: amenityIcon8, description: "Landscaping" },
  { icon: amenityIcon9, description: "Table Tennis" },
  { icon: amenityIcon10, description: "Mini Theatre" },
  { icon: amenityIcon11, description: "Fire System" },
  { icon: amenityIcon12, description: "Club House" },
];

const ProjectPageAmenities = () => {
  return (
    <div className="bg-grey text-white border p-6 shadow-md rounded-lg">
      <div className="w-full p-4">
        <h3 className="text-4xl font-bold mb-4">Amenities</h3>
        <hr className="gradient-hr mb-3 w-20" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <img
              src={amenity.icon}
              alt={amenity.description}
              className="w-[40%] h-[50%] rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPageAmenities;
