import { useEffect, useState } from 'react';
import List from './components/List';

const App = () => {
  const [coinList, setCoinList] = useState('');

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((data) => setCoinList(data));
  }, []);

  return (
    <div>
      <h1> Coins lis</h1>
      {coinList.length ? <List coinList={coinList} /> : <p>Cargando...</p>}
    </div>
  );
};

export default App;
