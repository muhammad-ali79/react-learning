import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

export default function App() {
  const [amount, setAmount] = useState(0); //given input amount
  const [fromValue, setFrom] = useState("usd"); // type of currency from which we will convert
  const [ToValue, setTo] = useState("pkr"); // type of currency to which we want to  convert
  const [convertedAmount, setConvertedAmount] = useState(0); // converted value

  // remember this give the curriens object fetch from the api
  const currencyInfo = useCurrencyInfo(fromValue);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(Math.floor(amount * currencyInfo[ToValue]));
  };

  const swap = () => {
    // swap the currencies
    setFrom(ToValue);
    setTo(fromValue);
    // swap the values
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                // useState will change this value whenever it will change
                amount={amount}
                // options is an array so on the bases of this options we will make options
                currencyOptions={options}
                // this will set currency
                onCurrencyChange={(currency) => setFrom(currency)}
                // this will set inputAmount on change
                onAmountChange={(currency) => setAmount(currency)}
                // this will update the selected currency on change
                selectedCurrency={fromValue}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={ToValue}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromValue.toUpperCase()} to {ToValue.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
