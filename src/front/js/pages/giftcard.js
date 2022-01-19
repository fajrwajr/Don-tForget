import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Gift = () => {
  const [email, setEmail] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [radioTwo, setRadioTwo] = React.useState("");
  const [radioThree, setRadioThree] = React.useState("");
  let result =
    "<div style='width: 85vw; margin-left: 20px; margin: 0 auto;'><div style='display: flex; justify-content: space-around;'><div style='flex: 2 1 0; height: 350px; margin: 20px auto; border: 1px solid #ccc; box-sizing: border-box;'><h2>May your birthday be sprinkled with fun and laughter</h2><h1 style='text-align: center'></h1><p id='message'>Your card goes here...</p><p id='from'></p> </div></div></div>";
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
            <Link to="/giftacard">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Card
            </Link>
          </li>
        </ul>
      </div>
      <div className="center">
        <h2>Choose A Gift Card To Send</h2>
        <div className="container">
          <form role="form">
            <div className="row">
              <div className="form-group">
                <input
                  style={{ marginLeft: "-25rem" }}
                  type="text"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Receiver's Email"
                />
                <br></br>
                <br></br>
                <br></br>
                <input
                  style={{ marginLeft: "-23rem", marginBottom: "-84rem" }}
                  type="radio"
                  name="radio"
                  value={result}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-36rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2>Happy Birthday</h2>
                      <h1 id="name"></h1>
                      <p id="message">Your card goes here...</p>
                      <p id="from"></p>
                    </div>
                  </div>
                </div>
                <br></br>
                <input
                  style={{ marginLeft: "-23rem", marginBottom: "-84rem" }}
                  type="radio"
                  name="choice2"
                  value={radioTwo}
                  onChange={(e) => setRadioTwo(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-36rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2>Happy Birthday</h2>
                      <h1 id="name"></h1>
                      <p id="message">Your card goes here...</p>
                      <p id="from"></p>
                    </div>
                  </div>
                </div>{" "}
                <input
                  style={{ marginLeft: "-23rem", marginBottom: "-84rem" }}
                  type="radio"
                  name="choice3"
                  value={radioThree}
                  onChange={(e) => setRadioThree(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-36rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2>Happy Birthday</h2>
                      <h1 id="name"></h1>
                      <p id="message">Your card goes here...</p>
                      <p id="from"></p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <button
              style={{ width: "5rem", marginLeft: "-12rem" }}
              type="submit"
              onClick={() => {
                fetch(process.env.BACKEND_URL + "/api/send", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email, radio }),
                });
                className = "primary";
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
