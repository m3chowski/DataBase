import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../store/slices/episodesSlice";
import { EpisodeBlock } from "../episode-block";
import "./episode-list.css";

export const EpisodeList = () => {
  const dispatch = useDispatch();
  const { episodes, loading } = useSelector((state) => state.episodes);
  const { isSeries } = useSelector((state) => state.navigation);

  useEffect(() => {
    const episodesCategory = `?series=${isSeries}`;
    dispatch(fetchEpisodes({ episodesCategory }));
  }, [isSeries]);

  return (
    <div className="episode-list">
      <h2>Series: {isSeries}</h2>
      {!loading ? (
        episodes.map((el, index) => <EpisodeBlock key={index} {...el} />)
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
