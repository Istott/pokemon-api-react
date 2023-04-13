import { useCallback, useState } from "react";

import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const { data, isLoading, error } = useFetch(url);
  const handleUrl = useCallback(
    (newUrl) => {
      setUrl(newUrl);
    },
    [url]
  );

  if (isLoading) return <div>Loading Pokemons...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <PokemonList pokemon={data} />
      <Pagination pokemon={data} handleUrl={handleUrl} />
    </div>
  );
}

export default App;
