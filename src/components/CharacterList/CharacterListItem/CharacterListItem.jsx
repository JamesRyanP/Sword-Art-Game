import { ColorModeProvider, Td, Tr, Tooltip } from "@chakra-ui/react";
import React from "react";
import "./CharacterListItem.css";

//React component can receive one argument: props
//You can pass data to the react component by using props.
//Props is an object that groups data that is passed to a component.
export const CharacterListItem = ({ character, isChampion }) => {
  const { name, health, faction, weapon, damagePerHit, image, backstory } = character;
  return (
    //When you use repeating elements in JSX, you should use key attribute
    //It's required for React to be able to update the element
    <Tr key={name}>
      <Td><Tooltip label={backstory} ><img src={image} className="characterImage" ></img></Tooltip></Td>
      <Td className="character-name">
        {isChampion ? <div className="champion">Godmode {name}</div> : name}
      </Td>
      <Td>{faction}</Td>
      <Td>{weapon}</Td>
      <Td isNumeric>{health}</Td>
      <Td isNumeric>{damagePerHit}</Td>


    </Tr>
  );
};
