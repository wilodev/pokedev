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
  // // TODO: Código anterior al context
  // // Se crea un estado para guardar a los pokemons iniciales
  // const [pokemons, setPokemons] = useState([]);
  // // Se crea un estado para guardar el pokemon que se está buscando
  // const [query, setQuery] = useState("");
  // Se realiza la carga de los pokemons
  const {
    state: {
      search,
      isLoading,
      error,
      modal,
      currentPokemon,
      pokemons,
      favorites,
    },
    dispatch,
  } = useContext(PokemonContext);
  //const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (search === "") {
      (async () => {
        dispatch({ type: ADD_LOADING });
        const response = await getAll();
        if (response) {
          // Ahora disparamos la acción de añadir al estado los pokemons
          dispatch({ type: ADD_POKEMONS, payload: response });
        } else {
          dispatch({ type: ADD_ERROR });
        }
      })();
    }
  }, [search]);
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
    dispatch({ type: ADD_LOADING });
    // Se realiza la busqueda del pokemon
    const response = await getOne(search);
    if (response) {
      // Ahora disparamos la acción de añadir al estado los pokemons
      dispatch({ type: ADD_POKEMONS, payload: response });
      // setPokemons([response]);
    } else {
      dispatch({ type: ADD_ERROR });
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
        value={search}
      />
      {/* <div className="flex flex-col content-center justify-center">
        <div className="flex">
          <button
            className="bg-slate-700 text-white px-4 py-2 mr-2"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
          <button
            className="bg-slate-700 text-white px-4 py-2 ml-2"
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1);
              } else {
                setCounter(0);
              }
            }}
          >
            -
          </button>
        </div>
        <p className="text-white">{counter}</p>
      </div> */}
      {/* Se muestra en caso de error */}
      {error && <Error />}
      {isLoading && <Loading />}
      {!error && !isLoading && (
        <>
          <div className="flex w-full justify-center my-6 md:my-4">
            <FavoriteButton count={favorites.length} />
          </div>
          {pokemons.length > 0 && <PokemonList pokemons={pokemons} />}
        </>
      )}
      {modal && (
        <PokedexModal
          pokemon={currentPokemon}
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
