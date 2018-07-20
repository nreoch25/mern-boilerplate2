import React, { Component } from "react";
import { Route } from "react-router-dom";
// Components
import Index from "./components/pages/Index";
import Register from "./components/auth/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Index} />
        <div className="container">
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    );
  }
}

export default App;
