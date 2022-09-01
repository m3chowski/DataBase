import React, { useEffect, useState } from "react";
import { getRandChar } from "../../../utility/api/api";
import "./random-character.css";

export const RandomCharacter = () => {
  const [char, setChar] = useState("");
  useEffect(() => {
    getRandChar(setChar);
    setInterval(getRandChar, 60000);
    return clearInterval();
  }, []);

  const { img, name, nickname, occupation, status } = char;

  return char ? (
    <div className="random-character">
      <div className="random-character-img">
        <img src={img} />
      </div>
      <div className="random-character-info">
        <h2>{name}</h2>
        <p>Nickname: {nickname}</p>
        <div>
          Occupation:{" "}
          {occupation.map((el, index) => (
            <ul key={index}>{el}</ul>
          ))}
        </div>
        <p>Status: {status}</p>
      </div>
    </div>
  ) : (
    <div className="random-character">
      <h4>loading...</h4>
    </div>
  );
};
