import React, { useEffect, useState } from "react";
import axios from "axios";
import "./random-character.css";

export const RandomCharacter = () => {
  const [char, setChar] = useState("");
  const getRandChar = () => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      .then((res) => setChar(res.data[0]));
  };
  useEffect(() => {
    getRandChar();
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
