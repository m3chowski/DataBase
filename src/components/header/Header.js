import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "../navigation";
import { SeriesSelector } from "../series-selector";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h2>Breaking Bad DB</h2>
        </Link>
      </div>
      <Navigate />
      <SeriesSelector />
    </div>
  );
};
