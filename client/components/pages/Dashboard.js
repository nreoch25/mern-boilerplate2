import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { getCurrentUser }
)(Dashboard);
