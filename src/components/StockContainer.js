import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer() {
  // State to hold the stock data
  const [stocks, setStocks] = useState([]);

  // Fetch the stock data from the JSON server
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(response => response.json())
      .then(data => setStocks(data));
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      <div>
        {
          // Map over the stock data to render each stock
          stocks.map(stock => (
            <Stock key={stock.id} stock={stock} />
          ))
        }
      </div>
    </div>
  );
}

export default StockContainer;
