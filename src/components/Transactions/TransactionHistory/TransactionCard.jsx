import React from "react";
import { useSelector } from "react-redux";
import {
  format,
  parseISO,
  formatDistanceToNow,
  differenceInDays,
  subMinutes,
} from "date-fns";

export const TransactionCard = ({ transaction }) => {
  const selectedUser = useSelector((state) => state.transaction.selectedUser);
  const gave = transaction.receiver === selectedUser?.user.external_id || null;
  const color =
    status === 1 ? "border-primary" : gave ? "border-safe" : "border-danger";

  const todayDate = new Date();
  const createdDate = subMinutes(
    parseISO(transaction.created_date),
    todayDate.getTimezoneOffset()
  );
  const formattedDateString =
    differenceInDays(todayDate, createdDate) > 2
      ? format(createdDate, "LLLL d, yyyy h:mm b")
      : formatDistanceToNow(createdDate) + " ago";

  return (
    <div
      className={`flex flex-col md:flex-row mx-2 justify-between items-center px-3 py-1 border-l-8 md:gap-3 ${color} ${
        transaction.status === 1 ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col w-full md:w-auto">
        <div className="leading-tight">{transaction.message}</div>
        <div className="text-xs">{formattedDateString}</div>
      </div>
      <div className="w-full md:w-auto text-left md:text-right">
        {gave ? "You gave " : "You took "} ₹{transaction.amount}
        <br />
        {transaction.status === 1 ? "(Pending)" : ""}
      </div>
    </div>
  );
};
