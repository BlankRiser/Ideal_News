import React, { useState } from "react";
import countries from "../../data/api/countries";
import Link from "next/link";
const Navbar = (props) => {
  const [search, setSearch] = useState("Bengaluru");
  const [country, setCountry] = useState("India");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(e.target.value);
    }
  };
  // sending data to parent component
  props.func(country);

  return (
    <>
      <section
        className="border-l-2 border-r-2 
       flex flex-row justify-between px-6 py-4 border-b-2 border-gray-600"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <div>
          <Link href="/">
            <span className="cursor-pointer md:text-xl font-serif font-bold text-primary">
              News
            </span>
          </Link>
        </div>
        <div>
          {/* <input
            type="search"
            name=""
            id=""
            className="border-b text-gray-800 p-2 w-full outline-none ring-gray-400 "
            placeholder="Search a topic"
            onKeyPress={handleKeyPress}
          /> */}
        </div>
      </section>
      <section className="border-l-2 border-r-2 overflow divide-x-[2px] divide-gray-500 bg-scroll text-sm py-1 px-2 flex flex-row justify-between border-b-2 border-gray-600">
        {countries.map((countryName, index) => {
          return (
            <button
              key={index}
              onClick={() => setCountry(countryName.name)}
              className={`text-center text-black px-2 flex-1 cursor-pointer ${
                country === countryName.name
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              } `}
            >
              {countryName.name}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Navbar;
