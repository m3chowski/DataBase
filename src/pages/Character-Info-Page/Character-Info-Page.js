import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./character-info-page.css";

export const CharacterInfoPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then(({ data }) => setCharacter(data[0]));
  }, []);
  const {
    birtday,
    category,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    status,
  } = character;

  return (
    <div className="character-info">
      <div className="character-info-img">
        <img src={img} />
      </div>
      <div className="character-info-text">
        <h3>{name}</h3>
        <p>Nickname: {nickname}</p>
        <p>
          Occupation:
          {occupation?.map((el) => (
            <ul>{el}</ul>
          ))}
        </p>
        <p>Portrayed: {portrayed}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};
