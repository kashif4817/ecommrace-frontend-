import React, { useState } from 'react'
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false)
    const handleLike = () => setLiked(!liked)

    return (
        <div className="w-full max-w-[200px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 relative">
            <button
                className="absolute top-3 right-3 text-red-500 text-xl z-10"
                onClick={handleLike}>
                {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-46 object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                </h3>

                <p className="text-orange-600 mt-1 text-lg">Rs. {product.price}</p>

                <div className="flex items-center mt-2 space-x-1">
                    {Array.from({ length: 5 }, (_, i) =>
                        i < product.rating ? (
                            <FaStar key={i} className="text-yellow-400 text-sm" />
                        ) : (
                            <FaRegStar key={i} className="text-gray-300 text-sm" />
                        )
                    )}
                </div>

                {/* <button className="mt-3 w-full bg-blue-600 text-white py-1.5 text-sm rounded-md hover:bg-blue-700 transition">
                    Add to Cart
                </button> */}
            </div>
        </div>
    )
}

export default ProductCard
