import React from "react";
import { Link } from "react-router-dom";

export const PeopleListItem = ({
  firstName,
  lastName,
  balance,
  email,
  external_id,
}) => {
  return (
    <Link to={`/transactions/${external_id}`}>
      <div className="px-3 pt-1 hover:bg-primary cursor-pointer transition">
        <div className="flex justify-between text-2xl">
          <h3>{firstName + " " + lastName}</h3>
          <p>₹{Math.abs(balance)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <h3>{email}</h3>
          <p>{balance >= 0 ? "You will get" : "You will pay"}</p>
        </div>
        <div className="border-2 border-[#f0f5ff] mx-4 mt-2"></div>
      </div>
    </Link>
  );
};
