import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    "Sunscreen",
    "Moisturizer",
    "Serum",
    "FaceWash",
    "LipCare",
    "FaceMask",
    "BodyCare",
    "EyeCare",
    "HairCare",
  ];

  // Filter products
  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded-lg w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Results */}
      <ul className="mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <li key={index} className="p-2 border-b">
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
