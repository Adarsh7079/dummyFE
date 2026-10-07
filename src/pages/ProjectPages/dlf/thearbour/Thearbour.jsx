
import React from "react";
import ProjectDetailsTemplate from "../../ProjectDetailsTemplate";

import img1 from "../../../../assets/images/Gallery1.jpg";
import img2 from "../../../../assets/images/Gallery2.jpg";

const arbourData = {
  galleryImages: [
    {
      src: img1,
      alt: "DLF The Arbour Main View",
    },
    {
      src: img2,
      alt: "DLF The Arbour Exterior View",
    },
  ],

  banner: {
    title: "DLF The Arbour",
    price: "Resale / Market-Driven",
    area: "Approx. 3,950 – 3,956 SQ. FT.",
    type: "4 BR + Utility",
    status: "UNDER CONSTRUCTION",
  },

  overview: {
    text1:
      "DLF The Arbour is a premium large-format residential development spread across approximately 25.087 acres in Sector 63, Gurugram. Developed by DLF Home Developers Limited, the project is designed around spacious luxury residences, landscaped open areas, and a premium lifestyle environment. The project comprises five residential towers, along with commercial and EWS components.",

    text2:
      "The project offers 4 BR + Utility residences, with DLF's compliance disclosure showing 1,137 main residential units. The residences are positioned as expansive homes catering to buyers seeking larger living spaces in one of Gurugram's established luxury residential corridors. The project is sold out directly by DLF, making resale and market-driven pricing applicable.",
  },

  developer: {
    name: "DLF Home Developers Limited",
    desc:
      "DLF Home Developers Limited is part of DLF Limited, one of India's leading real estate developers. DLF has developed several landmark residential and commercial projects across Gurugram and other major cities.",
  },
};

const TheArbour = () => {
  const handleEnquiry = (actionType) => {
    console.log(`Action triggered for DLF The Arbour: ${actionType}`);
  };

  return (
    <ProjectDetailsTemplate
      project={arbourData}
      onEnquire={handleEnquiry}
    />
  );
};

export default TheArbour;
