import  { useState } from "react";
import hotlocalities from "../../assets/images/HomePageImages/hotlocalities.webp";
import i1 from "../../assets/images/HomePageImages/Hotlocalities/1.webp";
import i2 from "../../assets/images/HomePageImages/Hotlocalities/2.webp";
import i3 from "../../assets/images/HomePageImages/Hotlocalities/3.webp";
import i4 from "../../assets/images/HomePageImages/Hotlocalities/4.webp";
import i5 from "../../assets/images/HomePageImages/Hotlocalities/5.webp";

const HomePageHotLocalities = () => {
  const [selectedType, setSelectedType] = useState("floorPlan");
  const floorPlanImages = {
    sitePlan: [i1],
    masterPlan: [i2],
  };

  return (
    <div
      className="bg-cover bg-center border-t-4 border-gold min-h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: `url(${hotlocalities})` }}
    >
      <div className="mb-10">
        <h2 className="text-5xl mb-6 text-gold text-aesthete">Hot</h2>
     
        <h3 className="text-6xl font-bold mb-4 text-gold text-addington">Localities</h3>
      </div>

      <div className="Maindiv w-[70%] h-[55vh] hidden md:flex flex-row justify-center items-stretch">
        <div className="flex flex-col h-full w-1/3">
          <div
            className="h-full border bg-cover bg-center place-content-center"
            style={{ backgroundImage: `url(${i2})` }}
          ><p className="text-lg bg-black bg-opacity-50 p-2">SPR Road</p></div>
          <div
            className="h-full border bg-cover bg-center place-content-center"
            style={{ backgroundImage: `url(${i1})` }}
          ><p className="text-lg bg-black bg-opacity-50 p-2">New Gurgaon</p></div>
        </div>

        <div className="flex flex-col h-full w-2/3">
          <div
            className="h-full border bg-cover bg-center place-content-center"
            style={{ backgroundImage: `url(${i3})` }}
          ><p className="text-lg bg-black bg-opacity-50 p-2">Dwarka Expressway</p></div>
        </div>

        <div className="flex flex-col h-full w-1/3">
          <div
            className="h-full border bg-cover bg-center place-content-center"
            style={{ backgroundImage: `url(${i5})` }}
          ><p className="text-lg bg-black bg-opacity-50 p-2">Golf Course Road</p> </div>
          <div
            className="h-full border bg-cover bg-center place-content-center"
            style={{ backgroundImage: `url(${i4})` }}
          > <p className="text-lg bg-black bg-opacity-50 p-2"> Golf Course Extn. Road</p></div>
        </div>
      </div>

      <div className="w-[70%] h-[55vh] md:hidden flex flex-row justify-center items-stretch">
      </div>
    </div>
  );
};

export default HomePageHotLocalities;
