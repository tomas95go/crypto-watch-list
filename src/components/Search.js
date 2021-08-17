const Search = ({ search, onSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onInput={(event) => onSearch(event)}
    ></input>
  );
};

export default Search;
