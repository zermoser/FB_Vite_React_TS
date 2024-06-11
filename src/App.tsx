import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './pages/Login';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string): Promise<void> => {
    return new Promise((resolve) => {
      console.log('Logged in with:', { username, password });
      navigate('/home');
      resolve();
    });
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
