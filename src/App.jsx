import { useCallback, useEffect, useState } from "react";

import Header from "./component/Header";
import PokeCard from "./component/PokeCard";
import "./App.css";
// search bar retrieves a poke
// keep track of results - search history
// pokemon card
function App() {
  const [data, setData] = useState();
  const [pokemonChar, setPokemonChar] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const handleFetchCharacter = useCallback(
    (charURL) => {
      fetch(charURL)
        .then((res) => res.json())
        .then((data) => setPokemonChar(data));
    },
    [pokemonChar]
  );

  return (
    <div className="App">
      <Header pokemonList={data} handleFetchCharacter={handleFetchCharacter} />
      {!!pokemonChar && <PokeCard pokemonChar={pokemonChar} />}
    </div>
  );
}

export default App;
