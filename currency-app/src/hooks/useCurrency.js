import { useEffect, useState } from "react";

function useCurrency(currency = "usd") {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;
    
    // Updated, working API endpoint
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Currency API Error:", err));
  }, [currency]);

  // Extract currency keys for options
  const currencyOptions = Object.keys(data || {});

  // Async helper function to convert amounts
  const convertCurrency = async (from, to) => {
    try {
      const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`);
      const json = await res.json();
      return json[from]?.[to] || 0;
    } catch (err) {
      console.error(err);
      return 0;
    }
  };

  return { currencyOptions, convertCurrency, data };
}

export default useCurrency;