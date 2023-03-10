import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useStore } from "../lib/StoreContext";

export default function Header() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const {cart} = useStore();
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    setQuantity(cart.reduce(
      (totalAccumulator, currentItem) =>
        totalAccumulator + currentItem.quantity,
      0
    ))
  }, [cart]);
  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6">
          <div className="pl-2 flex gap-2 items-center justify-between">
            <div className="flex items-center">
              <button
                type="button"
                className="lg:hidden"
                onClick={() => setMobileMenuToggle((mobMenu) => !mobMenu)}
              >
                {!mobileMenuToggle && (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
                {mobileMenuToggle && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.1}
                      d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                    />
                  </svg>
                )}
              </button>
              <a href="#" className="">
                <span className="sr-only">Logo</span>
              </a>
            </div>

            <Link href="/" className="sm:flex">
              <span className="sr-only">Logo</span>
              <Image
                src="/images/senpaiKart.png"
                className="pr-1 object-cover min-w-6"
                alt="senpai-kart"
                height={100}
                width={100}
              />
            </Link>
          </div>

          <div className="flex items-center sm:gap-4">
            <form className="mb-0 lg:flex">
              <div className="relative">
                <input
                  className="h-10 rounded-lg border-gray-200 pl-4 pr-10 text-sm placeholder-gray-300 focus:z-10 focus:border-red-700 focus:outline-none"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                >
                  <span className="sr-only">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <Link
                href="/tees"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 focus:text-red-700"
              >
                Tees
              </Link>

              <Link
                href="/hoodies"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Hoodies
              </Link>

              <Link
                href="/cosplay"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Cosplay
              </Link>

              <Link
                href="/figurines"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Figurines
              </Link>
            </nav>

            <div className="sm:ml-8 flex items-center">
              <div className="flex relative items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <Link
                    href="/cart"
                    className="block border-b-4 border-transparent p-2  sm:p-6 hover:border-red-700"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span className="sr-only">Cart</span>
                    <span className="whitespace-nowrap block absolute top-2 rounded-full bg-teal-100 px-1.5 py-0.5 text-sm text-purple-700">
                      {quantity}
                    </span>
                  </Link>
                </span>

                <span>
                  <Link
                    href="/account"
                    className="block border-b-4 border-transparent p-2 sm:p-6 hover:border-red-700"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {mobileMenuToggle && <MobileMenu setMenuToggle={setMobileMenuToggle} />}
    </>
  );
}
