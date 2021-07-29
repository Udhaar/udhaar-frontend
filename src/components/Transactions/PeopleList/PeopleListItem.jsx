import React from "react";

export const PeopleListItem = ({ firstName, lastName, balance, email }) => {
  return (
    <div
      className="px-3 pt-1 hover:bg-primary cursor-pointer transition"
      // onClick={() => handleClick(person.user.external_id)}
    >
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
  );
};
