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
  handleNavbarStatus,
  isActive,
}) => {
  return (
    <Router>
      <nav className="navbar has-shadow is-primary">
        <div className="navbar-brand">
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleNavbarStatus}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <Link className="navbar-item text-white" to="/">
              Coin list
            </Link>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://www.coingecko.com/es/api/documentation"
            >
              <span className="pr-3">Powered by:</span>
              <img
                src="https://i.ibb.co/x7X2DMv/Coin-Gecko-Logo.png"
                alt="Coin-Gecko-Logo"
              />
            </a>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <div className="box">
            <div className="block">
              <h1 className="is-title has-text-centered"> Crypto watchlist</h1>
              <h2 className="is-subtitle has-text-centered">
                Add coins from the top 20 coins of{' '}
                <a href="https://www.coingecko.com/en">Coingecko</a> to your
                watchlist!
              </h2>
            </div>
            <Search search={searchTerm} onSearch={handleSearch} />
            {coinList.length ? (
              <List coinList={searchedCoins} />
            ) : (
              <div className="has-text-centered">
                <p className="is-size-3">Loading...</p>{' '}
              </div>
            )}
          </div>
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
