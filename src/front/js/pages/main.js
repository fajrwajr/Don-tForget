import React from "react";
import clip from "../../img/vc.png";
import wave from "../../img/wave1.png";
import card from "../../img/card.jpg";
import digit from "../../img/digit.png";

import { Link } from "react-router-dom";
import "../../styles/main.css";

export const Main = () => {
  return (
    <>
      <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <h4>Don't Forget!</h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  SIGN UP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  LOG IN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">BEST GIFT SENDER</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                laoreet sem vel tempor venenatis. Praesent tempor ornare porta.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src={clip} className="img-fluid" />
            </div>
          </div>
        </div>
        <img src={wave} className="bottom-img" />
      </section>

      <section id="services">
        <div className="container text-center">
          <h1 className="title">YOU CAN</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img
                style={{ height: "60%", marginLeft: "-150px" }}
                src={card}
                className="service-img"
              />
              <h4 className="heading">Send A Card</h4>
              <p style={{ marginLeft: "-200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                laoreet sem vel tempor venenatis. Praesent tempor ornare porta.
              </p>
            </div>

            <div className="col-md-4 services">
              <img
                style={{ height: "60%", marginLeft: "20px" }}
                src={digit}
                className="service-img"
              />
              <h4 className="headingTwo">Make A Payment</h4>
              <p style={{ marginRight: "-200px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                laoreet sem vel tempor venenatis. Praesent tempor ornare porta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
