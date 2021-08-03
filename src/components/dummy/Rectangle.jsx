import React from "react";

export const Rectangle = ({ width, bg }) => {
  return <div className={`${bg ? bg : "bg-gray-300"} ${width}`}></div>;
};
