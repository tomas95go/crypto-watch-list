import { useEffect, useState } from 'react';
import NavBar from './pages/NavBar';

const App = () => {
  const [coinList, setCoinList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setModalStatus] = useState(false);
  const [isActive, setNavbarStatus] = useState(false);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then((data) => {
        const modifiedList = data.map((coin) => {
          coin.on_watch_list = false;
          return coin;
        });
        setCoinList(modifiedList);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedCoins = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWatchList = (coin, code) => {
    let coinInWatchList;
    if (code === `cancel`) {
      setModalStatus(!isOpen);
      return false;
    }
    if (code === `remove`) {
      coinInWatchList = removeFromWatchlist(coin.id);
      const coin_index = watchList.findIndex((wcoin) => wcoin.id === coin.id);
      watchList.splice(coin_index, 1);
      setWatchList(watchList);
    }
    if (code === `add`) {
      coinInWatchList = addToWatchList(coin.id);
      watchList.push(coin);
      setWatchList(watchList);
    }
    setModalStatus(!isOpen);
    return setCoinList(coinInWatchList);
  };

  const addToWatchList = (id) => {
    const coinInWatchList = coinList.filter((coin) => {
      if (coin.id === id) {
        coin.on_watch_list = true;
      }
      return coin;
    });
    return coinInWatchList;
  };

  const handleModalStatus = () => {
    setModalStatus(!isOpen);
  };

  const removeFromWatchlist = (id) => {
    const coinInWatchList = coinList.filter((coin) => {
      if (coin.id === id) {
        coin.on_watch_list = false;
      }
      return coin;
    });
    return coinInWatchList;
  };

  /*const coinsInWatchList = watchList.filter((coin) => {
    return coin.on_watch_list ? coin : false;
  });*/

  const handleNavbarStatus = () => {
    setNavbarStatus(!isActive);
  };

  return (
    <div className="container-fluid">
      <NavBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        isOpen={isOpen}
        coinList={coinList}
        searchedCoins={searchedCoins}
        handleModalStatus={handleModalStatus}
        handleWatchList={handleWatchList}
        coinsInWatchList={watchList}
        handleNavbarStatus={handleNavbarStatus}
        isActive={isActive}
      />
    </div>
  );
};

export default App;
