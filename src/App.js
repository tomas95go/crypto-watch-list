import { useState } from 'react';
import List from './components/List';
import Search from './components/Search';

const App = () => {
  let list = [
    {
      id: 1,
      desc: `BTC`,
      marketcap: `100000`,
    },
    {
      id: 2,
      desc: `ETH`,
      marketcap: `2000`,
    },
    {
      id: 3,
      desc: `BNB`,
      marketcap: `100`,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('BNB');

  const handleSearch = (event) => {
    return setSearchTerm(event.target.value);
  };

  const searchedCoins = list.filter((coin) =>
    coin.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1> Hi! </h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchedCoins} />
    </div>
  );
};

export default App;
