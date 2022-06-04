import React from 'react'
import './CharacterListItem.css'

export const CharacterListItem = ({character, isChampion}) => {
    const {name, health, faction, weapon, damagePerHit} = character;
    return (
        <li key={name}>
            <span className="character-name">{isChampion ? 'Champion ${name}' : character.name}</span>
            <span>{health}</span>
            <span>{faction}</span>
            <span>{weapon}</span>
            <span>{damagePerHit}</span>
        </li>
    );
}