import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);
  const category = useParams().name;

  actions.getDateData();
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">Birthday</div>
        <ul className="sidebar-navigation">
          <li className="header">Navigation</li>
          <li>
            <Link to="/dashboard">
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
            <Link to="/giftacard">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Card
            </Link>
          </li>
          <li>
            <Link to="/sendapayment">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Payment
            </Link>
          </li>
        </ul>
      </div>
      <div className="center">
        <h1>Dashboard</h1>
        <br></br>
        <h4>You've Haven't Added Any People</h4>
      </div>
    </>
  );
};
