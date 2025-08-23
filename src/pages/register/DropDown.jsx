import { NavLink } from "react-router-dom";
import { FaChevronDown, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Dropdown = () => {
    return (
        <li className="relative group px-4 text-white font-medium">
            {/* Account label */}
            <div className="flex items-center gap-1 cursor-pointer select-none hover:text-blue-400 transition">
                <span>Account</span>
                <FaChevronDown
                    className="text-sm transition-transform duration-300 group-hover:rotate-180"
                />
            </div>

            {/* Dropdown menu */}
            <ul className="absolute top-full left-0 mt-1 w-44 bg-white text-black rounded-xl shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-auto">
                <li className="px-4 py-2 hover:bg-gray-200 transition flex items-center gap-2">
                    <FaSignInAlt className="text-blue-500" />
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-black hover:text-blue-500"
                        }>
                        Login
                    </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition flex items-center gap-2">
                    <FaUserPlus className="text-blue-500" />
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "text-black hover:text-blue-500"
                        }>
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        </li>
    );
};

export default Dropdown;
