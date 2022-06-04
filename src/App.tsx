import React from 'react';
import logo from './logo.svg';
import { Login } from "./components/Login/Login";
import { CharacterList } from './components/CharacterList/CharacterList';
import './App.css';

export const App = () => {
  const header = (
    <div className="App">
      <h1 className="jsx-style">
        Hello, Sword Art gamers
      </h1>

    </div>
  );

  const swordArtHeader = React.createElement(
    "h1",
    { className: "sword-art-header" },
    "Hello, Sword Art Gamers"
  );
  return (
    <div className="App">
      <Login />
      <CharacterList />
    </div>
  );
}

export default App;
