const Watchlist = () => {
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
          <tr>
            <td>Bitcoin</td>
            <td>38850</td>
            <td>+10%</td>
            <td>email</td>
            <td>Remove</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
