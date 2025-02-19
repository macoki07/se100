import './App.css';
import { useEffect } from "react";

function App() {
  const handleSelectChange = (event) => {
    alert('New option selected!');
  };

  useEffect(() => {
    console.log("Making API Request");
  }, []);
  
  return (
    <>
      <h1>Currency Converter</h1>
      <select onChange={handleSelectChange}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  );
}

export default App;
