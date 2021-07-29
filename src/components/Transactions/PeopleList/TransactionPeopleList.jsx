import React from "react";
import { PeopleListItem } from "./PeopleListItem";

export const TransactionPeopleList = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-between h-screen">
        <div className="py-2 px-3">
          <input
            type="text"
            placeholder="Find people"
            className="w-full rounded-lg text-lg px-4 py-2 top-0 inline-block outline-none border-none bg-primary "
          />
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
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
          <PeopleListItem
            firstName="Divya"
            lastName="Garg"
            balance="30"
            email="divya@divya.com"
          />
        </div>
      </div>
    </>
  );
};
