import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from './components/List';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import AddAlertForm from './components/AddAlertForm';

const App = () => {
  const [coinList, setCoinList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setModalStatus] = useState(false);

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

  const handleWatchList = (id, code) => {
    let coinInWatchList;
    if (code === `remove`) {
      coinInWatchList = removeFromWatchlist(id);
    }
    if (code === `add`) {
      coinInWatchList = addToWatchList(id);
    }
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

  const coinsInWatchList = coinList.filter((coin) => {
    return coin.on_watch_list ? coin : false;
  });

  return (
    <div>
      <h1> Coins list {searchTerm}</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Coins</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Search search={searchTerm} onSearch={handleSearch} />
            {coinList.length ? (
              <List coinList={searchedCoins} />
            ) : (
              <p>Cargando...</p>
            )}
          </Route>
          <Route
            exact
            path="/watchlist"
            render={(props) => (
              <Watchlist
                coinsInWatchList={coinsInWatchList}
                removeFromWatchlist={handleWatchList}
                handleModalStatus={handleModalStatus}
                isOpen={isOpen}
                location={props.location}
              />
            )}
          />
          <Route
            exact
            path="/add-alert"
            render={(props) => (
              <AddAlertForm
                onWatchList={handleWatchList}
                location={props.location}
                handleModalStatus={handleModalStatus}
                isOpen={isOpen}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
