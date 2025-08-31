import React, { useState } from 'react'

const Orders = () => {

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");


  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = () => {
     if (!searchQuery && !selectedCategory && !selectedColor && !selectedSize) {
      alert("Please select at least one filter or enter a search term");
      return;
    }

    alert(
      `Filtering with:\n` +
        `Search: ${searchQuery || "None"}\n` +
        `Category: ${selectedCategory || "Any"}\n` +
        `Color: ${selectedColor || "Any"}\n` +
        `Size: ${selectedSize || "Any"}`
    );
    // 👉 Replace alert with actual filter logic (API or product list filter)
  };
  return (
    // <div className="flex flex-col items-center space-y-4 p-6">
    //   <h1 className="text-center text-xl font-semibold">Other</h1>

    //   {/* Search bar */}
    //   <input
    //     type="text"
    //     placeholder="Search by name or description..."
    //     className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     value={searchQuery}
    //     onChange={(e) => setSearchQuery(e.target.value)}
    //   />



    //   {/* Filter button */}
    //   <button
    //     onClick={handleFilter}
    //     className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
    //   >
    //     Filter
    //   </button>
    // </div>
     <div className="flex flex-col items-center space-y-4 p-6">
      <h1 className="text-center text-2xl font-bold">Product Filter</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name or description..."
        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category select */}
      <select
        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Color select */}
      <select
        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Size select */}
      <select
        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Filter button */}
      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default Orders