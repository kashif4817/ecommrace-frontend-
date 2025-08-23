import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DropDown from "../../pages/register/DropDown";
import { CiSearch } from "react-icons/ci";
// import { CiSearch } from "../../pages/register/CiSearch";
CiSearch

const navLinkStyle = ({ isActive }) =>
  isActive
    ? "text-blue-500 font-semibold transition-colors duration-100"
    : "text-gray-300 hover:text-blue-400 transition-colors duration-100";

const iconLinkStyle = ({ isActive }) =>
  `flex items-center gap-1 ${isActive ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-blue-400"} transition-colors duration-100`;

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md px-6 py-3 flex items-center justify-between h-16">
      {/* Brand */}
      <div className="text-white font-bold text-xl tracking-wide">🛍️ E-Shop</div>

      {/* Search Bar */}
      <div className="hidden md:flex w-[350px] items-center border border-gray-600 rounded-full overflow-hidden bg-gray-800 text-sm">
        <input
          type="text"
          placeholder="Search products, brands..."
          className="w-full px-4 py-2 bg-transparent text-gray-300 placeholder-gray-400 outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-full transition">
          <CiSearch size={20} />
        </button>
      </div>

      {/* Nav Links & Icons */}
      <ul className="flex items-center space-x-4 text-sm">
        {/* 🔥 Add 'end' prop to Home and fix all paths */}
        <li>
          <NavLink to="/home" end className={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/products" className={navLinkStyle}>
            add
          </NavLink>
        </li>
        {/* <li className="hidden lg:block">
          <DropDown />
        </li> */}
        <li>
          <NavLink to="/home/contact" className={navLinkStyle}>
            show
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/about-us" className={navLinkStyle}>
            About
          </NavLink>
        </li>

        {/* Profile */}
        <li>
          <NavLink to="/home/profile" className={iconLinkStyle}>
            <FaUserCircle className="text-xl" />
            <span className="hidden sm:inline">Profile</span>
          </NavLink>
        </li>

        {/* Notifications */}
        <li className="relative">
          <NavLink to="/home/notifications" className={iconLinkStyle}>
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">5</span>
          </NavLink>
        </li>

        {/* Cart */}
        <li className="relative">
          <NavLink to="/home/cart" className={iconLinkStyle}>
            <HiOutlineShoppingBag className="text-xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">3</span>
            <span className="hidden sm:inline">Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;