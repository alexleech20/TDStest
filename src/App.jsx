import { useEffect, useState } from "react";
import "./App.css";
import { getExchangeList, getConversionRate } from "./services/getServices";

function App() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [currencyList, setCurrencyList] = useState([]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const result = await getExchangeList();
        setCurrencyList(result);
      } catch (error) {
        console.error("Error whilst getting currencies: ", error);
        setError("Unable to load currencies.");
      }
    };
    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency || fromAmount <= 0) {
      setError("Please select both currencies and enter a valid figure.");
      return;
    }

    try {
      setError("");
      setIsLoading(true);

      const result = await getConversionRate(
        fromCurrency,
        toCurrency,
        fromAmount,
      );

      setToAmount(result);
    } catch (error) {
      console.error("Conversion failure: ", error);
      setError("Conversion failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Built once and reused in both select boxes
  const currencyOptions = currencyList.map((currency) => (
    <option key={currency.currencyCode} value={currency.currencyCode}>
      {currency.currencyCode} - {currency.currencyName}
    </option>
  ));

  return (
    <>
      <div className="w-l py-7 font-outfit rounded shadow-xl">
        <div className="grid grid-cols-6 gap-y-5">
          <div className="col-span-4 col-start-2 pb-5 justify-self-center">
            <h1>Currency converter app</h1>
          </div>

          <div className="col-start-2 col-end-3 justify-self-end">
            <label className="text-l font-bold" htmlFor="fromCurrency">
              From :
            </label>
          </div>

          <div className="col-start-3 col-end-6">
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value);
                setToAmount("");
              }}
              className="text-l"
            >
              <option value="">Select currency</option>
              {currencyOptions}
            </select>
          </div>

          <div className="col-start-2 col-end-3 justify-self-end">
            <label className="text-l font-bold" htmlFor="toCurrency">
              To :
            </label>
          </div>

          <div className="col-start-3 col-end-6">
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => {
                setToCurrency(e.target.value);
                setToAmount("");
              }}
              className="text-l"
            >
              <option value="">Select currency</option>
              {currencyOptions}
            </select>
          </div>

          <div className="col-start-3 col-end-4 justify-self-start">
            <label className="text-l font-bold" htmlFor="fromAmount">
              Enter amount :
            </label>
          </div>

          <div className="col-start-4 col-end-7 justify-self-start pl-4">
            <input
              id="fromAmount"
              type="number"
              min="0"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={(e) => {
                setFromAmount(e.target.value);
                setToAmount("");
              }}
              className="text-l border-2"
            />
          </div>

          <div className="col-span-4 col-start-2">
            <button
              className="text-xl font-bold border-2 p-1 rounded-lg"
              onClick={handleConvert}
              disabled={isLoading}
            >
              {isLoading ? "Converting... " : "Convert now"}
            </button>
          </div>

          <div className="col-span-4 col-start-2">
            <p className="text-red-500">{error}</p>

            {toAmount !== "" && (
              <p className="text-2xl font-bold">
                {fromAmount} {fromCurrency} = {toAmount} {toCurrency}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
