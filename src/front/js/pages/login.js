import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./register";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "../../styles/login.css";

import hero from "../../img/hero.png";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const login = useAuth();

  useEffect(() => {
    if (login.token) {
      history.push("/dashboard");
    }
  }, [login.token]);

  return (
    <div class="login-wrapper">
      <div class="login-img">
        <img src={hero} />
      </div>
      <div class="login-form">
        <h2>Log In</h2>
        <form>
          {login.error && (
            <div className="alert alert-danger">Error at login</div>
          )}
          <div class="form-group">
            <label for="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Enter Your Email"
            />
          </div>

          <div class="form-group">
            <label for="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <Row className="mx-0">
            <Button
              onClick={() => login.login(email, password)}
              as={Col}
              variant="primary"
            >
              Login
            </Button>
          </Row>
          <div class="form-group button-holder">
            <Link to="/register">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
