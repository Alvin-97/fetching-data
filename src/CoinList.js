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
    <>
      <div className="coin-container">
        <div className="pic-name">
          <img className="coin-image" src={image} alt={name} />

          <h2 className="name">{name}</h2>
        </div>
        <p className="symbol">{symbol}</p>

        <p className="coin-price">${price}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{percentage}%</p>
        ) : (
          <p className="coin-percent green">{percentage}%</p>
        )}
        <p className="coin-volume">${totalVolume.toLocaleString()}</p>
        <p className="coin-market">{marketCap.toLocaleString()}</p>
      </div>
    </>
  );
};

export default CoinList;
