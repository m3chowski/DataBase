import React from "react";
import "./item-block.css";

export const ItemBlock = ({ name, img, occupation }) => {
  return (
    <div className="item-block">
      <img src={img} />
      <div className="item-block-name">
        <h4> {name}</h4>
        <p>{occupation[0]}</p>
      </div>
    </div>
  );
};
