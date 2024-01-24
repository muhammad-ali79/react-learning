import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // useId generate a unique id so we can  use it to mapping between the inputField and the lable in the forms for accesbilty someting releated when we use the tab while browsing
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>

        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          id={amountInputId}
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          //  here we check that if onAmountChagne avilabe then call the onAmountChange with the value of the input Field
          onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currencyName) => (
            // we should use the key whenever we are using the loop in jsx if we dont then it causes issues in perfomance
            <option key={currencyName} value={currencyName}>
              {currencyName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
