const Watchlist = ({ coinsInWatchList, removeFromWatchlist }) => {
  const handleCoinRemoval = (event) => {
    return removeFromWatchlist(event.target.value);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Alert trigger</th>
            <th>Notify by</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coinsInWatchList.length ? (
            coinsInWatchList.map((coin) => {
              return (
                <tr key={coin.id}>
                  <td>{coin.name}</td>
                  <td>{coin.current_price}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.market_cap}</td>
                  {coin.on_watch_list ? (
                    <td>
                      <button
                        value={coin.id}
                        onClick={(event) => {
                          handleCoinRemoval(event);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  ) : (
                    false
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <td>You don't have anything on your watchlist yet!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
