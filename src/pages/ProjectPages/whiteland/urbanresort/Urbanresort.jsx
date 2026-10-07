
import React from "react";
import ProjectDetailsTemplate from "../../ProjectDetailsTemplate";

import img1 from "../../../../assets/images/Gallery1.jpg";
import img2 from "../../../../assets/images/Gallery2.jpg";

const urbanResortData = {
  galleryImages: [
    {
      src: img1,
      alt: "Whiteland Urban Resort Main View",
    },
    {
      src: img2,
      alt: "Whiteland Urban Resort Exterior View",
    },
  ],

  banner: {
    title: "Whiteland Urban Resort",
    price: "₹6.40 Cr* Onwards",
    area: "Approx. 2,673 – 4,328 SQ. FT.",
    type: "3 & 4 BHK Luxury Residences",
    status: "UNDER CONSTRUCTION",
  },

  overview: {
    text1:
      "Whiteland Urban Resort is a luxury residential development by Whiteland Corporation in Sector 103, Gurugram, along the Dwarka Expressway. The project is officially registered under the name Urban Resort and is also marketed as Westin Residences Gurugram, bringing a hospitality-inspired, resort-style residential concept to the Delhi-Gurugram corridor.",

    text2:
      "The development is planned as a large-scale mixed-use community with multiple phases. The registered project comprises residential and commercial components, with HARERA records showing separate registrations for different phases. Phase 4, for example, covers approximately 4.736 acres and includes four residential towers with 352 units, while other phases form part of the wider Urban Resort development.",
  },

  developer: {
    name: "Whiteland Corporation",
    desc:
      "Whiteland Corporation is a real estate developer focused on premium residential and mixed-use developments in Gurugram. Its Urban Resort development brings a hospitality-inspired residential experience to the Dwarka Expressway corridor.",
  },
};

const UrbanResort = () => {
  const handleEnquiry = (actionType) => {
    console.log(
      `Action triggered for Whiteland Urban Resort: ${actionType}`
    );
  };

  return (
    <ProjectDetailsTemplate
      project={urbanResortData}
      onEnquire={handleEnquiry}
    />
  );
};

export default UrbanResort;
