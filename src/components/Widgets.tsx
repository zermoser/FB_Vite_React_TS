import React from 'react';
import { FaUserPlus, FaBullhorn } from 'react-icons/fa';

const Widgets: React.FC = () => {
  return (
    <div className="w-full hidden md:block md:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto sticky top-0">
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <FaUserPlus className="mr-2 text-blue-500" /> Friend Suggestions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">F1</div>
            <p className="text-gray-700">Friend 1</p>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">F2</div>
            <p className="text-gray-700">Friend 2</p>
          </div>
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white mr-2">F3</div>
            <p className="text-gray-700">Friend 3</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold mb-3 flex items-center">
          <FaBullhorn className="mr-2 text-blue-500" /> Sponsored
        </h3>
        <p className="text-gray-700">Ad Content ©Kittipoj Naewthavorn</p>
      </div>
    </div>
  );
};

export default Widgets;
