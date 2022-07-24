import { createSlice } from "@reduxjs/toolkit";
import Chrollo from "../components/CharacterImages/Chrollo.jpg";
import Gon from "../components/CharacterImages/Gon.jpg";
import Hisoka from "../components/CharacterImages/Hisoka.jpg";
import Killua from "../components/CharacterImages/Killua.jpg";

// APA citations for images
// Blanc, A., Hunter x Hunter, 2022, .Jpg, https://www.pinterest.fr/pin/788059634780164009/, Gon.jpg 
// anime-planet, Chrollo LUCILFER, 2022, .Jpg, https://www.anime-planet.com/manga/hunter-x-hunter/characters
// 凱鴻 蕭, 2022, Jpg, https://www.pinterest.ca/pin/642888915561334992/
// Hisoka, 2022, Jpg, https://www.wallpaperflare.com/male-anime-character-wallpaper-hunter-x-hunter-hisoka-wallpaper-298642

//Let me descrive redux data flow:
//1. We click on a button that triggers an action
//2. The action is dispatched to the store (we need to provide type and payload)
//3. The store dispatches the action to all the reducers
//4. Correct reducer is called and the state is updated
//5. The component is re-rendered
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characterList: [
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
    ],
    battleCharacters: [],
  },
  reducers: {
    //In canonical redux we can't mutate state directly, we need to return a new state
    //But slices use Immer library to do immutable state mutations behind the scenes,
    //so we can mutate state directly.
    //In this case reducer is not only reducer but also an action creator
    setBattleCharacters: (state, action) => {
      //state.battleCharacters = action.payload; will not work
      return {
        characterList: state.characterList,
        battleCharacters: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBattleCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;