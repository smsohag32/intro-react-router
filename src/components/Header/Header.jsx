import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="px-14 py-5 bg-purple-400 text-white flex gap-9">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/post">New Post</Link>
    </nav>
  );
};

export default Header;
