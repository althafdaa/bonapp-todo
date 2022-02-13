import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const MatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className='flex gap-2 justify-center text-2xl mb-4'>
      <Link className={`${MatchRoute("/") ? "font-bold" : ""}`} to='/'>
        Home
      </Link>
      <span>|</span>
      <Link className={`${MatchRoute("/add") ? "font-bold" : ""}`} to='/add'>
        Add Task
      </Link>
    </nav>
  );
};

export default Navbar;
