import React from "react";
import {
  ADD_POKEMONS,
  ADD_LOADING,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_CURRENT_POKEMON,
  ADD_ERROR,
  SET_SEARCH,
  SET_MODAL,
} from "@/actions/types";
const commonReducer = (state, action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload,
      };
    case ADD_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: false,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    case ADD_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
      };
    case ADD_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};
export { commonReducer };
