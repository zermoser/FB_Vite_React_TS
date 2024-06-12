import { createBrowserRouter, } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>Don't have this page</div>,
    loader: ()=> {
      window.location.href = '/404'
      return true
    }
  },
  {
    path: "404",
    element: <div>Error Not Found</div>
  },
], {basename:"/FB_Vite_React_TS/"});
