import { useState } from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.results.map((p) => {
        return <div key={crypto.randomUUID()}>{p.name}</div>;
      })}
    </div>
  );
}
