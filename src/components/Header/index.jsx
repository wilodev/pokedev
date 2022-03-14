import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-900 relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="poke text-white text-5xl pt-2">PokeDev</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
