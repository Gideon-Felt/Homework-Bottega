import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link exact="true" to="/">
        Home
      </Link>
      <Link to="/component1">Comp1</Link>
      <Link to="/component2">Comp2</Link>
    </div>
  );
};

export default NavBar;