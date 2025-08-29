
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (data) => {
    console.log('data', data);
    setLoading(true);

    try {
      // Step 1: Upload images to Cloudinary
      const files = data.images;
      const uploadedUrls = [];

      if (files?.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("file", files[i]);
          formData.append("upload_preset", "My_first_upload"); // your preset
          formData.append("cloud_name", "dht82ryeb"); // your cloud name

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/dht82ryeb/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          const fileData = await res.json();
          console.log('fileData', fileData)
          uploadedUrls.push(fileData.secure_url);
        }
      }

      // Step 2: Send product + image URLs to backend
      const productData = {
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        ishot: data.ishot || false,
        discountedItem: data.discountedItem || false,
        color: data.color || "",
        size: data.size || "",
        images: uploadedUrls, // <-- array of URLs
      };

      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        toast.success("Product Added!");
        reset();
        navigate("/products"); // optional redirect
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.01, message: "Price must be greater than 0" },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Images */}
        <div>
          <label className="block font-medium mb-1">Product Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            {...register("images", {
              validate: (files) =>
                files?.length > 0 || "Please select at least one image",
            })}
            className="block w-full text-sm text-gray-700 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-xl file:border-0 
              file:text-sm file:font-semibold 
              file:bg-blue-600 file:text-white 
              hover:file:bg-blue-700"
          />
          {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">-- Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="grocery">Grocery</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: { value: 10, message: "Description must be at least 10 characters" },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Optional Fields */}
        <h1 className="text-center">----------Optional Fields---------</h1>

        <div>
          <label className="block font-medium mb-1">Is Hot Item</label>
          <input type="checkbox" value={true} {...register("ishot")} />
        </div>

        <div>
          <label className="block font-medium mb-1">Discounted Item?</label>
          <input type="checkbox" value={true} {...register("discountedItem")} />
        </div>

        <div>
          <label className="block font-medium mb-1">Color</label>
          <input
            type="text"
            {...register("color")}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Size</label>
          <input
            type="number"
            step="0.01"
            {...register("size", { min: { value: 0, message: "Minimum value is 0" } })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-xl text-white font-medium transition 
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Uploading & Saving..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductPage;
