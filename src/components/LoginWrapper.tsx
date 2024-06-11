import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';

const LoginWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log('Logged in with:', { email, password });
    navigate('/home');
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginWrapper;
