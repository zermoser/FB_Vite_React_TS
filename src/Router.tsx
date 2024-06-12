import { createBrowserRouter, } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';

const handleLogin = async (username: string, password: string) => {
  console.log('Logged in with:', { username, password });
  window.location.href = '/FB_Vite_React_TS/'
};  

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login onLogin={handleLogin} />,
    errorElement: <div>Error</div>
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>Don't have this page</div>,
    loader: ()=> {
      window.location.href = '/FB_Vite_React_TS/404'
      return true
    }
  },
  {
    path: "404",
    element: <div>Error Not Found</div>
  },
], {basename:"/FB_Vite_React_TS/"});
