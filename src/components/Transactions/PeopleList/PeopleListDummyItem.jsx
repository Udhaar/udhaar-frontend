import React from "react";
import { Rectangle } from "../../dummy/Rectangle";

export const PeopleListDummyItem = () => {
  return (
    <>
      <div className="px-3 pt-1 animate-pulse">
        <div className="flex justify-between text-2xl h-8 mb-2">
          <div className="flex gap-3">
            <Rectangle width="w-32" />
            <Rectangle width="w-32" />
          </div>
          <Rectangle width="w-16" />
        </div>
        <div className="flex justify-between h-3">
          <Rectangle width="w-52" />
          <Rectangle width="w-20" />
        </div>
        <div className="border-2 border-[#f0f5ff] mx-4 mt-2"></div>
      </div>
    </>
  );
};
