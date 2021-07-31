import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { declineOrAcceptTransaction } from "../../../api/api";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  fetchSelectedUser,
} from "../../../redux/transactions/actions";
import { fetchBalances } from "../../../redux/balances/actions";

export const PendingTransactionCard = ({ transaction }) => {
  const [openDeclineForm, setOpenDeclineForm] = useState(false);
  const [openAcceptDialog, setOpenAcceptDialog] = useState(false);
  const [declineMessage, setDeclineMessage] = useState("");
  const selectedUser = useSelector((state) => state.transaction.selectedUser);
  const currentUser = useSelector((state) => state.ui.currentUser);
  const dispatch = useDispatch();

  const handleSubmit = async (accept) => {
    let data = {};
    if (accept) {
      data = {
        status: 2,
      };
    } else {
      data = {
        status: 3,
        decline_comment: declineMessage,
      };
    }

    const response = await declineOrAcceptTransaction(data, {
      external_id: transaction.external_id,
    });
    if (response[0].status === 200) {
      setOpenDeclineForm(false);
      if (accept) {
        setOpenAcceptDialog(false);
        toast.success(`Transaction accepted successfully`);
      } else {
        setOpenDeclineForm(false);
        toast.success(`Transaction declined successfully`);
      }
      dispatch(fetchBalances());
      dispatch(fetchTransactions(selectedUser.user.external_id));
      dispatch(fetchSelectedUser(selectedUser.user.external_id));
    }
  };

  return (
    <div className="bg-primary w-[13rem] md:w-[17rem] h-[9.91rem] flex flex-col justify-between px-5 py-2 my-2 mx-auto rounded-2xl flex-grow-0 flex-shrink-0">
      <h6 className="text-xs text-center">
        {" "}
        {transaction.payer === currentUser.external_id
          ? "You gave"
          : "You took"}
      </h6>
      <h3 className="text-center text-4xl font-bold">₹{transaction.amount}</h3>
      <p className="text-center text-xs">{transaction.message}</p>
      <div className="my-2 flex justify-between">
        <button
          className="bg-safe text-white px-3 py-1 rounded-md"
          onClick={() => setOpenAcceptDialog(true)}
        >
          Accept
        </button>
        <Transition appear show={openAcceptDialog} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setOpenAcceptDialog(false)}
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                  <div className="flex flex-col items-center gap-3">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      Are you sure you want to accept this transaction?
                    </Dialog.Title>
                    <div>
                      You are{" "}
                      {transaction.payer === currentUser.external_id
                        ? "giving"
                        : "taking"}{" "}
                      ₹{transaction.amount} for {transaction.message}
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
                      <button
                        className="bg-danger text-white px-3 py-2 rounded-md flex-1"
                        onClick={() => setOpenAcceptDialog(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-white px-3 py-2 rounded-md flex-1 bg-safe"
                        onClick={() => handleSubmit(true)}
                      >
                        Accept Transaction
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <button
          className="bg-danger text-white px-3 py-1 rounded-md"
          onClick={() => setOpenDeclineForm(true)}
        >
          Decline
        </button>

        <Transition appear show={openDeclineForm} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setOpenDeclineForm(false)}
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
                <div className="inline-block w-full max-w-xs p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                  <div className="flex flex-col items-center gap-3">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Decline Message
                    </Dialog.Title>
                    <input
                      type="text"
                      value={declineMessage}
                      id="decline_message"
                      onChange={(e) => setDeclineMessage(e.target.value)}
                      className="rounded-lg w-full"
                    />
                    <button
                      className="bg-danger text-white px-3 py-2 rounded-md w-full"
                      onClick={() => handleSubmit(false)}
                    >
                      Decline Transaction
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};
