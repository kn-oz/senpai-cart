import React from 'react'
import Image from 'next/image'

export default function Cart() {
  return (
    <div className="cart">
      

<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="relative">
              <span
                className="absolute inset-0 translate-x-1 translate-y-1 bg-teal-500"
              ></span>

              <Image
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="relative object-cover w-16 h-16 border-2 border-black"
              />
            </div>

            <div className="ml-4">
              <h3 className="font-mono text-sm">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px font-mono text-[10px]">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-center justify-end flex-1 gap-2">
              <form>
                <label for="Line1Qty" className="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  value="1"
                  id="Line1Qty"
                  className="h-8 w-12 border-2 border-black bg-white p-0 text-center font-mono text-xs text-black [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </form>

              <button className="transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>

        <div className="flex justify-end pt-8 mt-8 border-t-2 border-black">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 font-mono text-xs">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-teal-100 px-2.5 py-0.5 text-teal-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="font-mono text-xs whitespace-nowrap">
                  2 Discounts Applied
                </p>
              </span>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="block px-5 py-3 font-mono text-sm text-white uppercase bg-teal-500 border-black hover:bg-teal-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
