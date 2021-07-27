import React, { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div
      // className={`${
      //   navOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      // } w-screen md:w-full md:col-span-2 h-screen bg-black bg-opacity-50 absolute left-0 top-0 flex flex-shrink-0 flex-grow-0 justify-between md:static col-span-2 overflow-hidden transition -translate-x-full duration-250 ease-in-out`}
      className={`${navOpen ? "bg-opacity-50" : "bg-opacity-0"}
      w-screen md:w-full md:col-span-2 h-screen bg-black absolute left-0 top-0 md:static transition duration-200 ease-in-out`}
    >
      <div
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-shrink-0 flex-grow-0 justify-between w-full transition duration-200 ease-in-out transform`}
      >
        <div className={` w-64 md:w-full bg-primary h-screen `}>
          <h1 className="">Udhaar</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-10 mr-2 mt-2 md:hidden"
          viewBox="0 0 20 20"
          fill="white"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
