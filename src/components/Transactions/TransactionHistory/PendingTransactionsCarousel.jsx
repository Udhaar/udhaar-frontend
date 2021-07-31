import React, { useRef } from "react";
import { PendingTransactionCard } from "./PendingTransactionCard";

export const PendingTransactionsCarousel = ({ pendingTransactions }) => {
  const carousel = useRef(null);

  const next = () => {
    carousel.current.scrollLeft += 200;
  };

  const prev = () => {
    carousel.current.scrollLeft -= 200;
  };

  return pendingTransactions.length > 0 ? (
    <div className="flex justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        onClick={prev}
        className="cursor-pointer w-12 md:w-16 flex-grow-0 flex-shrink-0"
      >
        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
      </svg>

      <div
        className="flex gap-5 overflow-auto hidden-scrollbar"
        ref={carousel}
        style={{ scrollBehavior: "smooth" }}
      >
        {pendingTransactions.map((transaction) => (
          <PendingTransactionCard
            transaction={transaction}
            key={transaction.external_id}
          />
        ))}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        onClick={next}
        className="cursor-pointer w-12 md:w-16 flex-grow-0 flex-shrink-0"
      >
        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
      </svg>
    </div>
  ) : (
    <div className="text-center my-auto text-xl py-3">No pending approvals</div>
  );
};
