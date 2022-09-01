import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPage } from "../../../store/slices/navigationSlice";

export const Navigate = () => {
  const dispatch = useDispatch();
  const onClickSetPage = (page) => {
    dispatch(setPage(page));
  };
  const nav = [
    {
      nav: "/characters",
      name: "characters",
    },
    { nav: "/episodes", name: "episodes" },
  ];

  return (
    <div className="nav">
      {nav.map(({ name, nav }, index) => (
        <Link to={nav} key={index} onClick={() => onClickSetPage(name)}>
          <Button color="inherit">{name}</Button>
        </Link>
      ))}
    </div>
  );
};
