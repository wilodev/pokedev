import { useEffect, useState } from "react";
import PokeLayout from "@/layout/PokeLayout";
import PokemonList from "@/containers/PokemonList";
import Search from "@/components/Search";
import { getAll, getOne } from "@/api/api";
const App = () => {
  // Se crea un estado para guardar a los pokemons iniciales
  const [pokemons, setPokemons] = useState([]);
  // Se crea un estado para guardar el pokemon que se está buscando
  const [query, setQuery] = useState("");
  // Se realiza la carga de los pokemons
  useEffect(() => {
    (async () => {
      const response = await getAll();
      setPokemons(response);
    })();
  }, []);
  // Función para almacenar el valor de la busqueda en el estado
  const handleSearch = (e) => {
    setQuery(e.target.value);
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
    // Se realiza la busqueda del pokemon
    const response = await getOne(query);
    // Se actualiza el estado con el pokemon encontrado
    setPokemons([response]);
  };
  return (
    <PokeLayout>
      {/* Se incluye el buscador de pokemons */}
      {/* TODO: Mejora al borrar la busqueda mostrar todos los pokemons */}
      <Search
        handlePress={handlePress}
        handleChange={handleSearch}
        handleSubmit={handleSubmit}
        value={query}
      />
      {/* Muestra Cargando si esta Gargando la lista */}
      {pokemons.length === 0 ? (
        <div className="flex w-full justify-content">
          <p className="text-white text-xl font-bold center">
            Cargando Pokemons...
          </p>
        </div>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </PokeLayout>
  );
};

export { App };
