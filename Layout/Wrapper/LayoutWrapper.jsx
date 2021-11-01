import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React, { createContext, useRef, useState } from "react";

export const CountryContext = createContext("");

const LayoutWrapper = ({ children }) => {
  const [contextData, setContextData] = useState("");

  const pull_data = (country) => {
    // console.log(country);
    setContextData(country); // Logs data from child component: Navbar
  };
  // console.log(`from Layout : ${contextData}`);

  return (
    <CountryContext.Provider value={contextData}>
      <div className="relative max-w-6xl mx-auto sm:px-6 xl:px-0">
        <div className="flex flex-col justify-between h-screen">
          <Navbar func={pull_data} />

          <main className="">{children}</main>
          <Footer />
        </div>
      </div>
    </CountryContext.Provider>
  );
};

export default LayoutWrapper;
