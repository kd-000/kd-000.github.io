import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import './css/index.css';
import App from './App';
import About from './pages/about';
import CV from './pages/cv';
import Quantum1 from './pages/Quantum-1';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/cv",
    element: <CV/>
  },
  {
    path: "/quantum-1",
    element: <Quantum1/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);