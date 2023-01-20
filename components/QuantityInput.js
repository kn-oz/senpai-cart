import React from "react";

export default function QuantityInput() {
  return (
    <div className="quantity-input">
      <div>
        <label for="Quantity" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <div className="flex items-center border border-gray-200 divide-x divide-gray-200 rounded">
          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            &minus;
          </button>

          <span>
            <input
              type="number"
              id="Quantity"
              value="1"
              className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
          </span>

          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            &plus;
          </button>
        </div>
      </div>
    </div>
  );
}
