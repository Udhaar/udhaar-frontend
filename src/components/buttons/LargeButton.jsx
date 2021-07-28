import React from "react";

const LargeButton = ({ text, widthClass }) => {
  return (
    <button className={`rounded-lg text-2xl ${widthClass} px-5 py-2`}>
      {text}
    </button>
  );
};

export default LargeButton;
