import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from '../components/Search';
import List from '../components/List';
import Watchlist from '../components/Watchlist';
import AddAlertForm from '../components/AddAlertForm';

const NavBar = ({
  searchTerm,
  handleSearch,
  isOpen,
  searchedCoins,
  coinList,
  handleModalStatus,
  handleWatchList,
  coinsInWatchList,
}) => {
  return (
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
  );
};

export default NavBar;
