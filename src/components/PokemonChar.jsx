import { useState } from "react";

export default function PokemonChar({ pokemonChar, handleClosePokemonChar }) {
  return (
    <div>
      <p>name: {pokemonChar.name}</p>
      <button onClick={handleClosePokemonChar}>back</button>
    </div>
  );
}
