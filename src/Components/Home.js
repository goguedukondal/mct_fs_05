import React from "react";
import './Home.css';
import Navbar from './Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <h1 className="welcome">Welcome to React </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button className="explore">Explore More!!!</button>
    </div>
  );
};

export default Home;
