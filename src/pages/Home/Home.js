import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <h2> Welcome to Breaking Bad Database! </h2>
      <Link to={"/characters"}>
        <Button color="inherit">go to database</Button>
      </Link>
    </div>
  );
};
