import React from 'react'
import ProductCard from './ProductCard';


const sample = [
    {
        name: 'Imported Hand bags for girls with Stylish Golden chain And Long strap',
        price: 313,
        rating: 5,
        image: '/productImages/bag.webp',
    },
    {
        name: 'Texture Cotton Lawn Summer Designer 100% Cotton Made Fabric,Full Suit for Normal Person,Premium Khaddi Soft & Sooti Stuff For Mens Wear In Summer',
        price: 1600,
        rating: 4,
        image: '/productImages/cloth.webp',
    },
    {
        name: 'TWS I12 M19 Airpods Bluetooth Wireless Earbuds with Mic and Charging Case',
        price: 999,
        rating: 3,
        image: '/productImages/m10.webp',
    },
    {
        name: 'Histro Automatic Counting Hand Gripper Adjustable Resistance Automatic Counting Non-Slip Hand Grip Strength Trainer Fingers Wrist Forearm Exerciser Workout Gear Home Gym Exercise Equipment   Hand Gripper 5-60KG  Automatic  Non-Slip hand strengthen',
        price: 399.99,
        rating: 3,
        image: '/productImages/neckband.webp',
    },
    {
        name: 'Newmine Wireless Bluetooth Airpods Stereo Earbuds for All Cell Phones Transparent TPU Protective Case',
        price: 677.99,
        rating: 3,
        image: '/productImages/pro-6.webp',
    },
];
const ProductList = () => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {sample.map((product, index) => {
                return <ProductCard key={index} product={product} />
            })}
        </div>
    )
}

export default ProductList