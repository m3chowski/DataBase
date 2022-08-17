import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemBlock } from "../item-block/Item-Block";
import "./item-list.css";

export const ItemList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters?limit=15&offset=")
      .then(({ data }) => setItem(data));
  }, []);

  console.log(item);

  return (
    <div className="item-list">
      {item.map((el) => (
        <ItemBlock key={el.char_id} {...el} />
      ))}
    </div>
  );
};
