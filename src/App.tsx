import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './pages/Login';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log('Logged in with:', { email, password });
    navigate('/home');
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
