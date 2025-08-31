import React, { useState } from 'react'

const LikedProducts = () => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilter = () => {
    if (selectedCategory) {
      alert(`Filtering results for category: ${selectedCategory}`);
      // 👉 Replace alert with your actual filtering logic
    } else {
      alert("Please select a category first");
    }
  };

 return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <h1 className="text-center text-xl font-semibold">Filter by Category</h1>

      {/* Dropdown */}
      <select
        className="border rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
        <option value="Sports">Sports</option>
        <option value="Other">Other</option>
      </select>

      {/* Filter Button */}
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Filter
      </button>
    </div>
  )
}

export default LikedProducts