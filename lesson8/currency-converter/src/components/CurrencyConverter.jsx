import React, { useState, useEffect, useContext } from "react";
import CurrencyContext from "../contexts/CurrencyContext";
import "./CurrencyStyling.css";

const CurrencyConverter = () => {
  const { fromCurrency, toCurrency } = useContext(CurrencyContext);
  const [amount, setAmount] = useState(""); // User input
  const [output, setOutput] = useState(0); // Converted currency value
  const [conversionRate, setConversionRate] = useState(1); // API exchange rate

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/11607a7079929c8eca83b77a/pair/${fromCurrency}/${toCurrency}`
        );
        const data = await response.json();
        if (data.result === "success") {
          setConversionRate(data.conversion_rate);
        } else {
          console.error("Error fetching conversion rate:", data);
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount !== "") {
      setOutput((parseFloat(amount) * conversionRate).toFixed(2));
    } else {
      setOutput(0);
    }
  }, [amount, conversionRate]);

  return (
    <div className="currency-container">
      {/* FROM CURRENCY - Input + Dropdown */}
      <div className="currency-group">
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          className="converter-input"
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className="currency-symbol">{fromCurrency}</span>
      </div>

      <span className="currency-text">=</span>

      {/* TO CURRENCY - Input (read-only) + Dropdown */}
      <div className="currency-group">
        <input
          type="text"
          value={output}
          className="converter-input"
          readOnly
        />
        <span className="currency-symbol">{toCurrency}</span>
      </div>
    </div>
  );
};

export default CurrencyConverter;
