import React, { Component } from "react";
import { Route } from "react-router-dom";
// Components
import Index from "./components/Index";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Index} />
      </div>
    );
  }
}

export default App;
