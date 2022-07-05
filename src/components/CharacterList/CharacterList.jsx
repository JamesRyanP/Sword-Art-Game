import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { Table, TableCaption, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import "./CharacterList.css";

// Props are passed to the component via attributes
export const CharacterList = ({ characters }) => {
  //returns true if Math.random() is more than 0.5
  return (
    <Table>
      <TableCaption>Character table</TableCaption>
      <Thead>
        <Tr>
          <Th>BACKSTORY</Th>
          <Th>NAME</Th>
          <Th>FACTION</Th>
          <Th>WEAPON</Th>
          <Th isNumeric>HEALTH</Th>
          <Th isNumeric>DAMAGE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {characters.map((character) => (
          <CharacterListItem
            isChampion={Math.random() > 0.5}
            character={character}
          />
        ))}
      </Tbody>
    </Table>
  );
};
