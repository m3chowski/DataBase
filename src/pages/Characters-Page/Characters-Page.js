import React from "react";
import { CharacterList } from "../../components/character/character-list";
import { RandomCharacter } from "../../components/character/random-character";

export const CharPage = () => {
  return (
    <div>
      <RandomCharacter />
      <CharacterList />
    </div>
  );
};
