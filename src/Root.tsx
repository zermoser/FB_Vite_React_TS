import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';

const Root: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    console.log('Logged in with:', { username, password });
    navigate('/home');
    return Promise.resolve();
  };  

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Root;
