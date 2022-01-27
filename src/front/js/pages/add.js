import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Add = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");

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
            <Link to="/add">
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
        <h4>Add Birth Dates</h4>
      </div>
      <div className="container">
        <form role="form">
          <div className="row">
            <div className="form-group">
              <input
                style={{ marginLeft: "-20rem" }}
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
                style={{ marginLeft: "-20rem" }}
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
                marginLeft: "-32rem",
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
