import  { useEffect, useState } from "react";
import desktopBanner from "../../assets/images/HomePageImages/homebanner.webp";
import mobileBanner from "../../assets/images/HomePageImages/mobile-banner.jpg";

const HomePageBanner = () => {
  const [backgroundImage, setBackgroundImage] = useState(desktopBanner);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setBackgroundImage(mobileBanner);
    } else {
      setBackgroundImage(desktopBanner);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial background image
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start text-left text-white p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md ml-[15.5%]">
        <h2 className="text-3xl mb-2 text-gold text-aesthete">Your Property</h2>
        <h3 className="text-4xl font-bold mb-4 text-gold text-addington">Search Ends here...</h3>
        <div className="w-full">
          <input
            type="text"
            placeholder="Search for projects..."
            className="w-full p-3 border rounded-3xl text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
