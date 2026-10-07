
import React from "react";
import ProjectDetailsTemplate from "../../ProjectDetailsTemplate";

import img1 from "../../../../assets/images/Gallery1.jpg";
import img2 from "../../../../assets/images/Gallery2.jpg";

const altitudeData = {
  galleryImages: [
    {
      src: img1,
      alt: "M3M Altitude Main View",
    },
    {
      src: img2,
      alt: "M3M Altitude Exterior View",
    },
  ],

  banner: {
    title: "M3M Altitude",
    price: "₹8 Cr",
    area: "3,712 – 4,270 SQ. FT.",
    type: "4 BHK + Lounge + Study",
    status: "UNDER CONSTRUCTION",
  },

  overview: {
    text1:
      "M3M Altitude is an ultra-luxury residential development located on Golf Course Extension Road, Sector 65, Gurugram. Designed by the award-winning architectural firm UHA London, the project is positioned within the prestigious M3M Golfestate ecosystem. Its distinctive sky-oriented architecture features a dramatic 60-foot waterfall cascading from the crown and a signature glass Air Bridge creating an elevated Air Lounge experience.",

    text2:
      "M3M Altitude is envisioned as a landmark address for luxury living in Gurugram, combining expansive residences, contemporary architecture, panoramic views, and an extensive collection of wellness, leisure, and lifestyle facilities. The development comprises three high-rise towers and offers spacious 4 BHK + Lounge + Study residences, with publicly listed unit sizes ranging from approximately 3,712 sq. ft. to 4,270 sq. ft. The residences feature two master bedrooms, generous living spaces, and wrap-around decks designed to provide expansive views of the surrounding cityscape and Golfestate.",
  },

  developer: {
    name: "M3M India",
    desc:
      "M3M India is a prominent real estate developer known for developing premium residential and commercial projects across Gurugram. M3M Altitude is positioned as a luxury residential development within the M3M Golfestate ecosystem.",
  },
};

const Altitude = () => {
  const handleEnquiry = (actionType) => {
    console.log(`Action triggered for M3M Altitude: ${actionType}`);
  };

  return (
    <ProjectDetailsTemplate
      project={altitudeData}
      onEnquire={handleEnquiry}
    />
  );
};

export default Altitude;