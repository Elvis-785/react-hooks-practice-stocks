import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  // Sample state for portfolio stocks
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  // Function to handle adding a stock to the portfolio
  const addStockToPortfolio = (stock) => {
    setPortfolioStocks([...portfolioStocks, stock]);
  };

  // Function to handle removing a stock from the portfolio
  const removeStockFromPortfolio = (stockId) => {
    setPortfolioStocks(portfolioStocks.filter(stock => stock.id !== stockId));
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      <div>
        {
          portfolioStocks.map(stock => (
            <Stock key={stock.id} stock={stock} handleClick={removeStockFromPortfolio} />
          ))
        }
      </div>
    </div>
  );
}

export default PortfolioContainer;
