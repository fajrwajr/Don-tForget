import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

export const Dates = () => {
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
        <h1>View Dates</h1>
        {store.dateData.length > 0 &&
          store.dateData.map((date, index) => {
            return (
              <div className="container">
                <div className="card-media">
                  <p className="name">{date.name}</p>
                  <p className="date">{date.date}</p>
                  <br></br>
                  <Link
                    to="/giftacard"
                    className="link"
                    style={{ marginLeft: "22px" }}
                  >
                    Send A Card
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
