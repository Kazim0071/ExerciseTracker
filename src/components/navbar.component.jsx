import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ExcerTracker
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/creat">
                Create Exercise Log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
