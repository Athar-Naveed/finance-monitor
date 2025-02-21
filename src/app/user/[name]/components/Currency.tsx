"use client";

import {useState} from "react";
import {ChevronDown, Search} from "lucide-react";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

const currencies: Currency[] = [
  {code: "USD", name: "US Dollar", symbol: "$"},
  {code: "PKR", name: "Pakistani Rupee", symbol: "Pkr"},
];

const CurrencySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleApply = () => {
    console.log("Selected currencies:");
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center w-full max-w-xs bg-transparent m-5">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-transparent text-gray-200 placeholder:text-gray-200 border rounded-lg shadow-sm flex items-center justify-between"
      >
        <span className="text-gray-700">Select Currency</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-neutral-900 border rounded-lg shadow-lg z-10">
          {/* Search Input */}
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search currencies..."
                className="w-full pl-9 pr-4 py-2 text-sm border rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Currency List */}
          <div className="max-h-60 overflow-auto">
            {filteredCurrencies.map((currency) => (
              <label
                key={currency.code}
                className="flex items-center px-4 py-2 text-gray-200 hover:text-gray-500 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    className="h-4 w-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                  />
                </div>
                <div className="ml-3 flex items-center">
                  <span className="text-sm font-medium  mr-2">{currency.code}</span>
                  <span className="text-sm">
                    ({currency.symbol}) {currency.name}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {/* Apply Button */}
          <div className="p-2 border-t">
            <button
              onClick={handleApply}
              className="w-full px-4 py-2 rounded-md bg-violet-500 hover:bg-violet-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
