import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn btn-danger" to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-danger" to="/login">
          Login
        </NavLink>
        <NavLink className="btn btn-danger" to="/life-cycle">
          Life Cycle
        </NavLink>
        <NavLink className="btn btn-danger" to="/hook-page">
          Hook Page
        </NavLink>
        <NavLink className="btn btn-danger" to="/shoe-shop">
          Shoe shop
        </NavLink>
      </div>
    );
  }
}
