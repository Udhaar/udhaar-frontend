import React, { useEffect, Fragment, useState } from "react";
import { PeopleListItem } from "./PeopleListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalances } from "../../../redux/balances/actions";
import { openNavbar } from "../../../redux/ui/actions";
import { Dialog, Transition } from "@headlessui/react";
import { searchUser } from "../../../api/api";
import { useHistory } from "react-router";
export const TransactionPeopleList = () => {
  const dispatch = useDispatch();
  const [openSearchForm, setOpenSearchForm] = useState(false);
  const [searchEmail, setSearchEmail] = React.useState("");
  const balances = useSelector((state) => state.balance.balances);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchBalances());
  }, []);
  const handleSearchUser = async (e) => {
    e.preventDefault();
    const response = await searchUser({ email: searchEmail });
    if (response[0].status === 200) {
      setOpenSearchForm(false);
      history.push(`/transactions/${response[1].external_id}`);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between items-between h-screen relative">
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
          <div className="text-sm justify-between my-2">
            <div className="bg-primary rounded-md p-2 gap-2 mb-2 flex items-center">
              <label>Sort by :</label>
              <select
                name="sort_by"
                id="sort_by"
                className="bg-primary outline-none cursor-pointer h-8 text-xs py-0 rounded flex-grow"
              >
                <option value="Name">Name</option>
                <option value="Amount">Amount</option>
              </select>
            </div>
            <div className="bg-primary rounded-md p-2 gap-2 mb-2 flex items-center">
              <label>Filter by :</label>
              <select
                name="filter_by"
                id="filter_by"
                className="bg-primary outline-none cursor-pointer h-8 text-xs py-0 rounded flex-grow"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 rounded-md text-white absolute bottom-5 right-5 bg-secondary p-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => {
            setOpenSearchForm(true);
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <Transition appear show={openSearchForm} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpenSearchForm(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xs p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center mb-4"
                >
                  Create transaction with
                </Dialog.Title>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={searchEmail}
                    id="decline_message"
                    placeholder="Email"
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="rounded-lg"
                  />
                  <input
                    type="submit"
                    className="bg-danger text-white px-3 py-2 rounded-md cursor-pointer"
                    onClick={(e) => handleSearchUser(e)}
                    value="Search person"
                  />
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
