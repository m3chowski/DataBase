import React from "react";
import { Link } from "react-router-dom";
import "./character-block.css";

export const CharacterBlock = ({ char_id, name, img, nickname }) => {
  return (
    <Link className="item-block" key={char_id} to={`/character/${name}`}>
      <img src={img} />
      <div className="item-block-name">
        <h4> {name}</h4>
        <p>{nickname}</p>
      </div>
    </Link>
  );
};
