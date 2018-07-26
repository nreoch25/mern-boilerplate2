import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/layout/Navbar";
import Index from "./components/pages/Index";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Index} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
