import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CharactersScreen } from "./Screens/CharactersScreen";
import { Login } from "./Login/Login";
import { Battleground } from "./Battleground/Battleground";
import { Text } from "@chakra-ui/react";
import Chrollo from "./CharacterImages/Chrollo.jpg";
import Gon from "./CharacterImages/Gon.jpg";
import Hisoka from "./CharacterImages/Hisoka.jpg";
import Killua from "./CharacterImages/Killua.jpg";

// APA citations for images
// Blanc, A., Hunter x Hunter, 2022, .Jpg, https://www.pinterest.fr/pin/788059634780164009/, Gon.jpg 
// anime-planet, Chrollo LUCILFER, 2022, .Jpg, https://www.anime-planet.com/manga/hunter-x-hunter/characters
// 凱鴻 蕭, 2022, Jpg, https://www.pinterest.ca/pin/642888915561334992/
// Hisoka, 2022, Jpg, https://www.wallpaperflare.com/male-anime-character-wallpaper-hunter-x-hunter-hisoka-wallpaper-298642

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
  const [isFightGoingOn, setFightStart] = useState(false);
  const [battleCharacters, setBattleCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const characters = [
    {
      name: "Gon",
      health: 100,
      faction: "Hunter Assocation",
      weapon: "Rock",
      damagePerHit: 80,
      image: Gon,
      backstory: "Gon is on a mission to find his father Ging, the greatest hunter that ever lived",
    },
    {
      name: "Killua",
      health: 125,
      faction: "Hunter Association",
      weapon: "Godspeed",
      damagePerHit: 35,
      image: Killua,
      backstory: "Heir to the Zoldyck family of assassins, Killua no longer wishes to kill, but to instead help his best friend Gon on his journey",
    },
    {
      name: "Hisoka",
      health: 150,
      faction: "Phantom Troupe",
      weapon: "Bungee Gum",
      damagePerHit: 50,
      image: Hisoka,
      backstory: "#4 of the Phantom troupe, Hisoka seems only interested in fighting those with great potential.",
    },
    {
      name: "Chrollo",
      health: 100,
      faction: "Phantom Troupe",
      weapon: "Bandits Secret",
      damagePerHit: 40,
      image: Chrollo,
      backstory: "Leader and founder of the troupe, he is known to have fought both a member of the Zoldyck family and another and almost won",
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
  console.log("Selected characters", battleCharacters);

  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn && !isFightGoingOn ? (
        <CharactersScreen
          characters={characters}
          setFightStart={setFightStart}
          setBattleCharacters={setBattleCharacters}
        />
      ) : null}
      {isFightGoingOn && !winner ? (
        <Battleground
          winner={winner}
          setWinner={setWinner}
          battleCharacters={battleCharacters}
        />
      ) : null}
      {isFightGoingOn && winner ? (
        <Text fontSize={"5xl"} fontWeight="800">
          Winner of the battle is {winner}
        </Text>
      ) : null}
    </div>
  );
};