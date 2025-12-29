import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8 cursor-pointer">
      <NavLink to= "/" className="text-2xl font-medium cursor-pointer text-md">VISHNNN</NavLink>
      <div className="flex items-center justify-center gap-5 bg-">
        <NavLink to= "/">Home</NavLink>
        <NavLink to= "/about">About</NavLink>
        <NavLink to= "/products">Products</NavLink>
      </div>
      <NavLink to= "/profile" className="bg-zinc-700 rounded-md px-2 py-2">Profile</NavLink>
    </div>
  );
};

export default Navbar;
