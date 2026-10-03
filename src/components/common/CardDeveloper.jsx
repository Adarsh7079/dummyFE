import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";

const CardDeveloper = ({ item }) => {
  return (
    <div className="w-full bg-[#18181b] border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-800">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Placeholder fallback if image fails to load
            e.target.src = "https://via.placeholder.com/400x250?text=No+Image+Available";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-200">
            {item.title}
          </h3>

          <div className="mt-3 space-y-2 text-zinc-400 text-sm">
            {/* Location */}
            <div className="flex items-center gap-1.5">
              <MdLocationOn className="text-lg text-amber-500 flex-shrink-0" />
              <span>{item.address}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1.5 text-zinc-200 font-medium text-base">
              <BsCurrencyRupee className="text-lg text-amber-500 flex-shrink-0" />
              <span>{item.price}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full py-2.5 px-4 text-sm font-medium text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-all duration-200 active:scale-[0.98]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDeveloper;