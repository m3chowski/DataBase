import React from "react";
import { setSeries } from "../../store/slices/navigationSlice";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const SeriesSelector = () => {
  const dispatch = useDispatch();
  const series = [
    {
      id: 0,
      category: "Breaking Bad",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/800px-Breaking_Bad_logo.svg.png",
    },
    {
      id: 1,
      category: "Better Call Saul",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png",
    },
  ];
  const onClickSetSeries = (series) => {
    dispatch(setSeries(series));
  };

  return (
    <div className="header-buttons">
      <ButtonGroup variant="inerhit">
        {series.map(({ category, img, id }) => (
          <Button onClick={() => onClickSetSeries(category)} key={id}>
            <img src={img} />
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
