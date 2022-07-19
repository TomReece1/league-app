import { useState } from "react";

function Search({ setSearchTerm }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(term);
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search Summoner: </label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </form>
  );
}

export default Search;
