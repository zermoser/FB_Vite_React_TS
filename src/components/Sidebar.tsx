import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/4 bg-white p-4 shadow-md">
      <h3 className="text-xl font-bold mb-4">Sidebar</h3>
      <ul>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Home
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Friends
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Groups
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Marketplace
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Watch
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block text-gray-700 font-semibold">
            Memories
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
