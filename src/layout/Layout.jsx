import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const env = process.env;
  return (
    <div>
      <h1>Layout's Todo</h1>
      <p>{JSON.stringify(env)}</p>
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
