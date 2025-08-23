import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        const result = await res.json();

        if (res.ok) {
          reset(result.data); // Pre-fill with product data
        } else {
          toast.error(result.message || "Error loading product");
          navigate("/home");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong while fetching product.");
      }
    };

    fetchProduct();
  }, [id, reset, token, navigate]);

  // Update product
  const onSubmit = async (formData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
     
        toast.info(" Product updated successfully");
        navigate("/home");
      } else {
        toast.error(result.message || "Error updating product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while updating product.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-purple-50 shadow-lg rounded-lg p-6 border border-purple-200">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">✏ Edit Product</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded px-4 py-2"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded px-4 py-2"
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded px-4 py-2 h-28 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: true })}
              className="w-full border border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded px-4 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg shadow-md transition"
          >
            {isSubmitting ? "Updating..." : "✅ Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
