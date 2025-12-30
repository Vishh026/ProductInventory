import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-8 cursor-pointer">
      <NavLink to= "/" className="text-2xl font-medium cursor-pointer text-md">VISHNNN</NavLink>
      <div className="flex items-center justify-center gap-5 bg-">
        <NavLink to= "/">Products</NavLink>
        <NavLink to= "/about">About</NavLink>
      </div>
      <NavLink to= "/create" className="bg-zinc-700 rounded-md px-2 py-2">create Product</NavLink>
    </div>
  );
};

export default Navbar;
