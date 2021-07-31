import React from "react";

const LargeButton = ({ text, widthClass, onClick }) => {
  return (
    <button
      className={`rounded-lg text-2xl ${widthClass} px-5 py-2`}
      onClick={onClick ? onClick : () => {}}
    >
      {text}
    </button>
  );
};

export default LargeButton;
