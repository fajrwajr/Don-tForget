import React from "react";
import birthday from "../../img/birthday.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Main = () => {
  return (
    <div className="gfg">
      <img src={birthday} />
      <h3 class="first-txt">Never forget another birthday again!</h3>
      <Link to="/register" className="link" style={{ fontSize: "30px" }}>
        Sign Up
      </Link>
    </div>
  );
};
