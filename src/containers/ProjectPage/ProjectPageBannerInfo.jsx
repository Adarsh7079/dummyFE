import React from "react";

const BannerInfo = ({ text1, text2, text3, text4 }) => {
  const infoTiles = [
    { title: "PRICE", value: "4.56 CR", suffix: "ONWARDS" },
    { title: "SIZES", value: "1305 SQ. FT.", suffix: "ONWARDS" },
    { title: "CONFIGURATIONS", value: "2,3 & 4", suffix: "BHK FLOOR" },
    { title: "STATUS", value: "UNDER", suffix: "CONSTRUCTION" },
  ];

  return (
    <div className="bannerinfotiles grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-white">
      {infoTiles.map((tile, index) => (
        <div className="info-tile" key={index}>
          <div className="w-full p-4 sm:p-5 border border-gold rounded-md shadow-md text-center">
            <div className="text-sm ">
              <h2 className=" font-semibold">{tile.title}</h2>
              <hr className="gradient-hr  mb-1 sm:mb-2 mx-12 sm:mx-12" />
              <p className="">
                {tile.value} <br />
                {tile.suffix}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerInfo;
