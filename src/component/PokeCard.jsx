function PokeCard({ pokemonChar }) {
  return (
    <div className="card">
      <img
        src={`${pokemonChar.sprites.front_default}`}
        alt={pokemonChar.name}
      />
      <h2>Name: {pokemonChar.name}</h2>
      <p>Height: {pokemonChar.height}ft</p>
      <p>Weight: {pokemonChar.weight}lbs</p>
    </div>
  );
}

export default PokeCard;
