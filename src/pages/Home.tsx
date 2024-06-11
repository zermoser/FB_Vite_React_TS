import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
