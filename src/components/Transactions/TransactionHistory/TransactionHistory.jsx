import React, { useState, useEffect, useContext } from "react";
import { getBalance, transactionList } from "../../../api/api";
import { PendingTransactionsCarousel } from "./PendingTransactionsCarousel";
import { TransactionContext } from "../../../pages/Transactions";

export const TransactionHistory = ({ external_id }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const transactionContext = useContext(TransactionContext);
  console.log(transactionContext);
  // const external_id = transactionContext.state.external_id;
  // const history = useHistory();
  useEffect(async () => {
    if (external_id) {
      // const response = await getBalance({ external_id: external_id });
      // if (response[0].status === 200) setPersonInfo(response[1]);
      transactionContext.dispatch({
        type: "set_selected_user",
        value: external_id,
      });
      transactionContext.dispatch({
        type: "refresh_transactions",
        value: "",
      });
    }
  }, [external_id]);

  useEffect(async () => {
    if (personInfo) {
      const response = await transactionList({
        user_external_id: personInfo.user.external_id,
      });
      if (response[0].status === 200) {
        setTransactions(
          response[1].results.sort((t1, t2) => {
            return t1.created_date - t2.created_date || t1.status - t2.status;
          })
        );
      }
    }
  }, [personInfo]);

  useEffect(() => {
    if (personInfo) {
      setPendingTransactions(
        transactions.filter((transaction) => {
          return transaction.status === 1;
        })
      );
      // setPendingTransactions(pendings);
    }
  }, [transactions]);

  console.log("pending transaction", pendingTransactions);

  return external_id ? (
    <div className="flex flex-col flex-shrink-0 flex-grow-0 h-screen">
      <div className="flex justify-between bg-secondary h-20 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              window.history.back(-1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="pr-3 md:pl-3 py-2 transition flex-grow text-white">
          <div className="flex justify-between text-2xl">
            <h3>
              {personInfo?.user.first_name + " " + personInfo?.user.last_name}
            </h3>
            <p> ₹ {Math.abs(personInfo?.balance)} </p>
          </div>
          <div className="flex justify-between text-sm">
            <h3>{personInfo?.user.email}</h3>
            <p>{personInfo?.balance >= 0 ? "You will get" : "You will pay"}</p>
          </div>
        </div>
      </div>
      <PendingTransactionsCarousel pendingTransactions={pendingTransactions} />
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center text-2xl text-secondary">
      No transaction history
    </div>
  );
};
