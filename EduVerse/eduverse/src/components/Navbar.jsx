import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>EduVerse</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/instructors">Instructors</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faqs">FAQs</Link>
    </div>
  </nav>
);

export default Navbar;
