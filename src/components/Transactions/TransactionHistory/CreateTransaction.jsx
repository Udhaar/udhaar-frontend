import React, { useState, Fragment } from "react";
import { createTransaction } from "../../../api/api";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { fetchBalances } from "../../../redux/balances/actions";
import { fetchTransactions } from "../../../redux/transactions/actions";

export const CreateTransactionComponent = ({ external_id }) => {
  const [formData, setFormData] = useState({
    amount: 0,
    gaveOrTook: "gave",
  });
  const [date, setDate] = useState(new Date());
  const [showCreateTransactionModal, setShowCreateTransactionModal] =
    React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      amount: formData.amount,
      message: formData.description,
    };
    if (formData.gaveOrTook === "gave") data["receiver"] = external_id;
    else data["payer"] = external_id;

    const response = await createTransaction(data, {});
    if (response[0].status === 201) {
      toast.success("Transaction successfully created");
      setShowCreateTransactionModal(false);
    }
    dispatch(fetchBalances());
    dispatch(fetchTransactions(external_id));
  };

  return (
    <div>
      <div className="">
        <button
          className="bg-secondary text-white w-full py-3 px-4 text-center text-lg"
          onClick={() => setShowCreateTransactionModal(true)}
        >
          Create Transaction
        </button>
        <>
          <Transition appear show={showCreateTransactionModal} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => {
                setShowCreateTransactionModal(false);
              }}
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
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div>
                      <form className="flex flex-col gap-3 py-1">
                        <select
                          value={formData.gaveOrTook}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              gaveOrTook: e.target.value,
                            })
                          }
                          className="rounded-md"
                        >
                          <option value="gave">Gave</option>
                          <option value="took">Took</option>
                        </select>

                        <input
                          type="number"
                          placeholder="Amount"
                          id="amount"
                          className="text-black col-span-3 rounded-md"
                          value={formData.amount}
                          onChange={(e) =>
                            setFormData({ ...formData, amount: e.target.value })
                          }
                        />

                        <label htmlFor="date" className="px-2 col-span-1">
                          on
                        </label>
                        <input
                          type="date"
                          placeholder="Date"
                          id="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="text-black rounded-md col-span-5"
                        />

                        <label htmlFor="description" className="px-2">
                          for
                        </label>
                        <input
                          type="text"
                          placeholder="Description"
                          id="description"
                          className="text-black rounded-md flex-grow"
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                        />

                        <input
                          type="submit"
                          value="Create Transaction"
                          onClick={(e) => handleSubmit(e)}
                          className="bg-secondary text-white py-3 rounded-lg mt-1"
                        />
                      </form>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
    </div>
  );
};
