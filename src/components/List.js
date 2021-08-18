import { Link } from 'react-router-dom';
const List = ({ coinList }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Marketcap</th>
            <th>Watchlist</th>
          </tr>
        </thead>
        <tbody>
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
                <td>{name}</td>
                <td>
                  <img
                    src={image}
                    alt={symbol}
                    height="25px"
                    width="25px"
                  ></img>
                  {symbol}
                </td>
                <td>{current_price}</td>
                <td>{market_cap}</td>
                <td>
                  {on_watch_list ? (
                    <button>On watchlist</button>
                  ) : (
                    <button>
                      <Link to="/add-alert">Set alert</Link>
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
