import React, { useContext, useEffect, useState } from "react";
import CurrencyContext from "../contexts/CurrencyContext";
import "./CurrencyStyling.css";

const CurrencyDropdown = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = useContext(CurrencyContext);
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/11607a7079929c8eca83b77a/codes"
        );
        const data = await response.json();
        if (data.result === "success") {
          setCurrencyList(data.supported_codes);
        } else {
          console.error("Error fetching currencies:", data);
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="dropdown-container">
      {/* FROM CURRENCY */}
      <span className="currency-text">I want to convert </span>
      <select className="currency-dropdown" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencyList.map(([code, name]) => (
          <option key={code} value={code}>
            {name} ({code})
          </option>
        ))}
      </select>

      <span className="currency-text"> to </span>

      {/* TO CURRENCY */}
      <select className="currency-dropdown" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencyList.map(([code, name]) => (
          <option key={code} value={code}>
            {name} ({code})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
