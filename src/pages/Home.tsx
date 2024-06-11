import React from 'react';
import Feed from '../components/Feed';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">Sidebar</aside>
      <Feed />
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">Widgets</aside>
    </div>
  );
};

export default Home;
