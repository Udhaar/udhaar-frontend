import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useReducer,
  createContext,
} from "react";
import { TransactionPeopleList } from "../components/Transactions/PeopleList/TransactionPeopleList";
// import GlobalContext from "../GlobalContext";
import { useParams } from "react-router-dom";
import { getBalances, transactionList } from "../api/api";
import { TransactionHistory } from "../components/Transactions/TransactionHistory/TransactionHistory";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/ui/actions";

const initialState = {
  selectedUser: null,
  transactions: null,
  balances: null,
};

const reducer = (state, action) => {
  let response = null;
  switch (action.type) {
    case "set_selected_user":
      return { ...state, selectedUser: action.value };
    // case "refresh_transactions":
    //   response = await transactionList({
    //     external_id: state.selectedUser,
    //   });
    //   if (response[0].status === 200) {
    //     return { ...state, transactions: response[1].results };
    //   }
    //   return { ...state };
    case "refresh_people":
      return { ...state, balances: action.value };
  }
};

export const TransactionContext = createContext();

export default function Transactions() {
  const dispatch = useDispatch();

  const { external_id } = useParams();
  const [transactionsState, transactionsDispatch] = useReducer(
    reducer,
    initialState
  );

  // const globalContext = useContext(GlobalContext);

  const refreshPeopleList = useCallback(async () => {
    const response = await getBalances();
    if (response[0].status === 200) {
      transactionsDispatch({
        type: "refresh_people",
        value: response[1].results,
      });
    }
  }, [getBalances]);

  useEffect(() => {
    // globalContext.dispatch({ type: "set_current_page", value: "transactions" });
    dispatch(setCurrentPage("transactions"));
    refreshPeopleList();
    return () => {
      dispatch(setCurrentPage(null));
      // globalContext.dispatch({ type: "set_current_page", value: null });
    };
  }, []);

  return (
    <TransactionContext.Provider
      value={{ state: transactionsState, dispatch: transactionsDispatch }}
    >
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
          something
          {/* <TransactionHistory external_id={external_id} /> */}
        </div>
      </div>
    </TransactionContext.Provider>
  );
}
