import { useState } from "react";
import "./App.css";
import useCurrencies from "./hooks/useCurrencies";
import useConversion from "./hooks/useConversion";

function App() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  // const [toAmount, setToAmount] = useState("");

  const {
    currencyList,
    isLoading: isListLoading,
    error: listError
  } = useCurrencies();

  const { 
    result,
    isConverting,
    error: convertError,
    convert,
    clearResult
  } = useConversion();

  const error = listError || convertError;

  // Built once and reused in both select boxes
  const currencyOptions = currencyList.map((currency) => (
    <option key={currency.currencyCode} value={currency.currencyCode}>
      {currency.currencyCode} - {currency.currencyName}
    </option>
  ));

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-outfit">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-5">
        <h1 className="text-2xl font-bold text-center text-slate-800">
          Currency converter
        </h1>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200">
          <label
            htmlFor="fromCurrency"
            className="block text-xs font-semibold tracking-wide text-slate-500 mb-2"
          >
            From
          </label>
          <div className="flex items-center gap-3">
            <input
              id="fromAmount"
              type="number"
              min="0"
              placeholder="0.00"
              aria-label="Amount to convert"
              value={fromAmount}
              onChange={(e) => {
                setFromAmount(e.target.value);
                clearResult();
              }}
              className="w-1/2 bg-transparent text-right text-2xl font-semibold text-slate-800 placeholder-slate-300 focus:outline-none"
            />
            <select
              id="fromCurrency"
              value={fromCurrency}
              disabled={isListLoading}
              onChange={(e) => {
                setFromCurrency(e.target.value);
                clearResult;
              }}
              className="w-1/2 rounded-lg bg-white border border-slate-200 px-2 py-2 text-sm text-slate-700 focus:outline-none"
            >
              <option value="">
                {isListLoading ? "Loading currencies ..." : "Select currency"}
              </option>
              {currencyOptions}
            </select>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label
            htmlFor="toCurrency"
            className="block text-xs font-semibold tracking-wide text-slate-500 mb-2"
          >
            To
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              readOnly
              aria-label="Converted amount"
              placeholder="0.00"
              value={result}
              className="w-1/2 bg-transparent text-right text-2xl font-semibold text-indigo-600 placeholder-slate-300 focus:outline-none"
            />
            <select
              id="toCurrency"
              value={toCurrency}
              disabled={isListLoading}
              onChange={(e) => {
                setToCurrency(e.target.value);
                clearResult;
              }}
              className="w-1/2 rounded-lg bg-white border border-slate-200 px-2 py-2 text-sm text-slate-700 focus:outline-none"
            >
              <option value="">
                {isListLoading ? "Loading currencies ..." : "Select currency"}
              </option>
              {currencyOptions}
            </select>
          </div>
        </div>

        <button
          onClick={() => convert(fromCurrency, toCurrency, fromAmount)}
          disabled={isListLoading || isConverting}
          className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {isConverting ? "Converting... " : "Convert now"}
        </button>

        {error && (
          <p role="alert" className="text-sm text-red-600 text-center">
            {error}
          </p>
        )}

      </div>
    </div>
  );
}

export default App;