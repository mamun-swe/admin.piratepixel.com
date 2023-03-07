import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Master from "./pages/master/Index";
import FourOFour from "./pages/404/Index";

import ScrollToTop from "./components/scrollTop/Index";
import RoleBaseRoute from "./components/privateRoute/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/reset" component={Reset} />
            <RoleBaseRoute path="/dashboard" component={Master} />

            <Route path="*" component={FourOFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
