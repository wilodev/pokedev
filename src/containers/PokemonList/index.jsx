import React, { useState, useContext } from "react";
import PokemonItem from "@/components/PokemonItem";
import { PokemonContext } from "@/context/PokemonProvider";
import {
  SET_MODAL,
  ADD_CURRENT_POKEMON,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "@/actions/types";
const PokemonList = ({ pokemons }) => {
  // // Estado del modal
  // const [modal, setModal] = useState(false);
  // // Estado del pokemon seleccionado
  // const [currentPokemon, setCurrentPokemon] = useState({});
  // // Función para abrir el modal
  // const handleOpenModal = (data) => {
  //   // Se actualiza el estado del pokemon seleccionado
  //   setCurrentPokemon(data);
  //   // Se actualiza el estado del modal
  //   setModal(true);
  // };
  // // Función para cerrar el modal
  // const handleCloseModal = () => {
  //   // Se actualiza el estado del pokemon seleccionado a ninguno
  //   setCurrentPokemon({});
  //   // Se actualiza el estado del modal
  //   setModal(false);
  // };
  const {
    state: { favorites },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <div className="flex flex-wrap items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonItem
          pokemon={pokemon}
          key={pokemon.id}
          handleOpenModal={() => {
            dispatch({ type: ADD_CURRENT_POKEMON, payload: pokemon });
            dispatch({ type: SET_MODAL, payload: true });
          }}
        >
          {favorites.includes(pokemon.id) ? (
            <button
              onClick={() =>
                dispatch({
                  type: REMOVE_FAVORITE,
                  payload: favorites.filter((id) => {
                    // console.log("este es el id del favorito del array", id);
                    // console.log("este es el que quiero eliminar", pokemon.id);
                    return id !== pokemon.id;
                  }),
                })
              }
              className="bg-transparent rounded-full text-red-700 text-lg font-bold px-3 py-2 leading-none flex items-center"
            >
              ♥
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: ADD_FAVORITE, payload: pokemon.id })
              }
              className="bg-transparent rounded-full text-gray-700 text-normal font-bold px-3 py-2 leading-none flex items-center"
            >
              ♡
            </button>
          )}
        </PokemonItem>
      ))}
    </div>
  );
};

export default PokemonList;
