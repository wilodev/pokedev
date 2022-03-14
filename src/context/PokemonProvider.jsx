import React, { createContext, useReducer } from "react";
import { commonReducer } from "@/reducer";
// Se crea el estado inicial
const initialState = {
  pokemons: [],
  currentPokemon: {},
  isLoading: false,
  error: false,
  favorites: [],
  modal: false,
  search: "",
};
const PokemonContext = createContext(initialState);

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commonReducer, initialState);
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
