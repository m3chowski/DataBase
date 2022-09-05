import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../../store/slices/episodesSlice";
import { EpisodeBlock } from "../episode-block";
import "./episode-list.css";
import { SceletonEpisode } from "../../../utility/sceletons/Sceleton-Episode";

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
        <SceletonEpisode className="episode-list" />
      )}
    </div>
  );
};
