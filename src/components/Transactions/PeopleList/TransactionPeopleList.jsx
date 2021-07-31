import React, { useEffect, useState } from "react";
import { PeopleListItem } from "./PeopleListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalances } from "../../../redux/balances/actions";
import { openNavbar } from "../../../redux/ui/actions";

export const TransactionPeopleList = () => {
  const dispatch = useDispatch();
  const balances = useSelector((state) => state.balance.balances);
  useEffect(() => {
    dispatch(fetchBalances());
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between items-between h-screen">
        <div className="py-2 px-3">
          <div className="flex flex-shrink-0 flex-grow-0 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-2 border-1 border-primary md2:hidden text-secondary"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => {
                dispatch(openNavbar());
              }}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Find people"
              className="w-full rounded-lg text-lg px-4 py-2 top-0 inline-block outline-none border-none bg-primary "
            />
          </div>
          <div className="flex text-sm justify-between my-2 gap-2">
            <div className="bg-primary rounded-md px-2 py-1 flex-1">
              <label>Sort by :</label>
              <select
                name="sort_by"
                id="sort_by"
                className="bg-primary outline-none cursor-pointer w-full"
              >
                <option value="Name">Name</option>
                <option value="Amount">Amount</option>
              </select>
            </div>
            <div className="bg-primary rounded-md px-2 py-1 flex-1">
              <label>Filter by :</label>
              <select
                name="filter_by"
                id="filter_by"
                className="bg-primary outline-none cursor-pointer w-full"
              >
                <option value="Name">Money you owe</option>
                <option value="Amount">Money to pay</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-auto flex-grow ">
          {balances?.length > 0 ? (
            balances?.map((balance) => (
              <PeopleListItem
                firstName={balance.user.first_name}
                balance={balance.balance}
                lastName={balance.user.last_name}
                email={balance.user.email}
                key={balance.user.external_id}
                external_id={balance.user.external_id}
              />
            ))
          ) : (
            <div>No people</div>
          )}
        </div>
      </div>
    </>
  );
};
