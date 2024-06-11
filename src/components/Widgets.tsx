import React from 'react';

const Widgets: React.FC = () => {
  return (
    <div className="w-full hidden md:block md:w-1/4 bg-gray-100 p-4 h-screen overflow-y-auto">
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold">Friend Suggestions</h3>
        <p>Friend 1</p>
        <p>Friend 2</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold">Sponsored</h3>
        <p>Ad Content</p>
      </div>
    </div>
  );
};

export default Widgets;
