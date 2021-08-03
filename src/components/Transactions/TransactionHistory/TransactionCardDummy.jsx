import React from "react";
import { useSelector } from "react-redux";
import { Rectangle } from "../../dummy/Rectangle";

export const TransactionCardDummy = () => {
  return (
    <div className="flex mx-2 items-center px-3 py-1 border-l-8 md:gap-3 animate-pulse h-14 border-gray-300">
      <div className="flex justify-between h-8 w-full">
        <Rectangle width="w-64" />
        <Rectangle width="w-12" />
      </div>
    </div>
  );
};
