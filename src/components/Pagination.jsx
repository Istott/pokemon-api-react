import { useState } from "react";

export default function Pagination({ pokemon, handleUrl }) {
  return (
    <>
      {pokemon.next && (
        <button onClick={() => handleUrl(pokemon.next)}>next Page</button>
      )}
      {pokemon.previous && (
        <button onClick={() => handleUrl(pokemon.previous)}>prev Page</button>
      )}
    </>
  );
}
