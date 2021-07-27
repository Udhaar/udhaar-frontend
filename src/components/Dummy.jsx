import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

export default function Dummy() {
  const globalContext = useContext(GlobalContext);
  return (
    <div>
      <button
        className="bg-red-300"
        onClick={() => {
          globalContext.dispatch("open_navbar");
        }}
      >
        Openmn
      </button>
    </div>
  );
}
