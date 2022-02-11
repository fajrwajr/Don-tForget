import React from "react";
import { Link } from "react-router-dom";
import ballon from "../../img/cartoon.jpg";
import gift from "../../img/gift.jpg";
import minion from "../../img/minion.jpg";
import "../../styles/dashboard.css";
import { ListGroup } from "react-bootstrap";

export const Gift = () => {
  const [email, setEmail] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [radioTwo, setRadioTwo] = React.useState("");
  const [radioThree, setRadioThree] = React.useState("");
  let result = `<div style='width: 85vw; margin-left: 20px; margin: 0 auto;'><div style='display: flex; justify-content: space-around;'><div style='flex: 2 1 0; height: 350px; margin: 20px auto; border: 1px solid #ccc;   background: -webkit-repeating-linear-gradient(
    -45deg,
    #71b7e6,
    #69a6ce,
    #b98acc,
    #ee8176,
    #b98acc,
    #69a6ce,
    #9b59b6
  ); box-sizing: border-box;'><h1 style='color: pink'>Happy Birthday</h1><h1 style='text-align: center'></h1><h2 id='message'>May your birthday be sprinkled with fun and laughter</h2><p id='from'></p> </div></div></div>`;
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
              <Link
                class="active"
                to="/giftacard"
                style={{ textDecoration: "none" }}
              >
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

      <div className="center">
        <h2>Choose A Gift Card To Send</h2>
        <div className="container">
          <form role="form">
            <div className="row">
              <div className="form-grou">
                <input
                  style={{ marginLeft: "-1rem" }}
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
                  style={{ marginLeft: "-10rem", marginBottom: "-84rem" }}
                  id="one"
                  type="radio"
                  name="radio"
                  value={result}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-23rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2 style={{ color: "pink", textAlign: "center" }}>
                        Happy Birthday
                      </h2>
                      <h1 id="name"></h1>
                      <p
                        id="message"
                        style={{ color: "white", fontSize: "22px" }}
                      >
                        May your birthday be sprinkled with fun and laughter
                      </p>
                    </div>
                  </div>
                </div>
                <br></br>
                <input
                  style={{ marginLeft: "-10rem", marginBottom: "-84rem" }}
                  type="radio"
                  name="choice2"
                  value={radioTwo}
                  onChange={(e) => setRadioTwo(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-23rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2 style={{ color: "yellow", textAlign: "center" }}>
                        Happy Birthday
                      </h2>
                      <h1 id="name"></h1>
                      <p
                        id="message"
                        style={{ color: "white", fontSize: "22px" }}
                      >
                        Today is your birthday, yet I have the best gift in the
                        world
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <input
                  style={{ marginLeft: "-10rem", marginBottom: "-84rem" }}
                  type="radio"
                  name="choice3"
                  value={radioThree}
                  onChange={(e) => setRadioThree(e.target.value)}
                />
                <div
                  class="main"
                  style={{ marginLeft: "-23rem", marginTop: "-3rem" }}
                >
                  <div class="container">
                    <div class="card">
                      <h2 style={{ color: "red", textAlign: "center" }}>
                        Happy Birthday
                      </h2>
                      <h1 id="name"></h1>
                      <p
                        id="message"
                        style={{ color: "white", fontSize: "22px" }}
                      >
                        Let me be the first to remind you that you're getting
                        older
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <button
              style={{ width: "5rem", marginLeft: "-12rem" }}
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
