import React, { useEffect, useState } from "react";
import axios from "axios";
import "./random-character.css";

export const RandomCharacter = () => {
  const [char, setChar] = useState("");
  const getRandChar = () => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      .then(({ data }) => setChar(data));
  };
  useEffect(() => {
    getRandChar();
    setInterval(getRandChar, 20000);
    return clearInterval();
  }, []);

  console.log(char);
  return char ? (
    <div className="random-character">
      <img src={char.img} />
    </div>
  ) : (
    <div className="random-character">
      <h4>loading...</h4>
    </div>
  );
};
