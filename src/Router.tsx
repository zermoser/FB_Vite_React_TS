import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Redirect404 from './pages/Redirect404';

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
    element: <Redirect404 />,
  },
  {
    path: "404",
    element: <div>Error Not Found</div>,
  },
], { basename: "/FB_Vite_React_TS/" });
