import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-row h-14 mt-8 ml-8">
      <p className="flex-none w-96 text-white justify-start">
        PokeDev{" "}
        <a
          href="https://github.com/wilodev"
          target="blank"
          className="font-black"
        >
          @Wilodev
        </a>
      </p>
      <p className="grow flex justify-end text-white mr-6 ">
        <a href="https://github.com/wilodev/pokedev" target="_blank">
          Github Repo <b>Pokedev</b>
        </a>
      </p>
    </div>
  );
};

export default Footer;
