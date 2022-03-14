import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col content-center justify-center">
      <p className="text-white text-xl font-bold self-center m-0">
        Error al Buscar el pokemon
      </p>
      <p className="text-white text-lg mt-4 m-0">
        Recuerda puedes buscar por nombre ejemplo: Pikachu - o puedes buscar por
        id: 25
      </p>
    </div>
  );
};

export default Error;
