import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoriesBar = () => {
  const categories = [
    "Men's Fashion", "Women's Fashion", "Home & Living",
    "Electronics", "Shoes", "Watches", "Bags",
    "Accessories", "Clothes", "Sports", "Beauty", "Kids", "Gadgets"
  ];

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-6 shadow-md">
      <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
        Categories
        <span className="block h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full" />
      </h1>

      <div className="relative px-6 sm:px-12">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-purple-100 z-20"
        >
          <FaChevronLeft className="text-purple-600 text-lg" />
        </button>

        <ul
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide gap-4 px-10 sm:px-16"
        >
          {categories.map((item, index) => (
            <li key={index} className="flex-shrink-0">
              <button className="whitespace-nowrap py-2 px-5 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition duration-300">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-pink-100 z-20"
        >
          <FaChevronRight className="text-pink-600 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CategoriesBar;
