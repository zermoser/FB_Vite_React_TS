import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { UserContext } from '../context/UserContext';

const Home: React.FC = () => {
  const { state } = useContext(UserContext);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-4 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, <b className='text-blue-900'>{state.username}</b></h2>
        <Feed />
      </div>
      <Widgets />
    </div>
  );
};

export default Home;
