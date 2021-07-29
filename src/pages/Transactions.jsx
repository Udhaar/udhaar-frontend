import React, { useCallback, useContext, useEffect, useState } from "react";
import Dummy from "../components/Dummy";
import { TransactionPeopleList } from "../components/Transactions/PeopleList/TransactionPeopleList";
import GlobalContext from "../GlobalContext";
import { useParams } from "react-router-dom";
import { peopleList } from "../api/api";

export default function Transactions() {
  const { external_id } = useParams();
  const [balances, setBalances] = useState([]);
  //  const [selectedPerson, setSelectedPerson] = useState(null);
  const globalContext = useContext(GlobalContext);

  const refreshPeopleList = useCallback(async () => {
    const response = await peopleList();
    if (response[0].status === 200) {
      setBalances(response[1].results);
    }
  }, [peopleList, setBalances]);

  // const fetchPeopleList = async () => {
  //   const response = await peopleList();
  //   if (response[0].status === 200) {
  //     setPeople(response[1].results);
  //   }
  // };

  useEffect(() => {
    globalContext.dispatch({ type: "set_current_page", value: "transactions" });
    refreshPeopleList();
    return () => {
      globalContext.dispatch({ type: "set_current_page", value: null });
    };
  }, []);

  // useEffect(async () => {
  //   if (external_id) {
  //     const response = await getBalance({ external_id: external_id });
  //     if (response[0].status === 200) setSelectedPerson(response[1]);
  //   }
  // }, [external_id, people]);

  // const globalState = {
  //   fetchPeopleList: fetchPeopleList,
  // };

  return (
    <div className="grid grid-cols-8">
      <div
        className={`md:border-l-2 md:border-r-2 border-secondary h-screen ${
          external_id
            ? "hidden md:block col-span-3"
            : "col-span-8 md:col-span-3"
        }`}
      >
        <TransactionPeopleList balances={balances} />
      </div>
      <div
        className={` ${
          external_id
            ? "col-span-8 md:col-span-5"
            : "hidden md:block col-span-5"
        }`}
      >
        something <Dummy />
      </div>
    </div>
  );
}
