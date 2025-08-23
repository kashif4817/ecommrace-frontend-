import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingBag, FaCog, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Sidebar = () => {

    const showConfirmToast = ({ logout, navigate }) => {
        toast(
            ({ closeToast }) => (
                <div className="w-80 bg-white text-gray-800 p-5 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">Confirm Logout</h3>
                    <p className="text-sm mb-4">
                       Are you sure you want to log out?
                    </p>
                    <div className="flex justify-end gap-3">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition-all"
                            onClick={closeToast}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all"
                            onClick={() => {
                                logout();
                                toast.success("Logged out successfully");
                                closeToast();
                                navigate("/login");
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ),
            {
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                position: "top-center",
            }
        );
    };




    const { logout } = useAuth();
    const navigate = useNavigate();

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200
        ${isActive
            ? "bg-blue-600 text-white font-semibold shadow"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`;

    const handleLogout = () => {
        showConfirmToast({ logout, navigate });
    };
    // const handleLogout = () => {
    //     showConfirmToast();
    //     toast.success("Logout Successfully")
    //     logout();
    //     navigate('/login');
    // };

    return (
        <div className="h-screen w-56 bg-gray-900 text-white p-4 fixed shadow-lg">
            <h2 className="text-xl font-bold text-blue-500 mb-6">My Dashboard</h2>
            <ul className="space-y-4 text-sm font-medium">
                {/* 🔥 Add 'end' prop to home and use correct paths */}
                <li>
                    <NavLink to="/home" end className={linkStyle}>
                        <FaHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/orders" className={linkStyle}>
                        <FaShoppingBag /> Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/likes" className={linkStyle}>
                        <FaHeart /> Favourites
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/settings" className={linkStyle}>
                        <FaCog /> Settings
                    </NavLink>
                </li>
                <li>
                    {/* 🔥 Use button for logout instead of NavLink */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;