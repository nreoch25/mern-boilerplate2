import React, { Component } from "react";
import { Route } from "react-router-dom";
// Components
import Index from "./components/pages/Index";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Index} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default App;
