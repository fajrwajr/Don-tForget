import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/dashboard.css";
import { ListGroup } from "react-bootstrap";
export const Dates = () => {
  const { store, actions } = useContext(Context);
  const category = useParams().name;

  actions.getDateData();

  return (
    <>
      <div className="sidebar">
        <div class="sidebar-brand">
          <h2 style={{ fontSize: "150%" }}>
            <i
              style={{ marginRight: "1rem" }}
              class="fa fa-birthday-cake"
              aria-hidden="true"
            ></i>
            Never Forget
          </h2>
        </div>
        <div class="sidebar-menu">
          <ListGroup as="ul">
            <li>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-object-group"
                  aria-hidden="true"
                ></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/Add" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-users"
                  aria-hidden="true"
                ></i>
                <span>Add A Birthday</span>
              </Link>
            </li>
            <li>
              <Link
                class="active"
                to="/Dates"
                style={{ textDecoration: "none" }}
              >
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-calendar"
                  aria-hidden="true"
                ></i>
                <span>View Birthday</span>
              </Link>
            </li>
            <li>
              <Link to="/giftacard" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-gift"
                  aria-hidden="true"
                ></i>
                <span>Send A Card</span>
              </Link>
            </li>
            <li>
              <Link to="/sendapayment" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-credit-card"
                  aria-hidden="true"
                ></i>
                <span>Send A Payment</span>
              </Link>
            </li>
          </ListGroup>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div class="header-title">
            <h3>
              <b>Birthday | Dates</b>
            </h3>
          </div>
        </header>
        {store.dateData.length > 0 &&
          store.dateData.map((date, index) => {
            return (
              <main>
                <div className="cards">
                  <div className="card-single">
                    <div>
                      <h2>{date.name}</h2>
                      <span>{date.date}</span>
                    </div>
                    <div>
                      <span className="las la-users"></span>
                    </div>
                  </div>
                  <div className="card-single">
                    <div>
                      <h2>{date.name}</h2>
                      <span>{date.date}</span>
                    </div>
                    <div>
                      <span className="las la-users"></span>
                    </div>
                  </div>
                  <div className="card-single">
                    <div>
                      <h2>{date.name}</h2>
                      <span>{date.date}</span>
                    </div>
                    <div>
                      <span className="las la-users"></span>
                    </div>
                  </div>
                </div>
              </main>
            );
          })}
      </div>
    </>
  );
};
