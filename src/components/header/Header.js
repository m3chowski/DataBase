import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { setSeries } from "../../store/slices/navigationSlice";
import { Navigate } from "../navigation";
import "./header.css";

export const Header = () => {
  const dispatch = useDispatch();
  const series = [
    {
      id: 0,
      category: "breaking bad",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/800px-Breaking_Bad_logo.svg.png",
    },
    {
      id: 1,
      category: "better call saul",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png",
    },
  ];
  const onClickSetSeries = (series) => {
    dispatch(setSeries(series));
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h2>Breaking Bad DB</h2>
        </Link>
      </div>
      <Navigate />
      <div className="header-buttons">
        <ButtonGroup variant="inherit">
          {series.map(({ category, img, id }) => (
            <Link to={`/characters/${category}`} key={id}>
              <Button onClick={() => onClickSetSeries(category)}>
                <img src={img} />
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};
