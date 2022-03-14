import React from "react";
const PokemonItem = ({ pokemon, handleOpenModal }) => {
  const divStyle = {
    background: `linear-gradient(75deg, rgba(${pokemon.bgColors[0][0]},${pokemon.bgColors[0][1]},${pokemon.bgColors[0][2]},1) 0%, rgba(${pokemon.bgColors[56][0]},${pokemon.bgColors[56][1]},${pokemon.bgColors[56][2]},1) 100%)`,
  };
  return (
    <div
      style={divStyle}
      className="flex-shrink-0 mx-2 mb-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg"
      onClick={() => handleOpenModal(pokemon)}
    >
      <div className=" relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-40 h-40 bottom-0 left-0 -mb-24 ml-3"></div>
        <picture>
          <source srcSet={pokemon.sprites.front_default} />
          <img
            className="relative w-40"
            src={pokemon.sprites.front_default}
            alt="shopping item"
          />
        </picture>
      </div>
      <div className="bg-slate-50 relative  px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1 font-bold capitalize text-lg pt-4">
          {pokemon.name}
        </span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">
            Exp: {pokemon.base_experience}
          </span>
          <span className="bg-amber-500 rounded-full text-gray-900 text-xs font-bold px-3 py-2 leading-none flex items-center">
            #: {pokemon.id}
          </span>
          {/* <span className="bg-gray-700 rounded-full text-yellow-700 text-xs font-bold px-3 py-2 leading-none flex items-center">
            ♡
          </span>
          <span className="bg-gray-700 rounded-full text-yellow-700 text-xs font-bold px-3 py-2 leading-none flex items-center">
            ♥
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
