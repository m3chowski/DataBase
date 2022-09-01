import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../../store/slices/charactersSlice";
import { CharacterBlock } from "../character-block";

import "./character-list.css";

export const CharacterList = () => {
  const dispatch = useDispatch();
  const { characters, loading } = useSelector((state) => state.characters);
  const { isSeries } = useSelector((state) => state.navigation);
  useEffect(() => {
    const fetchChars = `?category=${isSeries}`;
    dispatch(fetchCharacters({ fetchChars }));
  }, [isSeries]);

  return (
    <div className="item-list">
      {!loading ? (
        characters.map((el, index) => <CharacterBlock key={index} {...el} />)
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
