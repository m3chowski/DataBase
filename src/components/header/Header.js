import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { setSeries } from "../../store/slices/charactersSlice";
import { useDispatch } from "react-redux";

import "./header.css";

export const Header = () => {
  const series = [
    {
      name: "breaking bad",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/800px-Breaking_Bad_logo.svg.png",
    },
    {
      name: "better call saul",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png",
    },
  ];
  const dispatch = useDispatch();
  const onClickSetSeries = (series) => {
    dispatch(setSeries(series));
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h2>Breaking Bad DB</h2>
      </div>
      <div className="header-buttons">
        <ButtonGroup variant="inherit">
          {series.map(({ name, img }) => (
            <Button onClick={() => onClickSetSeries(name)}>
              <img src={img} />
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};
