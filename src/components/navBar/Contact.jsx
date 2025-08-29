import React, { useEffect, useRef, useState } from 'react'
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';


const Contact = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  
//
  // if (decoded.roleName === 'user') {
//
  //   return <Navigate to="/home/non-contact" replace />;
  // } else {

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/my", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await response.json();
        if (response.ok) {
          setProducts(result.data);
        } else {
          console.error(result.message)
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [])
  // }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (response.ok) {
        setProducts(products.filter(item => item._id !== id));
        toast.success("Item deleted successfully");
      } else {
        toast.error(result.message || "Delete failed");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl   font-bold mt-2">{product.name}</h2>

              <h2 className="text-xl bg-amber-200 font-bold mt-2">COLOR:{product.categoryId.color[0] ? `${product.categoryId.color[0]}` : null}</h2>
              <h2 className="text-xl font-bold mt-2">SIZE:{product.categoryId.size ? `${product.categoryId.size[0]}` : null}</h2>
              <h2 className="text-xl font-bold mt-2">DOSCOUNT:{product.categoryId.discountedItem ? `true` : 'false'}</h2>
              <h2 className="text-xl font-bold mt-2">HOT:{product.categoryId.hotItem ? `true` : "false"}</h2>

              <p className="text-gray-500">{product.category}</p>
              <p className="mt-2 overflow-hidden">{product.description}</p>
              {/* <p className="mt-1 font-semibold">Stock: {product.stock}</p> */}
              <p className="mt-1 text-green-600 font-bold">${product.price}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/home/edit/${product._id}`, { state: product })}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  ✏ Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )
      }
    </div >
  );
}

export default Contact;
