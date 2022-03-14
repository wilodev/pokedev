import React, { useState, useContext } from "react";
import PokemonItem from "@/components/PokemonItem";
import { PokemonContext } from "@/context/PokemonProvider";
import { SET_MODAL, ADD_CURRENT_POKEMON } from "@/actions/types";
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
  const { dispatch } = useContext(PokemonContext);

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
        />
      ))}
    </div>
  );
};

export default PokemonList;
