import React, { useContext, useEffect } from "react";
import Dummy from "../components/Dummy";
import GlobalContext from "../GlobalContext";

export default function Transactions() {
  const globalContext = useContext(GlobalContext);
  useEffect(() => {
    globalContext.dispatch({ type: "set_current_page", value: "transactions" });
    return () => {
      globalContext.dispatch({ type: "set_current_page", value: null });
    };
  }, []);
  return (
    <div>
      Traaa <Dummy />
    </div>
  );
}
