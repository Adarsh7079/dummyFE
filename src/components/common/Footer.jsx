import React from "react";
import { GiSquare } from "react-icons/gi";
import faceBookLogo from "../../assets/images/Facebook.png";
import linkedINLogo from "../../assets/images/Linkedin.png";
import instagramLogo from "../../assets/images/Instagram.png";
import xLogo from "../../assets/images/X.png";
import YoutubeLogo from "../../assets/images/Youtube.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full text-white flex flex-col px-4 md:px-10 bg-black py-8">
        <div className="flex flex-col md:flex-row border bg-grey rounded-lg border-gold p-4 mb-4">
          <div className="w-full md:w-1/3 ml-0 md:ml-8 mb-4 md:mb-0">
            <div className="mb-2">
              <p className="text-center text-xl font-semibold text-gold md:text-left">Cedarstone Realty</p>
            </div>
            <div>
              <p className="text-center md:text-left">
                Cedarstone Realty is a real estate company dedicated to
                providing exceptional service and expertise in the dynamic world
                of real estate.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:ml-20 mb-4 md:mb-0">
            <ul className="space-y-2">
              {["Property in Gurgaon", "Apartment in Gurgaon", "Commercial Projects", "Ready to Move in Projects", "Under Construction Projects"].map((item, index) => (
                <div className="flex items-center mt-6" key={index}>
                  <GiSquare className="text-sm text-white bg-gold" />
                  <li className="text-xl ml-4">{item}</li>
                </div>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 md:ml-20">
            <ul className="space-y-2">
              {["DLF Projects", "M3M Projects", "Conscient Projects", "Whiteland Projects", "Smartworld Projects"].map((item, index) => (
                <div className="flex items-center mt-6" key={index}>
                  <GiSquare className="text-sm text-white bg-gold" />
                  <li className="text-xl ml-4">{item}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-8 mt-6">
          <div className="w-full md:w-1/4 ml-0 md:ml-8 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-2xl text-gold" />
              <h4 className="font-bold text-xl ml-1">Sample Office 1</h4>
            </div>
            <p className="text-center md:text-left">
              123 Example Street
              <br />
              Sample City, ZZ 00000
            </p>
          </div>
          <div className="w-full md:w-1/4 ml-0 md:ml-8 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <FaLocationDot className="text-2xl text-gold" />
              <h4 className="font-bold text-xl ml-1">Sample Office 2</h4>
            </div>
            <p className="text-center md:text-left">
              456 Demo Road
              <br /> Example City, ZZ 00000
            </p>
          </div>

          <div className="w-full md:w-1/4 ml-0 md:ml-8 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <IoCall className="text-2xl text-gold" />
              <h4 className="font-bold text-xl ml-1">Sales & Support</h4>
            </div>
            <p className="text-center md:text-left">
              +1 (202) 555-0147
              <br />
              hello@example.com
            </p>
          </div>

          <div className="w-full md:w-1/4 -ml-0 md:-ml-4">
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://example.com/cedarstone-realty/facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={faceBookLogo} alt="Facebook" className="w-10 h-10" />
              </a>
              <a
                href="https://example.com/cedarstone-realty/linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedINLogo} alt="LinkedIN" className="w-10 h-10" />
              </a>
              <a
                href="https://example.com/cedarstone-realty/instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://example.com/cedarstone-realty/social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={xLogo} alt="X" className="w-10 h-10" />
              </a>
              <a
                href="https://example.com/cedarstone-realty/video"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeLogo} alt="Youtube" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t border-gold pt-4">
          <div className="w-full md:w-1/2 ml-0 md:ml-8 mb-4 md:mb-0">
            <p className="text-lg text-center md:text-left">
              Sample registration: DEMO-0000
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <p className="ml-0 md:ml-6 text-lg text-center md:text-left">
              &copy; Copyright 2026 Cedarstone Realty
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
