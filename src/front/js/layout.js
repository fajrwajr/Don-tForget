import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Dates } from "./pages/dates";
import { Dashboard } from "./pages/dashboard";
import { Add } from "./pages/add";
import { Gift } from "./pages/giftcard";
import { Register } from "./pages/register";
import { Main } from "./pages/main";
import { Payment } from "./pages/payment";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
            <Route exact path="/dates">
              <Dates />
            </Route>
            <Route exact path="/giftacard">
              <Gift />
            </Route>
            <Route exact path="/sendapayment">
              <Payment />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
