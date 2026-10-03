

const priceList = [
  { type: "3 BHK", area: "1305 Sq. Ft.", price: "₹ 4.56 Cr*" },
  { type: "3.5 BHK", area: "1305 Sq. Ft.", price: " ₹ 5.00 Cr*" },
  { type: "3.5 BHK + SR", area: "1305 Sq. Ft.", price: " ₹ 5.50 Cr*" },
  { type: "4 BHK", area: "1305 Sq. Ft.", price: " ₹ 6.00 Cr*" },
  { type: "4.5 BHK", area: "1305 Sq. Ft.", price: " ₹ 6.50 Cr*" },
  { type: "4 BHK", area: "1305 Sq. Ft.", price: " ₹ 6.00 Cr*" },
  { type: "4.5 BHK", area: "1305 Sq. Ft.", price: " ₹ 6.50 Cr*" },
];

const ProjectPagePriceList = () => {
  return (
    <div className="border bg-grey text-white p-6 shadow-md rounded-lg">
      <div className="w-full p-4">
        <h3 className="text-4xl font-bold mb-4">Price List</h3>
        <hr className="gradient-hr mb-3 w-20" />
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-60 overflow-y-auto">
          <table className="min-w-full bg-white border-collapse border-spacing-2">
            <thead className="sticky top-0 bg-black">
              <tr>
                <th className="py-2 px-4 border border-gold border-b-2 border-b-gold">Type</th>
                <th className="py-2 px-4 border border-gold border-b-2 border-b-gold">Sizes</th>
                <th className="py-2 px-4 border border-gold border-b-2 border-b-gold">Price</th>
              </tr>
            </thead>
            <tbody className="text-center text-black">
              {priceList.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-gray-300">{item.type}</td>
                  <td className="py-2 px-4 border border-gray-300">{item.area}</td>
                  <td className="py-2 px-4 border border-gray-300">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectPagePriceList;
