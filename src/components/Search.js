const Search = ({ search, onSearch }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-4">
        <div className="field is-horizontal is-narrow">
          <div className="field-label">
            <label className="label">Search:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <input
                  type="text"
                  value={search}
                  onInput={(event) => onSearch(event)}
                  id="search"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
