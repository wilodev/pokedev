import React from "react";
import "./style.css";

const PokedexModal = ({ pokemon, handleCloseModal }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
      <button
        onClick={handleCloseModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Cerrar X
      </button>
      <div className="pokeindex opacity-100">
        <div className="pokeindex-left">
          <div className="pokeindex-left__top">
            <div className="circle-big"></div>
            <div className="circle-small"></div>
          </div>
          <div className="pokeindex-left__screen">
            <div className="dots">
              <span></span>
              <span></span>
            </div>
            <div className="screen">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="h-full ml-4"
              />
            </div>
            <div className="status">
              <div className="status-light"></div>
              <div className="status-sound">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="pokeindex-left__buttons">
            <div className="buttons">
              <div className="buttons-circle"></div>
              <div className="buttons-quad">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="controller">
              <div className="controller-touch px-2 py-2">{pokemon.name}</div>
              <div className="controller-joystick"></div>
            </div>
          </div>
        </div>
        <div className="pokeindex-middle"></div>
        <div className="pokeindex-right">
          <div className="pokeindex-right__screen flex w-full h-full container justify-content">
            <p className="center py-8 px-2">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="pokeindex-right__buttons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pokeindex-right__buttons-quadruple">
            <div className="dot">
              <span></span>
              <span></span>
            </div>
            <div className="button">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="pokeindex-right__buttons-triple">
            <div className="button">
              <span></span>
              <span></span>
            </div>
            <div className="light"></div>
          </div>
          <div className="pokeindex-right__buttons-double">
            <span className="px-4">{pokemon.types[0].type.name}</span>
            <span className="px-6"># {pokemon.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexModal;
