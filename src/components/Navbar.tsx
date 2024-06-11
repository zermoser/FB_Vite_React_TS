import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My Social Media</Link>
        <div className="hidden md:block">
          <Link to="/home" className="text-white mx-4">Home</Link>
          <Link to="/profile" className="text-white mx-4">Profile</Link>
          <Link to="/settings" className="text-white mx-4">Settings</Link>
          {/* Add more navbar links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
