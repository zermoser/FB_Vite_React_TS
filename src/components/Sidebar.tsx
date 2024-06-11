import React from 'react';
import { FaHome, FaUserFriends, FaUsers, FaStore, FaTv, FaClock, FaSignOutAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full hidden md:block md:w-1/4 bg-white p-4 shadow-md h-screen overflow-y-auto">
      <h3 className="text-xl font-bold mb-4">Sidebar</h3>
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
          <a href="login" className="flex items-center text-gray-700 font-semibold hover:text-blue-600">
            <FaSignOutAlt className="mr-3" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
