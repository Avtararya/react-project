import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center">
      <router-link to="/" className="text-2xl text-white">
        My App
      </router-link>
      <div>
        <Link to="/" className="text-white hover:bg-gray-700 px-3 rounded py-1">
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:bg-gray-700 px-3 rounded py-1"
        >
          Register
        </Link>
      </div>
      {/* <div className="flex justify-end items-end space-x-14 p-8 ">
        <Link className="mx-auto ml-10 text-2xl font-bold" to="/">
          TEST
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">User</Link>
        {/* <Link to="/profile">DashBoard</Link> */}
      {/* </div> */}
    </div>
  );
};

export default Nav;
