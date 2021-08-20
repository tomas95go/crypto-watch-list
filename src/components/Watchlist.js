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
          {coinsInWatchList.length ? (
            <div className="table-container">
              <table className="table is-striped is-narrow">
                <thead className="has-text-centered">
                  <tr>
                    <th>Coin</th>
                    <th className="is-hidden-touch">Price</th>
                    <th>Alert trigger</th>
                    <th>Notify on</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="has-text-centered">
                  {coinsInWatchList.map((coin) => {
                    return (
                      <tr key={coin.id}>
                        <td>{coin.name}</td>
                        <td className="is-hidden-touch">{coin.price}</td>
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
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p>You don't have anything on your watchlist yet!</p>
          )}
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
