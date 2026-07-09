import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-slate-900 text-white"
      : "text-slate-300 hover:bg-slate-700 hover:text-white"
  }`;

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-slate-800 shadow-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-white">
            ExcerTracker
          </Link>

          <div className="flex items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>
              Exercises
            </NavLink>
            <NavLink to="/creat" className={navLinkClass}>
              Create Exercise Log
            </NavLink>
            <NavLink to="/user" className={navLinkClass}>
              Create User
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
