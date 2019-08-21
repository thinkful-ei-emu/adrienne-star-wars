import React from 'react';
import './charactersList.css';

export default function CharacterList(props) {
  return (
    <ul>
      {props.characters.map((character, index) => (
        <li key={index}>{character.name}</li>
      ))}
    </ul>
  )
}