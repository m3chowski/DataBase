import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/slices/charactersSlice";
import { ItemBlock } from "../item-block/Item-Block";

import "./item-list.css";

export const ItemList = () => {
  const { characters, loading, isSeries } = useSelector(
    (state) => state.characters
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchChars = `?category=${isSeries}`;
    dispatch(fetchCharacters({ fetchChars }));
  }, [isSeries]);

  return (
    <div className="item-list">
      {!loading ? (
        characters.map((el) => (
          <Link to="/">
            <ItemBlock key={el.char_id} {...el} />
          </Link>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
