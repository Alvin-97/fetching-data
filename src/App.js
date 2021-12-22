import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinList from "./CoinList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setLoading(true);
        setCoinList(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  const handlerSubmit = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchFilter = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1>Search Coins</h1>
        <form>
          <input
            type="text"
            className="coin-search-input"
            placeholder="Search..."
            onChange={handlerSubmit}
          />
        </form>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {searchFilter.map((coin) => {
        const {
          id,
          name,
          image,
          symbol,
          current_price,
          price_change_percentage_24h,
          market_cap,
          total_volume,
        } = coin;

        return (
          <CoinList
            key={id}
            name={name}
            image={image}
            symbol={symbol}
            price={current_price}
            totalVolume={total_volume}
            priceChange={price_change_percentage_24h}
            marketCap={market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
