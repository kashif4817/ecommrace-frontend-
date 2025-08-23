import React from 'react'
import ImageSlider from './imageSlider/ImageSlider'
import CategoriesBar from './categoriesBar/CategoriesBar'
import ProductList from './productCard/ProductCards/ProductList'
import Contact from './navBar/Contact'
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

// import Card from './Card'

const MainHomePage = () => {

    // useEffect(() => {
    //     console.log("UseEffect runs from Home");

    //     const fetchProducts = async (req, res) => {
    //         console.log("Enterd to fetched product");
    //         const token = localStorage.getItem('token');
    //         console.log('token', token);
    //         try {
    //             const response = await fetch("http://localhost:5000/home", {
    //                 method: "GET",
    //                 headers: {
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             });
    //             const result = await response.json();
    //             console.log('result.roleName', result.roleName);
    //             console.log(result.roleId);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     };

    //     fetchProducts();
    // }, []);
    return (
        <div className="space-y-2">

            <section>
                <ImageSlider />
            </section>
            <section>
                <CategoriesBar />
            </section>
            <section className="bg-yellow-100 p-4 rounded shadow">
                <h2 className="text-lg font-bold">Summer Sale is Live!</h2>
                <p>Up to 50% off on selected items.</p>
            </section>
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">Featured Products</h1>
                <ProductList />
                <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">New Products</h1>
                {/* <Contact /> */}
            </div>


        </div>

    )
}

export default MainHomePage