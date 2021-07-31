import React, { useState, useEffect, useContext } from "react";
import { PendingTransactionsCarousel } from "./PendingTransactionsCarousel";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSelectedUser,
  fetchTransactions,
} from "../../../redux/transactions/actions";

export const TransactionHistory = ({ external_id }) => {
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (external_id) {
      dispatch(fetchSelectedUser(external_id));
      dispatch(fetchTransactions(external_id));
    }
  }, [external_id]);

  const personInfo = useSelector((state) => state.transaction.selectedUser);
  const transactions = useSelector((state) => state.transaction.transactions);

  useEffect(() => {
    if (personInfo) {
      setPendingTransactions(
        transactions.filter((transaction) => transaction.status === 1)
      );
    }
  }, [transactions]);

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
