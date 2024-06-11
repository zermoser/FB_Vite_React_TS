import React from 'react';

const Feed: React.FC = () => {
  return (
    <div className="flex-1 p-4 h-screen overflow-y-auto">
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold">User Name</h3>
        <p>This is a mockup post content.</p>
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-lg font-bold">User Name</h3>
        <p>This is another mockup post content.</p>
      </div>
    </div>
  );
};

export default Feed;
