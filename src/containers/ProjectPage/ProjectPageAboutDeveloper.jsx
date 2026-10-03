import React from "react";
import logo from "../../pages/ProjectPages/M3M/images/M3MLogo.png";

const ProjectPageAboutDeveloper = () => {
  return (
    <div className="mx-[3%] my-[5%] bg-grey border border-gold text-white p-4 shadow-md rounded-lg">
    <div className="w-full p-4">
      <h3 className="text-3xl md:text-5xl font-bold mb-4">About Developer</h3>
      <hr className="gradient-hr mb-3 w-20" />
    </div>
    <div className="flex flex-col space-y-6">
      <div className="SecondDiv flex flex-row md:flex-row justify-around gap-10 md:gap-20 items-center text-center">
        <div className="w-full md:w-[30%]">
          <img
            src={logo}
            alt="developerlogo"
            className="w-[80%] md:w-[40%] h-auto md:-ml-9 mx-auto md:mx-0"
          />
        </div>
        <div className="border border-gold rounded-lg bg-black p-2  md:mt-0 md:ml-10">
          <div>
            <h2 className="text-4xl text-gold font-bold">2010</h2>
            <h4 className="text-xs md:text-lg">Established In</h4>
          </div>
        </div>
      </div>

      <div className="text-sm md:text-xl text-justify leading-relaxed">
        <p>
          M3M India, established in 2010, is one of the fastest-growing real
          estate developers in the country. It is driven by Founder Chairman
          Basant Bansal and supported by promoters Roop Bansal and Pankaj
          Bansal. The growth story is built upon a foundation of ethical
          corporate governance, transparency, commitment, and passion. The
          Chairman and promoters have designed a progressive vision for M3M
          India, aiming to establish the company as one of the most
          sought-after players in the real estate sector. Over time, M3M India
          has emerged as a game-changer in the luxury, residential, and retail
          segments of the real estate industry in the country.
        </p>
      </div>
    </div>
  </div>
  );
};

export default ProjectPageAboutDeveloper;
