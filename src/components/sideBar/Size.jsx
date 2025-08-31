import React, { useState } from "react";

const Size = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleFilter = () => {
    if (selectedSize) {
      alert(`Filtering results for size: ${selectedSize}`);
      // here you can call API or filter logic
    } else {
      alert("Please select a size first");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <h1 className="text-center text-xl font-semibold">Filter by size</h1>

      {/* Dropdown */}
      <select
        className="border rounded-lg px-4 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">Select Size</option>
        <option value="sm">Small (SM)</option>
        <option value="m">Medium (M)</option>
        <option value="l">Large (L)</option>
        <option value="xl">Extra Large (XL)</option>
        <option value="xxl">Double Extra Large (XXL)</option>
      </select>

      {/* Filter Button */}
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Filter
      </button>
    </div>
  );
};

export default Size;
