import React from "react";

const SearchForm = ({ query, setQuery }) => {
  // input
  const input = (e) => {
    console.log(e.target.value);
    // setQuery text to update value
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={input}
        value={query}
        placeholder="Search Star Wars Api for a character: "
      />
    </form>
  );
};

export default SearchForm;
