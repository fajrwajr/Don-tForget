import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "../../styles/login.css";

import hero from "../../img/hero.png";
export const useAuth = create(
  persist(
    (set) => ({
      error: false,
      success: false,
      token: null,

      register: async (name, email, phone, password) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, password }),
          }
        );

        if (response.status === 204) {
          set({ success: true });
        } else {
          set({ error: true });
        }
      },

      login: async (email, password) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
          const payload = await response.json();
          set({ token: payload.token });
        } else {
          set({ error: true });
        }
      },

      logout: () => set({ token: null }),
    }),
    {
      name: "auth-app",
      getStorage: () => sessionStorage,
    }
  )
);

export const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const register = useAuth();

  useEffect(() => {
    if (register.success) {
      history.push("/login");
    }
  }, [register.success]);
  return (
    <div className="login-wrapper">
      <div class="login-img">
        <img src={hero} />
      </div>
      <div class="login-form">
        <h2>Sign Up</h2>
        <form>
          {register.error && (
            <div className="alert alert-danger">Error at register</div>
          )}
          <div className="form-group">
            <label for="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <label for="">Phone Number</label>
            <input
              type="phone"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="form-group">
            <label for="">Confirm Password </label>

            <input
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <Row className="mx-0">
            <Button
              onClick={() => register.register(name, email, phone, password)}
              as={Col}
              variant="primary"
            >
              Register
            </Button>
          </Row>
          <div class="form-group button-holder">
            <Link to="/login">Already have an account? Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
