import React from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

import "./logo.css";

function Aside(props) {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  );
}

export default Aside;
