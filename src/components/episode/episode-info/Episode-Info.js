import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getInfo } from "../../../utility/api/api";
import "./episode-info.css";

export const EpisodeInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState("");
  const getData = `episodes/${id}`;
  useEffect(() => {
    getInfo({ setItem, getData, setLoading });
  }, [id]);
  const { characters, episode, season, series, title, air_date } = item;

  return !loading ? (
    <div className="episode-info">
      <div>
        <h1>{series}</h1>
        <p>Episode name: {title}</p>
        <p>Season: {season}</p>
        <p>Episode: {episode}</p>
        <p>Air date: {air_date}</p>
      </div>
      <div className="episode-info-char">
        <h3>Characters</h3>
        {characters.map((name) => (
          <Link to={`/character/${name}`}>
            <Button color="inherit">{name}</Button>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="episode-info">loading...</div>
  );
};
