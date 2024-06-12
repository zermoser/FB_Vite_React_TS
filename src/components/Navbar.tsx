import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar: React.FC = () => {
  const { state } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My Social Media</Link>
        <div className="hidden md:block relative">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadYZz6i6TfUk6AIXm9TaWFhRnyyH2dWwShg&s"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="ml-2 text-white">{state.username}</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li>
                  <Link to="" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                </li>
                <li>
                  <Link to="" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                </li>
                <li>
                  <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
