import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div>
      <span className="home-title">Maxwell Interview Exercises</span>
      <div className="home-menu">
        <Link className="home-menu-item" to="exercise1">
          Exercise 1
        </Link>
        <Link className="home-menu-item" to="exercise2">
          Exercise 2
        </Link>
      </div>
    </div>
  );
};

export default Home;
