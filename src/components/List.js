import { Link } from 'react-router-dom';

const List = ({ coinList }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-flex is-justify-content-center">
        <div className="table-container">
          <table className="table is-striped is-narrow">
            <thead className="has-text-centered">
              <tr>
                <th className="is-hidden-touch">Name</th>
                <th>Symbol</th>
                <th>Current Price</th>
                <th className="is-hidden-touch">Marketcap</th>
                <th>Watchlist</th>
              </tr>
            </thead>
            <tbody className="has-text-centered">
              {coinList.map((coin) => {
                const {
                  id,
                  name,
                  symbol,
                  current_price,
                  market_cap,
                  image,
                  on_watch_list,
                } = coin;
                return (
                  <tr key={id}>
                    <td className="is-hidden-touch">{name}</td>
                    <td>
                      <div className="is-flex is-justify-content-space-around">
                        <img
                          src={image}
                          alt={name}
                          height="25px"
                          width="25px"
                        ></img>
                        <span>{symbol.toUpperCase()}</span>
                      </div>
                    </td>
                    <td>{current_price.toLocaleString('en-US')}</td>
                    <td className="is-hidden-touch">
                      {market_cap.toLocaleString('en-US')}
                    </td>
                    <td>
                      {on_watch_list ? (
                        <Link
                          className="has-text-white"
                          to={{
                            pathname: `/watchlist`,
                            state: { id, name, image, symbol },
                          }}
                        >
                          <button className="button is-link is-small">
                            On watchlist
                          </button>
                        </Link>
                      ) : (
                        <Link
                          className="has-text-white"
                          to={{
                            pathname: `/add-alert`,
                            state: { id, name, image, symbol, current_price },
                          }}
                        >
                          <button className="button is-primary is-small">
                            Set alert
                          </button>
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
