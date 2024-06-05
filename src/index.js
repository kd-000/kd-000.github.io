import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import './css/index.css';
import App from './App';
import About from './pages/about';
import CV from './pages/cv';
import Quantum1 from './pages/Quantum1';
import Quantum2 from './pages/Quantum2';
import Blitz from './pages/Blitz';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cv",
    element: <CV />,
  },
  {
    path: "/quantum1",
    element: <Quantum1 />,
  },
  {
    path: "/quantum2",
    element: <Quantum2 />,
  },
  {
    path: "/blitz",
    element: <Blitz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);