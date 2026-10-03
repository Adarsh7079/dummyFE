import image1 from "../../assets/images/HomePageImages/OurServices/1.webp";
import image2 from "../../assets/images/HomePageImages/OurServices/2.webp";
import image3 from "../../assets/images/HomePageImages/OurServices/3.webp";
import image4 from "../../assets/images/HomePageImages/OurServices/4.webp";
import icon1 from "../../assets/images/HomePageImages/OurServices/5.webp";
import icon2 from "../../assets/images/HomePageImages/OurServices/6.webp";
import icon3 from "../../assets/images/HomePageImages/OurServices/7.webp";
import icon4 from "../../assets/images/HomePageImages/OurServices/8.webp";

const services = [
  {
    id: 1,
    image: image1,
    icon: icon1,
    logo: "logo",
    title: "Real Estate ",
    description:
      "Our team of expert consultants provides personalized advice to help you navigate the complexities of the real estate market, ensuring you make informed decisions.",
    knowMore: "Know more",
  },
  {
    id: 2,
    image: image2,
    icon: icon2,
    logo: "logo",
    title: "Property Management",
    description:
      "We offer comprehensive property management services, including tenant screening, rent collection, maintenance, and more, to help you maximize your investment.",
    knowMore: "Know more",
  },
  {
    id: 3,
    image: image3,
    icon: icon3,
    logo: "logo",
    title: "Home Staging",
    description:
      "Our professional home staging services help you present your property in the best light, attracting potential buyers and ensuring a quick and profitable sale.",
    knowMore: "Know more",
  },
  {
    id: 4,
    image: image4,
    icon: icon4,
    logo: "logo",
    title: "Market Analysis",
    description:
      "We Stay ahead of the competition with our detailed market analysis reports, offering insights into current trends, pricing, and investment opportunities in the real estate sector.",
    knowMore: "Know more",
  },
];


const ServiceCard = ({ image, icon, title, description, knowMore }) => (
  <div className="w-[80%] flex flex-col  items-end rounded-lg  bg-black text-white shadow-md -ml-[5%] md:ml-[0%] justify-end" >
    <div className=" flex flex-row">
      <div className="w-[50%] md:w-[30%] ">
        <img src={image} alt={title} className="w-[100%] md:h-[24vh]" />
      </div>
      <div className="w-[10%] md:w-[70%] flex flex-col md:ml-4 ml-9">
        <div className="w-[300%] md:w-[20%] ">
          <img src={icon} alt={title} className="w-full md:h-[8vh]" />
        </div>
        <div className="text-sm md:text-lg font-semibold text-justify">{title}</div>
        <p className="hidden md:block md:text-sm text-white text-justify">{description}</p>
      </div>
    </div>
    <div className="w-[55%] -mr-[25%] h md:w-[25%] py-1 rounded mt-4 text-sm md:text-xl text-black bg-white cursor-pointer">
      {knowMore}
    </div>
  </div>
);

const HomePageOurServices = () => {
  return (
    <div className="bg-cover bg-center md:h-[100vh] h-[60vh]  flex flex-col  place-content-around text-center text-white relative border-t-4 border-gold ">
     <div className="md:mt-10 md:-mb-10">
        <h2 className="text-4xl mb-4 text-gold text-aesthete">Our</h2>
        <h3 className="text-6xl font-bold mb-4 text-gold text-addington">
          Services
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-4 md:ml-28">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default HomePageOurServices;
