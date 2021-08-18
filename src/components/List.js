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
          </tr>
        </thead>
        <tbody>
          {coinList.map((coin) => {
            const { id, name, symbol, current_price, market_cap, image } = coin;
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
