import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';

const Root: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log('Logged in with:', { email, password });
    navigate('/home');
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
