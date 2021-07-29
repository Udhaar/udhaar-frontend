import React, { useContext, useEffect } from "react";
import Dummy from "../components/Dummy";
import { TransactionPeopleList } from "../components/Transactions/PeopleList/TransactionPeopleList";
import GlobalContext from "../GlobalContext";
import { useParams } from "react-router-dom";

export default function Transactions() {
  const { external_id } = useParams();
  const globalContext = useContext(GlobalContext);
  useEffect(() => {
    globalContext.dispatch({ type: "set_current_page", value: "transactions" });
    return () => {
      globalContext.dispatch({ type: "set_current_page", value: null });
    };
  }, []);
  return (
    <div className="grid grid-cols-8">
      <div
        className={`border-l-2 border-r-2 border-secondary h-screen ${
          external_id
            ? "hidden md:block col-span-3"
            : "col-span-8 md:col-span-3"
        }`}
      >
        <TransactionPeopleList />
      </div>
      <div
        className={` ${
          external_id
            ? "col-span-8 md:col-span-5"
            : "hidden md:block col-span-5"
        }`}
      >
        something
      </div>
    </div>
  );
}
