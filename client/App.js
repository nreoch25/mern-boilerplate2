import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./components/pages/Index";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/auth/Register";
import Profiles from "./components/pages/Profiles";
import Profile from "./components/pages/Profile";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import CreateProfile from "./components/profile/CreateProfile";
import EditProfile from "./components/profile/EditProfile";
import Posts from "./components/pages/Posts";
import Post from "./components/pages/Post";
import NotFound from "./components/pages/NotFound";

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
          <Switch>
            <PrivateRoute exact path="/profiles" component={Profiles} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/profile/:handle" component={Profile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/feed" component={Posts} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/post/:id" component={Post} />
          </Switch>
          <Route exact path="/not-found" component={NotFound} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
