import React from "react";
import { ItemList } from "../../components/item-list/Item-List";
import { RandomCharacter } from "../../components/random-character";

export const CharPage = () => {
  return (
    <div>
      <RandomCharacter />
      <ItemList />
    </div>
  );
};
