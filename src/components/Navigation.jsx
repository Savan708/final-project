import React from "react";
import "../App.css";
import {
  Link
} from "react-router-dom";

export default function Navigation() {
  return (
   
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
 
  );
}
