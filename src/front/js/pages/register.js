import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import create from "zustand";
import { persist } from "zustand/middleware";

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
    <div className="container">
      <form>
        <div className="row">
          {register.error && (
            <div className="alert alert-danger">Error at register</div>
          )}
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              type="text"
              placeholder="Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Email Address"
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              type="phone"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Phone Number"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
        </div>
        <br></br>
        <button
          type="button"
          style={{ marginRight: "10px" }}
          className="btn btn-primary"
          onClick={() => register.register(name, email, phone, password)}
        >
          Register
        </button>
      </form>
    </div>
  );
};
