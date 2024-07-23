import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserInPropsModel } from "../models/UserProps";

const Navbar: React.FC<UserInPropsModel> = ({ setUserIn, userRole, setUserRole }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUserIn(false);
    setUserRole(null);
    navigate("/login");
    toast.success("Logout Successfully", {
      position: "top-center",
    });
  }

  return (
    <nav className="bg-blue-700 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pr-40">
        <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://img.icons8.com/?size=100&id=10860&format=png&color=FFFFFF" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">HOTEL</span>
        </a>
        <button
          id="dropdownUserAvatarButton"
          onClick={toggleDropdown}
          className="flex absolute right-24 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
        </button>
        {isDropdownVisible && (
          <div id="dropdownAvatar" className="absolute right-7 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <div className="px-4 py-3 text-sm text-gray-900">
              <div className="font-bold">User Name</div>
            </div>
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</a>
              </li>
            </ul>
            <div className="py-2">
              <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</a>
            </div>
          </div>
        )}
        <div className="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-l text-gray-900 border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-blue-700" placeholder="Search..." />
          </div>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-700">
            <li>
              <a href="/home" className="text-xl block py-2 px-3 text-white rounded-lg hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-700 md:p-2">Home</a>
            </li>
            <li>
              <a href="/hotels" className="text-xl block py-2 px-3 text-white rounded-lg hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-700 md:p-2">Hotels</a>
            </li>
            {userRole === 'Admin' && (
              <li>
                <a href="/admin" className="text-xl block py-2 px-3 text-white rounded-lg hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-700 md:p-2">Dashboard</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
