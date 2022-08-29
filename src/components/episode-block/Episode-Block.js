import React from "react";
import "./episode-block.css";

export const EpisodeBlock = ({ episode, title, season }) => {
  return (
    <div className="episode-block">
      <div className="episode-block-info">
        <span>Season: {season}</span>
        <span> Episode: {episode}</span>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
