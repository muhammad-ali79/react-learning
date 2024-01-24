import { useState, useEffect } from "react";

// here we are making our own custom hook
const useCurrencyInfo = (currency) => {
  // here we use the useState because we want to use this data in the dom
  const [data, setData] = useState({});

  // here we use the useEffect hook because we want to run our callback whenever the currency dependecy changes
  useEffect(() => {
    // useEffect hook should not reuturn a promise so we make an iffe and immediately call it
    (async function () {
      const request = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      const data = await request.json();
      setData(data[currency]);
    })();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
