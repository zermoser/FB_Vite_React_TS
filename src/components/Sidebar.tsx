import React, { useContext } from 'react';
import { FaHome, FaUserFriends, FaUsers, FaStore, FaTv, FaClock, FaSignOutAlt } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <div className="w-full hidden md:block md:w-1/4 bg-white p-4 shadow-md h-screen overflow-y-auto sticky top-0">
        <h2 className="text-2xl font-bold mb-4">Welcome, <span className='text-blue-900'>{state.username}</span></h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaHome className="mr-3" />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaUserFriends className="mr-3" />
              Friends
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaUsers className="mr-3" />
              Groups
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaStore className="mr-3" />
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaTv className="mr-3" />
              Watch
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
              <FaClock className="mr-3" />
              Memories
            </a>
          </li>
          <li>
            <button onClick={handleLogout} className="flex items-center text-gray-700 font-semibold hover:text-blue-600 w-full text-left">
              <FaSignOutAlt className="mr-3" />
              Logout
            </button>
          </li>
        </ul>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-50 bg-blue-500 p-4 shadow-md md:hidden">
        <ul className="flex justify-around">
          <li>
            <a href="#" className="flex flex-col items-center text-white font-semibold hover:text-blue-100">
              <FaHome className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center text-white font-semibold hover:text-blue-100">
              <FaUserFriends className="text-xl" />
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center text-white font-semibold hover:text-blue-100">
              <FaUsers className="text-xl" />
            </a>
          </li>
          <li>
            <button onClick={handleLogout} className="flex flex-col items-center text-white font-semibold hover:text-blue-100">
              <FaSignOutAlt className="text-xl" />
            </button>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Sidebar;
