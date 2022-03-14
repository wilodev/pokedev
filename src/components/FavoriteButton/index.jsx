import React from "react";

const FavoriteButton = ({ count }) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
      Favoritos: {count}
    </button>
  );
};

export default FavoriteButton;
