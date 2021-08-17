const Search = (props) => {
  return <input type="text" onInput={(event) => props.onSearch(event)}></input>;
};

export default Search;
