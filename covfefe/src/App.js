import React from 'react'
import Home from './pages/Home'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children: [
      {path:"", element: <Home />},
      {path: "aboutUS",element:<AboutUs/> },
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