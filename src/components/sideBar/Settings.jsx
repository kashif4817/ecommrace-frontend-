import React, { useState } from "react";

const Settings = () => {

   const [selectedColor, setSelectedColor] = useState("");

  const handleFilter = () => {
    if (selectedColor) {
      alert(`Filtering results for color: ${selectedColor}`);
      // 👉 Replace alert with your real filter logic
    } else {
      alert("Please select a color first");
    }
  };
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <h1 className="text-center text-xl font-semibold">Filter by Color</h1>

      {/* Color dropdown */}
      <select
        className="border rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Other">Other</option>
      </select>

      {/* Filter button */}
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Filter
      </button>
    </div>
  )
}

export default Settings