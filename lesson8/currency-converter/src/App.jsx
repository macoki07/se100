import React, { useState } from "react";
import CurrencyContext from "./contexts/CurrencyContext";
import CurrencyDropdown from "./components/CurrencyDropdown";
import CurrencyConverter from "./components/CurrencyConverter"; 
import "./App.css";

function App() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }}>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
      <CurrencyConverter />  
    </CurrencyContext.Provider>
  );
}

export default App;
