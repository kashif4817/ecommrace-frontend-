// ProductPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Products = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



  const submitHandler = async (data) => {
    console.log("Data from form ::::::::",data)
    try {
      const token = localStorage.getItem('token');
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data)
      });
      const result = res.json();

      if (res.ok) {
        toast.success("Product Added!")
        // reset();
      } else {
        toast.error("Faild to add product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Server error");
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("name", { required: "Product name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be greater than 0" },
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("image", {
              required: "Image URL is required",
              pattern: {
                // value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                message: "Enter a valid image URL",
              },
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">-- Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="grocery">Grocery</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <h1 className="text-center">----------Optional Fields---------</h1>
        {/* //is hot */}
        <div>
          <label className="block font-medium mb-1">Is hot Item</label>
          <input
            type="checkbox"
            value={true}
            {...register("ishot")}
          />
          {errors.ishot && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ishot.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Discounted Item?</label>
          <input
            type="checkbox"
            value={true}
            {...register("discountedItem")}
          />
          {errors.discounted && (
            <p className="text-red-500 text-sm mt-1">
              {errors.discounted.message}
            </p>
          )}
        </div>

        {/* //color */}
        <div>
          <label className="block font-medium mb-1">Color</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("color")}
          />
          {errors.size && (
            <p className="text-red-500 text-sm mt-1">
              {errors.size.message}
            </p>
          )}
        </div>


        //color
        <div>
          <label className="block font-medium mb-1">Size</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            {...register("size", { min: { value: 0, message: "Minmum value is 0" } })}
          />
          {errors.size && (
            <p className="text-red-500 text-sm mt-1">
              {errors.size.message}
            </p>
          )}
        </div>







        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Products;




