// import React from 'react';
import './App.css'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children: [
      {path:"", element: <Home />},
      {path: "AboutUs",element:<AboutUs/> },
    ]
  }
]);

function App() {
  return (
    <>
    <RouterProvider  router={router} />
    </>
  );
}

export default App;