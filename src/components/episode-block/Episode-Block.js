import React from "react";
import { Link } from "react-router-dom";
import "./episode-block.css";

export const EpisodeBlock = ({ episode_id, episode, title, season }) => {
  return (
    <Link to={`/episodes/${episode_id}`}>
      <div className="episode-block">
        <div className="episode-block-info">
          <span>Season: {season}</span>
          <span> Episode: {episode}</span>
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  );
};
