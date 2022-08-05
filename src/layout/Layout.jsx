import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Update Todo</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
