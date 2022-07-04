import "./App.css";
import React, { useState } from "react";
import { } from "@chakra-ui/react";
import { Login } from "./Login/Login";
import { CharacterList } from "./CharacterList/CharacterList";
import { useFetch } from "../hooks/useFetch";
import { CharacterSelection } from "./CharacterSelection/CharacterSelection";
import Chrollo from "./CharacterImages/Chrollo.jpg";
import Gon from "./CharacterImages/Gon.jpg";
import Hisoka from "./CharacterImages/Hisoka.jpg";
import Killua from "./CharacterImages/Killua.jpg";

//React application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
//return JSX and be exported from a file
//try to abstain from default export

//Let's create a functionality that only when user logged in as admin,
//we can see the character list, otherwise we see the simple message like
//"You are not logged in"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const characters = [
    {
      name: "Gon",
      health: 100,
      faction: "Hunter Assocation",
      weapon: "Rock",
      damagePerHit: 80,
      image: Gon,
    },
    {
      name: "Killua",
      health: 125,
      faction: "Hunter Association",
      weapon: "Godspeed",
      damagePerHit: 35,
      image: Killua,
    },
    {
      name: "Hisoka",
      health: 150,
      faction: "Phantom Troupe",
      weapon: "Bungee Gum",
      damagePerHit: 50,
      image: Hisoka,
    },
    {
      name: "Chrollo",
      health: 75,
      faction: "Phantom Troupe",
      weapon: "Bandits Secret",
      damagePerHit: 80,
      image: Chrollo,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    //We can use React.Fragment instead of div
    //In react we can't render objects or arrays
    return <>Error: {error.message} </>;
  }

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn ? <CharacterList characters={characters} /> : userNotLoggedIn}
      {isLoggedIn ? <CharacterSelection characters={characters} /> : null}
    </div>
  );
};
