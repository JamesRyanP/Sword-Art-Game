import React from "react";
import { CharacterListItem } from "../CharacterListItem/CharacterListItem";

const characters = [
    {
        name: "Goku",
        health: 150,
        faction: "Random",
        weapon: "Fists",
        damagePerHit: 6,
    },
    {
        name: "Buu",
        health: 80,
        faction: "Evil",
        weapon: "Mace",
        damagePerHit: 15,
    },
    {
        name: "Trunks",
        health: 60,
        faction: "Good",
        weapon: "Sword",
        damagePerHit: 20,
    }
];

export const CharacterList = () => {
    return (
        <ul>
            {characters.map((character) => (
            <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
            ))}
        </ul>
    );
};