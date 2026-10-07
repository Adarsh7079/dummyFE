
import React from "react";
import ProjectDetailsTemplate from "../../ProjectDetailsTemplate";

import img1 from "../../../../assets/images/Gallery1.jpg";
import img2 from "../../../../assets/images/Gallery2.jpg";

const mansionData = {
  galleryImages: [
    {
      src: img1,
      alt: "M3M Mansion Main View",
    },
    {
      src: img2,
      alt: "M3M Mansion Exterior View",
    },
  ],

  banner: {
    title: "M3M Mansion",
    price: "₹3.28 Cr* Onwards",
    area: "1,638 – 6,769 SQ. FT.",
    type: "2, 3, 3.5, 4, 4.5 & 5 BHK",
    status: "UNDER CONSTRUCTION",
  },

  overview: {
    text1:
      "M3M Mansion is an ultra-luxury residential development located in Sector 113, Gurugram, along Dwarka Expressway, within the larger Smart City Delhi Airport (SCDA) development. Designed around a premium golf-themed lifestyle, the project combines sophisticated architecture, spacious residences, landscaped surroundings, and an extensive range of leisure and wellness amenities.",

    text2:
      "The development offers premium 3.5 BHK, 4.5 BHK and 5 BHK luxury apartments and penthouses, with residences designed to provide generous living spaces, abundant natural light, and expansive views. Select homes feature extended or wrap-around decks, while the project also incorporates premium interior specifications and modern conveniences.",
  },

  developer: {
    name: "M3M India",
    desc:
      "M3M India is a prominent real estate developer known for developing premium residential and commercial projects across Gurugram. M3M Mansion is designed as an ultra-luxury residential development offering a sophisticated golf-themed lifestyle along Dwarka Expressway.",
  },
};

const Mansion = () => {
  const handleEnquiry = (actionType) => {
    console.log(`Action triggered for M3M Mansion: ${actionType}`);
  };

  return (
    <ProjectDetailsTemplate
      project={mansionData}
      onEnquire={handleEnquiry}
    />
  );
};

export default Mansion;
