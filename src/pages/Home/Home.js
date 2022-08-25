import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Link to={"/characters"}>
      <div>Go to characters</div>
    </Link>
  );
};
