import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext"; // assuming you're using AuthContext
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");


  const submitHandler = async (data) => {
    const result = await signup(data);
    if (result.message.status == 201) {
      toast.success("Registered successfully!");
      console.log("result", result);

      navigate("/login"); 
      setTimeout(() => {
        toast.info("Now login to proceed", { autoClose: 3000 })
      }, 1000);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Create an Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("firstName", { required: "First name is required" })}
            />
            <span className="text-red-500 text-sm h-5 block">
              {errors.firstName?.message}
            </span>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("lastName", { required: "Last name is required" })}
            />
            <span className="text-red-500 text-sm h-5 block">
              {errors.lastName?.message}
            </span>
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Mobile No</label>
            <input
              type="tel"
              placeholder="03xxxxxxxxx"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  // value: /^03\d{9}$/,
                  message: "Enter a valid Pakistani mobile number (03xxxxxxxxx)",
                },
              })}
            />
            <span className="text-red-500 text-sm h-5 block">
              {errors.mobile?.message}
            </span>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <span className="text-red-500 text-sm h-5 block">
              {errors.email?.message}
            </span>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-400 hover:text-gray-200 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <span className="text-red-500 text-sm h-5 block">
              {errors.password?.message}
            </span>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-type password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2 text-gray-400 hover:text-gray-200 text-sm"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            <span className="text-red-500 text-sm h-5 block">
              {errors.confirmPassword?.message}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition shadow-md hover:shadow-lg"
          >
            Register
          </button>

          {/* Link to Login */}
          <p className="text-center text-sm mt-4 text-gray-400">
            Already have an account?
            <Link to="/login" className="ml-1 text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
