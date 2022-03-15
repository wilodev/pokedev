import { Api, ApiDetails } from "@/utils/Fetch";
import { getColorsPokemon } from "@/utils/ColorsPokemon";
// Función para traer los los pokemons del api
const getAll = async () => {
  try {
    const pokemonsResponse = await Api("pokemon/?limit=26");
    // Recorremos el array de pokemons para traer la data de cada uno
    const pokemonsData = await Promise.all(
      pokemonsResponse.results.map((pokemon) => ApiDetails(pokemon.url))
    );
    const pokemonsWithColor = await getColorsPokemon(pokemonsData);
    // Se retorna los pokemos con sus colores
    return pokemonsWithColor;
  } catch (error) {
    return false;
  }
};
// Función para traer los datos de un pokemon en concreto
const getOne = async (findPokemons) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_URL_API}pokemon/${findPokemons}`
    );
    const pokemon = await response.json();
    const pokemonWithColor = await getColorsPokemon([pokemon]);
    return pokemonWithColor;
  } catch (error) {
    return false;
  }
};

export { getAll, getOne };
