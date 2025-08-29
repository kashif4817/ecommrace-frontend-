import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const files = data.images;
    const uploadedUrls = [];

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
      uploadedUrls.push(fileData.secure_url);
    }

    setImageUrls(uploadedUrls);
    setLoading(false);

    console.log("Uploaded URLs:", uploadedUrls);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Upload Images
        </h2>

        <input
          type="file"
          multiple
          accept="image/*"
          {...register("images", {
            validate: (files) => files?.length > 0 || "Please select at least one image",
          })}
          className="block w-full text-sm text-gray-700 
          file:mr-4 file:py-2 file:px-4 
          file:rounded-xl file:border-0 
          file:text-sm file:font-semibold 
          file:bg-blue-600 file:text-white 
          hover:file:bg-blue-700"
        />

        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images.message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-xl text-white font-medium transition 
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Preview uploaded images */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {imageUrls.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt="uploaded"
            className="w-40 h-40 object-cover rounded-xl shadow"
          />
        ))}
      </div>
    </div>
  );
}
