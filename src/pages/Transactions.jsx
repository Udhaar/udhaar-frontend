import React, { useEffect } from "react";
import { TransactionPeopleList } from "../components/Transactions/PeopleList/TransactionPeopleList";
import { useParams } from "react-router-dom";
import { TransactionHistory } from "../components/Transactions/TransactionHistory/TransactionHistory";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/ui/actions";

export default function Transactions() {
  const dispatch = useDispatch();
  const { external_id } = useParams();

  useEffect(() => {
    dispatch(setCurrentPage("transactions"));
    return () => {
      dispatch(setCurrentPage(null));
    };
  }, []);

  return (
    <div className="grid grid-cols-8">
      <div
        className={`md:border-l-2 md:border-r-2 border-secondary h-screen ${
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
        <TransactionHistory external_id={external_id} />
      </div>
    </div>
  );
}
