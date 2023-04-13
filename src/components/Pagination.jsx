import { useState } from "react";

export default function Pagination({ pokemon, handleUrl }) {
  return (
    <>
      {pokemon.next && (
        <button
          style={{ backgroundColor: "lightBlue", margin: "5px" }}
          onClick={() => handleUrl(pokemon.next)}
        >
          next Page
        </button>
      )}
      {pokemon.previous && (
        <button
          style={{ backgroundColor: "lightBlue", margin: "5px" }}
          onClick={() => handleUrl(pokemon.previous)}
        >
          prev Page
        </button>
      )}
    </>
  );
}
