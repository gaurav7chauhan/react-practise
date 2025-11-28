import React, { useState } from "react";
import { InputBox, useCurrencyInfo } from "./components";

const App = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Currency Converter
          </h1>
          <p className="text-blue-200">
            Fast and accurate currency exchange rates
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5 bg-white/20 my-6">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                border-2 border-white/30 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 
                text-white p-3 hover:scale-110 hover:shadow-lg transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
                focus:ring-offset-transparent group"
                onClick={swap}
                aria-label="Swap currencies"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
              hover:from-blue-700 hover:to-indigo-700 text-white font-semibold 
              px-6 py-4 rounded-xl shadow-lg hover:shadow-xl 
              transition-all duration-300 transform hover:scale-[1.02] 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
              focus:ring-offset-transparent"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6">
          <p className="text-blue-200 text-sm">
            Exchange rates are updated regularly
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
