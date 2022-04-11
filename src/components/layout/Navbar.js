import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" exact to="/">
          Virtu Admin Najah
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto"></ul>
        </div>
        <button type="button" class="btn btn-danger" Link to="/users/add">
          Add Najah</button>
        <Link to="/users/add">
          <button>
            add Ani
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
