import React from "react";

const ProjectPagePriceList = ({ data = [] }) => {
  const defaultPrices = [
    { type: "3 BHK", size: "1305 Sq. Ft.", price: "₹ 4.56 Cr*" },
    { type: "3.5 BHK", size: "1305 Sq. Ft.", price: "₹ 5.00 Cr*" },
    { type: "3.5 BHK + SR", size: "1305 Sq. Ft.", price: "₹ 5.50 Cr*" },
    { type: "4 BHK", size: "1305 Sq. Ft.", price: "₹ 6.00 Cr*" },
  ];

  const priceItems = data.length > 0 ? data : defaultPrices;

  return (
    <div className="bg-[#121214] border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6 tracking-wide font-serif">
        Price List
      </h2>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-amber-500/10 text-amber-400 border-b border-zinc-800 text-sm font-semibold uppercase tracking-wider">
              <th className="py-4 px-6">Unit Type</th>
              <th className="py-4 px-6">Super Area</th>
              <th className="py-4 px-6 text-right">Starting Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-sm font-medium text-zinc-200">
            {priceItems.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-900/80 transition-colors duration-150"
              >
                <td className="py-4 px-6 font-semibold text-white">{item.type}</td>
                <td className="py-4 px-6 text-zinc-400">{item.size}</td>
                <td className="py-4 px-6 text-right font-bold text-amber-400">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-zinc-500 mt-3 text-right">
        * Govt. charges & applicable taxes extra
      </p>
    </div>
  );
};

export default ProjectPagePriceList;