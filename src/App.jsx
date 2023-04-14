import { useCallback, useState } from "react";

import PokemonList from "./components/PokemonList";
import PokemonChar from "./components/PokemonChar";
import Pagination from "./components/Pagination";
import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const { data, isLoading, error } = useFetch(url);
  const [pokemonChar, setPokemonChar] = useState(null);

  const handleUrl = useCallback(
    (newUrl) => {
      setUrl(newUrl);
    },
    [url]
  );

  const handleLoadPokemon = useCallback((newUrl) => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((data) => setPokemonChar(data));
  }, []);

  const handleClosePokemonChar = useCallback(() => {
    setPokemonChar(null);
  }, []);

  if (isLoading) return <div>Loading Pokemons...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      {pokemonChar != null ? (
        <PokemonChar
          pokemonChar={pokemonChar}
          handleClosePokemonChar={handleClosePokemonChar}
        />
      ) : (
        <>
          <PokemonList pokemon={data} handleLoadPokemon={handleLoadPokemon} />
          <Pagination pokemon={data} handleUrl={handleUrl} />
        </>
      )}
    </div>
  );
}

export default App;
