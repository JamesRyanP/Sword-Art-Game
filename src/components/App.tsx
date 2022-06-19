import "./App.css";
import React, { useState } from "react";
import { Login } from "./Login/Login";
import { CharacterList } from "./CharacterList/CharacterList";
import { useFetch } from "../hooks/useFetch";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { response, error } = useFetch(
    "https://jsonplaceholdser.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    return <>Error: {error.message} </>;
  }

  if (response) {
    console.log(response);
  }

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className="App">
      <Login setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
    </div>
  );
};