import React, { useState } from "react";
import PokemonItem from "@/components/PokemonItem";
import PokedexModal from "@/components/PokedexModal";

const PokemonList = ({ pokemons }) => {
  // Estado del modal
  const [modal, setModal] = useState(false);
  // Estado del pokemon seleccionado
  const [currentPokemon, setCurrentPokemon] = useState({});
  // Función para abrir el modal
  const handleOpenModal = (data) => {
    // Se actualiza el estado del pokemon seleccionado
    setCurrentPokemon(data);
    // Se actualiza el estado del modal
    setModal(true);
  };
  // Función para cerrar el modal
  const handleCloseModal = () => {
    // Se actualiza el estado del pokemon seleccionado a ninguno
    setCurrentPokemon({});
    // Se actualiza el estado del modal
    setModal(false);
  };
  return (
    <div className="flex flex-wrap items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonItem
          pokemon={pokemon}
          key={pokemon.id}
          handleOpenModal={handleOpenModal}
        />
      ))}
      {modal && (
        <PokedexModal
          pokemon={currentPokemon}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PokemonList;
