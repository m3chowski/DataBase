import React from "react";
import { CharacterList } from "../../components/character-list";
import { RandomCharacter } from "../../components/random-character";

export const CharPage = () => {
  return (
    <div>
      <RandomCharacter />
      <CharacterList />
    </div>
  );
};
