import ConfirmActionModal from './ConfirmActionModal';
const Watchlist = ({
  coinsInWatchList,
  removeFromWatchlist,
  handleModalStatus,
  isOpen,
  location: {
    state: { name, id, image, symbol, current_price },
  },
}) => {
  return (
    <div className="section">
      <div className="columns is-centered">
        <div className="column is-flex is-justify-content-center">
          <table className="table is-striped">
            <thead className="has-text-centered">
              <tr>
                <th>Coin</th>
                <th>Price</th>
                <th>Alert trigger</th>
                <th>Notify on</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="has-text-centered">
              {coinsInWatchList.length ? (
                coinsInWatchList.map((coin) => {
                  return (
                    <tr key={coin.id}>
                      <td>{coin.name}</td>
                      <td>{coin.price}</td>
                      {Number(coin.alert_type) === 2 ? (
                        <td>-{coin.alert_trigger}%</td>
                      ) : (
                        <td>{coin.alert_trigger}%</td>
                      )}
                      <td>{coin.alert_description}</td>
                      <td>
                        <button
                          className="button is-primary is-small"
                          onClick={handleModalStatus}
                        >
                          Remove
                        </button>
                      </td>
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
          {isOpen ? (
            <ConfirmActionModal
              isOpen={isOpen}
              name={name}
              id={id}
              image={image}
              symbol={symbol}
              alertType=""
              alertTrigger=""
              alertTypeDesc=""
              onWatchList={removeFromWatchlist}
              action="remove"
              price={current_price}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
