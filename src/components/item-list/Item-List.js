import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/slices/charactersSlice";
import { ItemBlock } from "../item-block/Item-Block";

import "./item-list.css";

export const ItemList = () => {
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
        characters.map((el, index) => <ItemBlock key={index} {...el} />)
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
