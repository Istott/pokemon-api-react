import { useState } from "react";

export default function PokemonList({ pokemon, handleLoadPokemon }) {
  return (
    <div>
      {pokemon.results.map((p) => {
        return (
          <div key={crypto.randomUUID()}>
            <button onClick={() => handleLoadPokemon(p.url)}>{p.name}</button>
          </div>
        );
      })}
    </div>
  );
}
