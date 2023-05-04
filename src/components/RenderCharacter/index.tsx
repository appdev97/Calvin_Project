import { Character } from "src/types";

export const RenderCharacter = ({ item }: { item: Character }) => {
  return (
    <>
      <p>Name: {item.name}</p>
      <p>Gender: {item.gender}</p>
      <p>Race: {item.race}</p>
      <p>Spouse: {item.spouse}</p>
    </>
  );
};

export default RenderCharacter;
