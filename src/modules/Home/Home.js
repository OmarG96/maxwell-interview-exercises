import React from "react";
import { Link } from "react-router-dom";
import { HeaderTitle } from "../../common";

import "./styles.css";

const Home = () => {
  return (
    <div>
      <HeaderTitle title="Maxwell Interview Exercises" />
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
