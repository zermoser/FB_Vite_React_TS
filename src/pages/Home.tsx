// Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row">
        <Sidebar />
          <Feed/>
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
