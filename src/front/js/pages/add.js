import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/dashboard.css";
import { ListGroup } from "react-bootstrap";

export const Add = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");

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
              <Link class="active" to="/Add" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-users"
                  aria-hidden="true"
                ></i>
                <span>Add A Birthday</span>
              </Link>
            </li>
            <li>
              <Link to="/Dates" style={{ textDecoration: "none" }}>
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
            <li>
              <Link to="/flowers" style={{ textDecoration: "none" }}>
                <i
                  style={{ marginRight: "6px" }}
                  class="fa fa-credit-card"
                  aria-hidden="true"
                ></i>
                <span>Send Flowers</span>
              </Link>
            </li>
          </ListGroup>
        </div>
      </div>
      <div className="center">
        <h1>Dashboard</h1>
        <br></br>
        <h4>Add Birth Dates</h4>
      </div>
      <div className="container">
        <form role="form">
          <div className="row">
            <div className="form-group">
              <input
                style={{ marginLeft: "8rem" }}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="form-group">
              <input
                style={{ marginLeft: "8rem" }}
                type="text"
                name="date"
                value={date}
                onChange={(ev) => setDate(ev.target.value)}
                className="form-control input-normal"
                placeholder="BirthDate"
              />
            </div>
            <button
              style={{
                marginLeft: "16rem",
                marginTop: "4rem",
                height: "2rem",
                width: "6rem",
              }}
              type="submit"
              onClick={() => {
                fetch(process.env.BACKEND_URL + "/api/dash", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, date }),
                });
                className = "btn btn-primary";
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
