import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuoteChar } from "../../components/quote-char/Quote-Char";
import { getInfo } from "../../utility/api/api";
import "./character-info-page.css";

export const CharacterInfoPage = () => {
  const { name } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = `characters?name=${name}`;
  useEffect(() => {
    getInfo({ setItem, setLoading, getData });
  }, []);
  const { img, nickname, occupation, portrayed, status } = item;

  return !loading ? (
    <div className="character-info">
      <div className="character-info-img">
        <img src={img} />
      </div>
      <div className="character-info-text">
        <h3>{name}</h3>
        <p>Nickname: {nickname}</p>
        <p>
          Occupation:
          {occupation.map((el, index) => (
            <li key={index}> {el}</li>
          ))}
        </p>
        <p>Portrayed: {portrayed}</p>
        <p>Status: {status}</p>
      </div>
      <div>
        <QuoteChar />
        {status !== "Alive" && <span>lol</span>}
      </div>
    </div>
  ) : (
    <div className="character-info">loading....</div>
  );
};
