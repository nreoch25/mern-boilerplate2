import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";

class Dashboard extends Component {
  render() {
    console.log("AUTH", this.props.auth);
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={this.props.auth.user.avatar}
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>{this.props.auth.user.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
