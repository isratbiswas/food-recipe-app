import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import Logout from "../../pages/Logout";

const Navigation = () => {
  const { searchMeals } = useContext(FoodContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simple login state
  const [search, setSearch] = useState("");
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleSearch = (e) => {
    e.preventDefault();
    searchMeals(query);
    console.log("Search:", search); // replace with API call
  };
  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md ">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
              SavorySpoon
            </h1>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex items-center ">
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-10 py-2 text-white outline-none border-2 border-green-500 rounded-l-full focus:outline-none "
            />
            <button className=" px-6 py-3.5  bg-green-500 text-white rounded-r-full hover:bg-green-600 transition">
              <FaSearch />
            </button>
            {/* <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Search
          </button> */}
          </div>
          <nav className="hidden md:flex  space-y-2 mt-2">
            <Link
              to="/"
              className="text-gray-500 m-2 text-xl font-semibold  hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-500 m-2 text-xl font-semibold  hover:text-green-500"
            >
              Categories
            </Link>
            <Link
              to="/favorites"
              className="text-gray-500 m-2 text-xl font-semibold  hover:text-green-500"
            >
              Favorites
            </Link>
          </nav>

          {/* Login / User */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              // <button
              //   onClick={() => setIsLoggedIn(false)}
              //   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              // >
              //   Logout
              // </button>
              <Logout />
            ) : (
              <Link
                to="/login"
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {isOpen ? (
                <FaTimes size={24} className="text-white" />
              ) : (
                <FaBars size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
            SavorySpoon
          </div>

          {/* Search Input */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search recipes..."
              className="px-1 py-2 text-white border  outline-none border-2 border-green-500 rounded-l-full focus:outline-none "
            />
            <button className=" px-1 py-3.5  bg-green-500 text-white rounded-r-full hover:bg-green-600 transition">
              <FaSearch />
            </button>
          </div>

          {/* Login / User */}
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Login
            </button>
          )}

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2 mt-4">
            <a href="/" className="text-gray-700 hover:text-green-600">
              Home
            </a>
            <a
              href="/categories"
              className="text-gray-700 hover:text-green-600"
            >
              Categories
            </a>
            <a href="/favorites" className="text-gray-700 hover:text-green-600">
              Favorites
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}
    </>
  );
};

export default Navigation;
