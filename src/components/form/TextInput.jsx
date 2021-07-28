import React from "react";

const TextInput = ({ placeholder, value, setValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="w-full max-w-5xl block
       bg-primary mb-3 text-lg px-4 py-3 rounded-lg outline-none"
    />
  );
};

export default TextInput;
