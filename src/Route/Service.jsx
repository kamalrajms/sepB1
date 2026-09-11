import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service component</h2>
      <div className="sub-header">
        <Link to={"webapp"}>web application</Link>
        <Link to={""}>App application</Link>
      </div>
      <Outlet />
    </div>
  );
}
