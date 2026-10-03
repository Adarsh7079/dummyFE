const image = "/team-member-placeholder.svg";

const HomePageDirectorsDesk = () => {
  return (
    <div className="Mainsection h-auto lg:h-[70vh] bg-white text-white py-12 px-8 lg:px-28 border-t-4 border-gold flex flex-col justify-center items-center">
      <div className="Insidesection bg-black flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 p-6 lg:p-8 rounded-3xl border-4 border-gold shadow-2xl">
        <div className="w-full md:w-3/4 flex flex-col space-y-6 md:pr-24">
          <div className="text-2xl text-addington text-gold text-center md:text-left">
            Message From Director's Desk..!
          </div>
          <div className="hidden md:block text-4xl md:text-6xl font-semibold text-addington text-gold text-center md:text-left">
            Go Forward With Us
          </div>
          <div className="text-base md:text-xl text-justify text-gray-300">
            Our founder helps clients make informed property decisions through
            clear guidance, local market knowledge, and a focus on practical
            solutions.
          </div>
          <div className="text-2xl md:text-4xl font-medium text-addington text-gold text-center md:text-left">
            Alex Morgan
          </div>
        </div>
        <div className="w-full md:w-[35%] flex justify-center md:justify-end">
          <img
            src={image}
            alt="Director's Image"
            className="w-[80%] md:w-[120%] -mt-8 md:-mt-[23%] max-w-xs md:max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageDirectorsDesk;
