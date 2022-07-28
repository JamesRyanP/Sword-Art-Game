import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList/CharacterList";
import { CharacterSelection } from "../components/CharacterSelection/CharacterSelection";
import { useSelector } from "react-redux";
//Screens are composed of components and they group what we want to see on the screen at one time
export const CharactersScreen = ({

}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn);
  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList />
      <CharacterSelection
      />
    </>
  );
};