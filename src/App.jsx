import { useEffect, useState, useContext } from "react";
import PokeLayout from "@/layout/PokeLayout";
import PokemonList from "@/containers/PokemonList";
import Search from "@/components/Search";
import FavoriteButton from "@/components/FavoriteButton";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import PokedexModal from "@/components/PokedexModal";
import { getAll, getOne } from "@/api/api";
// Se incluye la referencia al estado
import { PokemonContext } from "@/context/PokemonProvider";
// Importamos los types
import {
  ADD_POKEMONS,
  ADD_LOADING,
  ADD_ERROR,
  SET_SEARCH,
  ADD_CURRENT_POKEMON,
  SET_MODAL,
} from "@/actions/types";

const App = () => {
  // Se crea el estado para el pokemon y el dispatch desde el context
  const { state, dispatch } = useContext(PokemonContext);
  // TODO: Código anterior al context
  // // Se crea un estado para guardar a los pokemons iniciales
  // const [pokemons, setPokemons] = useState([]);
  // // Se crea un estado para guardar el pokemon que se está buscando
  // const [query, setQuery] = useState("");
  // // Se realiza la carga de los pokemons
  useEffect(() => {
    if (state.search === "") {
      (async () => {
        dispatch({ type: ADD_LOADING, payload: true });
        const response = await getAll();
        if (response) {
          // Ahora disparamos la acción de añadir al estado los pokemons
          dispatch({ type: ADD_POKEMONS, payload: response });
        } else {
          dispatch({ type: ADD_ERROR, payload: true });
        }
      })();
    }
  }, [state.search]);
  // Función para almacenar el valor de la busqueda en el estado
  const handleSearch = (e) => {
    // setQuery(e.target.value);
    dispatch({ type: SET_SEARCH, payload: e.target.value });
  };
  // Función para detectar el key de la busqueda, si es enter lanza la busqueda
  const handlePress = (e) => {
    // Solo ejecuta la busqueda si se pulsa enter
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  // Función para realizar la busqueda
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Se actualiza el estado con el pokemon encontrado
    dispatch({ type: ADD_LOADING, payload: true });
    // Se realiza la busqueda del pokemon
    const response = await getOne(state.search);
    if (response) {
      // Ahora disparamos la acción de añadir al estado los pokemons
      dispatch({ type: ADD_POKEMONS, payload: [response] });
      // setPokemons([response]);
    } else {
      dispatch({ type: ADD_ERROR, payload: true });
    }
  };
  return (
    <PokeLayout>
      {/* Se incluye el buscador de pokemons */}
      {/* TODO: Mejora al borrar la busqueda mostrar todos los pokemons */}
      <Search
        handlePress={handlePress}
        handleChange={handleSearch}
        handleSubmit={handleSubmit}
        value={state.search}
      />
      {/* Se muestra en caso de error */}
      {state.error && <Error />}
      {state.isLoading && <Loading />}
      {!state.error && !state.isLoading && (
        <>
          <div className="flex w-full justify-center my-6 md:my-4">
            <FavoriteButton count={state.favorites.length} />
          </div>
          {state.pokemons.length > 0 && (
            <PokemonList pokemons={state.pokemons} />
          )}
        </>
      )}
      {state.modal && (
        <PokedexModal
          pokemon={state.currentPokemon}
          handleCloseModal={() => {
            dispatch({ type: ADD_CURRENT_POKEMON, payload: {} });
            dispatch({ type: SET_MODAL, payload: false });
          }}
        />
      )}
    </PokeLayout>
  );
};

export { App };
