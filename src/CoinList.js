import React from "react";

const CoinList = ({
  image,
  name,
  symbol,
  price,
  totalVolume,
  priceChange,
  marketCap,
}) => {
  const percentage = priceChange?.toFixed(2);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} className="coin-image" alt={name} />
          <h2>{name}</h2>
          <p>{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">${price}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{percentage}%</p>
          ) : (
            <p className="coin-percent green">{percentage}%</p>
          )}
          <p className="coin-volume">${totalVolume.toLocaleString()}</p>
          <p className="coin-market">{marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinList;
