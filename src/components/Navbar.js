import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

class Navbar extends React.Component {
  render() {
    return (
    <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/employees">Employees</Link>
    </div>
    )
  }
}

export default Navbar;
