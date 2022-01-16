import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Dates = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">Birthday</div>
        <ul className="sidebar-navigation">
          <li className="header">Navigation</li>
          <li>
            <Link to="/">
              <i class="fa fa-circle" aria-hidden="true"></i> Dashboard
            </Link>
          </li>
          <li class="header">Other</li>
          <li>
            <Link to="/Dates">
              <i className="fa fa-calendar" aria-hidden="true"></i> View Dates
            </Link>
          </li>
          <li>
            <Link to="/Add">
              <i class="fa fa-user" aria-hidden="true"></i>Add A Person
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Card
            </a>
          </li>
        </ul>
      </div>
      <div className="center">
        <h1>View Dates</h1>
      </div>
    </>
  );
};
