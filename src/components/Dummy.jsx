import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Dummy() {
  const globalContext = useContext(GlobalContext);
  return (
    <div>
      <button
        className="bg-red-300 px-3 py-5 rounded-md"
        onClick={() => {
          globalContext.dispatch({ type: "open_navbar" });
        }}
      >
        Openmn
      </button>
    </div>
  );
}
