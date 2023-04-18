import { useState } from "react";
function Header({ pokemonList, handleFetchCharacter }) {
  const [searchResults, setSearchResults] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rval = pokemonList.filter((poke) => {
      return poke.name.includes(input);
    });
    setSearchResults(rval);
    setSearchHistory([input, ...searchHistory]);
  };

  const handleOnClickCharacter = (charURL) => {
    setSearchResults(null);
    setInput("");
    setShowList(false);
    handleFetchCharacter(charURL);
  };

  return (
    <div className="header">
      <div className="container">
        <form onSubmit={handleSubmit} className="searchbar">
          <input
            type="text"
            placeholder="search pokemon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowList(true)}
          />
          <button type="submit">submit</button>
        </form>
        {showList && (
          <div className="dropdown">
            {searchResults !== null
              ? searchResults.map((result) => {
                  return (
                    <div key={crypto.randomUUID()}>
                      <button
                        onClick={(e) => handleOnClickCharacter(result.url)}
                      >
                        {result.name}
                      </button>
                    </div>
                  );
                })
              : [...new Set(searchHistory)].map((searchedInput) => {
                  return (
                    <div key={crypto.randomUUID()}>
                      <button onClick={() => setInput(searchedInput)}>
                        {searchedInput}
                      </button>
                    </div>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
