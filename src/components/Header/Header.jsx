import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex flex-col ">
      <div className="bg-purple-400 py-3 md:py-0 ">
        <span
          onClick={() => setOpen(!open)}
          className="md:hidden flex justify-center"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </span>
      </div>
      <div
        className={`absolute md:static ${
          open ? "top-9 w-full duration-700" : "-top-60 duration-700"
        } `}
      >
        <nav className="px-14 py-5 flex flex-col md:flex-row bg-purple-400 md:flex text-white md:gap-9">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/post">New Post</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
