import React from "react";

const Search = ({ handlePress, handleChange, handleSubmit, value }) => {
  return (
    <div className="flex w-full justify-content center mt-4 mb-8 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
      <form className="flex flex-wrap justify-between md:flex-row w-full">
        <input
          type="search"
          name="query"
          placeholder="Buscar Pokemon"
          required="required"
          onKeyPress={handlePress}
          onChange={handleChange}
          value={value}
          className="flex-1 h-10 px-4 m-1 text-gray-100 placeholder-gray-100 bg-transparent border-2 border-gray-600 rounded appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-200 transform rounded-md lg:w-12 lg:h-12 lg:p-0 bg-yellow-600 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              fill="#fedd00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
