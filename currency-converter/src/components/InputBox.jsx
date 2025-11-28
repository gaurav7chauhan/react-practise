const InputBox = ({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  selectCurrency,
  onCurrencyChange,
  currencyDisable = false,
  currencyOptions = [],
  className = "",
}) => {
  return (
    <div
      className={`bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg 
        transition-shadow duration-300 ${className}`}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Amount Section */}
        <div className="flex-1">
          <label className="text-gray-600 font-medium text-xs uppercase tracking-wide mb-2 inline-block">
            {label}
          </label>
          <input
            className="outline-none w-full bg-transparent text-gray-800 text-2xl font-semibold 
            placeholder:text-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed 
            focus:text-blue-600 transition-colors"
            type="number"
            placeholder="0.00"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
            min="0"
            step="any"
          />
        </div>

        {/* Currency Section */}
        <div className="flex flex-col justify-between items-end sm:w-40">
          <label className="text-gray-600 font-medium text-xs uppercase tracking-wide mb-2">
            Currency
          </label>
          <select
            className="w-full rounded-lg px-4 py-2.5 bg-linear-to-r from-gray-50 to-gray-100 
            cursor-pointer outline-none border border-gray-200 hover:border-blue-400 
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
            text-gray-800 font-semibold uppercase text-sm
            disabled:cursor-not-allowed disabled:opacity-60 
            transition-all duration-200 shadow-sm"
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
