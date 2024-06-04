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
import Quantum1 from './pages/Quantum1';
import Quantum2 from './pages/Quantum2';
import Blitz from './pages/Blitz';




const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + "/",
    element: <App></App>,
  },
  {
    path: process.env.PUBLIC_URL + "/about",
    element: <About/>
  },
  {
    path: process.env.PUBLIC_URL + "/cv",
    element: <CV/>
  },
  {
    path: process.env.PUBLIC_URL + "/quantum1",
    element: <Quantum1/>
  },
  {
    path: process.env.PUBLIC_URL + "/quantum2",
    element: <Quantum2/>
  },
  {
    path: process.env.PUBLIC_URL + "/blitz",
    element: <Blitz/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);