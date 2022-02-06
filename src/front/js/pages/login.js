import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./register";

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
    <div className="container">
      <form>
        {login.error && (
          <div className="alert alert-danger">Error at login</div>
        )}
        <div className="row">
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              placeholder="Email Address"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="form-group">
            <input
              style={{ marginLeft: "-20rem" }}
              placeholder="Password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
        </div>
        <br></br>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: "30px" }}
          onClick={() => login.login(email, password)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
