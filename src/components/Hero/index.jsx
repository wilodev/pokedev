import React from "react";
import Header from "@/components/Header";

const Hero = () => {
  return (
    <>
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-1pb-8 bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className=" text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline text-4xl ">PokeDev </span>
                  <span className="block text-yellow-600 xl:inline text-3xl md:text-4xl mb-4 md:mb-0">
                    Buscador de pokemons
                  </span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-72 lg:w-full lg:h-full"
            src="./images/pikachu.png"
            alt="Pikachu Imagen"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
