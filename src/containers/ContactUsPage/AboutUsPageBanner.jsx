import banner from "../../assets/images/AboutPage/banner.png";

const AboutUsPageBanner = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-white text-addington flex flex-col w-full px-4 sm:px-8">
        <h2 className="text-left text-3xl sm:text-5xl leading-[160%] sm:leading-[160%]">

          Find your Dream space,<br /> our
          
          <span className="italic text-gold text-aesthete">
            {" "}
            Station
          </span>{" "}
          is the ace.
          
        </h2>
      </div>
    </div>
  );
};

export default AboutUsPageBanner;
